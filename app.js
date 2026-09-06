// ============================================================
// APP LOGIC — El Mundo de Andy&Nano
// Sin backend, sin llamadas de red en tiempo de ejecución.
// Progreso guardado en localStorage (offline-first real).
// ============================================================

const STORAGE_KEY = "andynano_state_v1";

const DEFAULT_STATE = {
  lang: "es",
  sound: true,
  music: true,
  contrast: false,
  bigText: false,
  reduceMotion: false,
  progress: {},      // { countryId: { flag:0-3, location:0-3, capital:0-3 } }
  sessionVisits: 0,  // países visitados desde que se abrió la app
};

let state = loadState();
let nav = ["screen-splash"];   // pila de navegación simple
let currentCountry = null;
let currentGameType = null;
let voices = [];

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return structuredClone(DEFAULT_STATE);
    return Object.assign(structuredClone(DEFAULT_STATE), JSON.parse(raw));
  }catch(e){ return structuredClone(DEFAULT_STATE); }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){ /* almacenamiento no disponible: seguimos en memoria */ }
}

function t(key, vars){
  let str = (I18N[state.lang] && I18N[state.lang][key]) || key;
  if(vars) for(const k in vars) str = str.replace(`{${k}}`, vars[k]);
  return str;
}

function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.getElementById("langToggle").textContent = state.lang === "es" ? "🇪🇸" : "🇬🇧";
}

function applyAccessibility(){
  document.documentElement.style.fontSize = state.bigText ? "21px" : "18px";
  document.body.style.filter = state.contrast ? "contrast(1.25) saturate(1.1)" : "none";
  document.getElementById("soundToggle").classList.toggle("on", state.sound);
  document.getElementById("musicSettingToggle").classList.toggle("on", state.music);
  document.getElementById("musicToggleBtn").textContent = state.music ? "🎵" : "🔕";
  document.getElementById("contrastToggle").classList.toggle("on", state.contrast);
  document.getElementById("bigTextToggle").classList.toggle("on", state.bigText);
  document.getElementById("reduceMotionToggle").classList.toggle("on", state.reduceMotion);
}

// ---------- Navegación ----------
function showScreen(id, push=true){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  const modal = document.getElementById("detailModal");
  if(modal) modal.classList.remove("show");
  if(push) nav.push(id);
  document.getElementById("backBtn").style.display = nav.length > 1 ? "flex" : "none";
}
function goBack(){
  window.speechSynthesis && window.speechSynthesis.cancel();
  if(nav.length > 1) nav.pop();
  const prev = nav[nav.length-1] || "screen-continents";
  showScreen(prev, false);
}

// ---------- Voz ----------
function pickVoice(lang){
  if(!voices.length) return null;
  const code = lang === "es" ? "es" : "en";
  return voices.find(v=>v.lang.toLowerCase().startsWith(code)) || null;
}
function speak(text){
  if(!state.sound || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = state.lang === "es" ? "es-ES" : "en-US";
  u.rate = 0.92;
  u.pitch = 1.05;
  const v = pickVoice(state.lang);
  if(v) u.voice = v;
  MusicEngine.duck();
  u.onend = MusicEngine.unduck;
  u.onerror = MusicEngine.unduck;
  window.speechSynthesis.speak(u);
}
if("speechSynthesis" in window){
  const loadVoices = ()=>{ voices = window.speechSynthesis.getVoices(); };
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

// ---------- Progreso ----------
function ensureProgress(id){
  if(!state.progress[id]) state.progress[id] = { flag:0, location:0, capital:0 };
  return state.progress[id];
}
function bumpProgress(id, field){
  const p = ensureProgress(id);
  p[field] = Math.min(3, p[field] + 1);
  saveState();
}
function isDiscovered(id){ return !!state.progress[id]; }
function domainLabel(level){
  return ["👀","🟡","🟢","⭐"][level] || "👀";
}

// ---------- Mapa mundial: pan + zoom + tap ----------
const mapWrap = document.getElementById("mapWrap");
const mapInner = document.getElementById("mapInner");
const mapToast = document.getElementById("mapToast");
let mapState = { x:0, y:0, scale:1 };
const pointers = new Map();
let pinchStartDist = 0, pinchStartScale = 1;
let dragStart = null, dragMoved = false;

function applyMapTransform(){
  mapInner.style.transform = `translate(${mapState.x}px, ${mapState.y}px) scale(${mapState.scale})`;
}
function clampScale(s){ return Math.min(4, Math.max(1, s)); }

mapWrap.addEventListener("pointerdown", (e)=>{
  mapWrap.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  dragMoved = false;
  if(pointers.size === 1){
    dragStart = { x:e.clientX, y:e.clientY, ox:mapState.x, oy:mapState.y };
  } else if(pointers.size === 2){
    const pts = [...pointers.values()];
    pinchStartDist = Math.hypot(pts[0].x-pts[1].x, pts[0].y-pts[1].y);
    pinchStartScale = mapState.scale;
  }
});
mapWrap.addEventListener("pointermove", (e)=>{
  if(!pointers.has(e.pointerId)) return;
  pointers.set(e.pointerId, {x:e.clientX, y:e.clientY});
  if(pointers.size === 1 && dragStart){
    const dx = e.clientX - dragStart.x, dy = e.clientY - dragStart.y;
    if(Math.abs(dx) > 6 || Math.abs(dy) > 6) dragMoved = true;
    mapState.x = dragStart.ox + dx;
    mapState.y = dragStart.oy + dy;
    applyMapTransform();
  } else if(pointers.size === 2){
    const pts = [...pointers.values()];
    const dist = Math.hypot(pts[0].x-pts[1].x, pts[0].y-pts[1].y);
    mapState.scale = clampScale(pinchStartScale * (dist / pinchStartDist));
    dragMoved = true;
    applyMapTransform();
  }
});
function endPointer(e){
  pointers.delete(e.pointerId);
  if(pointers.size === 0){
    if(!dragMoved) handleMapTap(e);
    dragStart = null;
  }
}
mapWrap.addEventListener("pointerup", endPointer);
mapWrap.addEventListener("pointercancel", endPointer);

document.getElementById("zoomInBtn").addEventListener("click", ()=>{
  mapState.scale = clampScale(mapState.scale + 0.5); applyMapTransform();
});
document.getElementById("zoomOutBtn").addEventListener("click", ()=>{
  mapState.scale = clampScale(mapState.scale - 0.5); applyMapTransform();
});
document.getElementById("zoomResetBtn").addEventListener("click", ()=>{
  mapState = {x:0,y:0,scale:1}; applyMapTransform();
});

// ---------- Sistema de progresión por nivel ----------
const LEVEL_UNLOCK_RATIO = 0.6; // 60% del nivel actual descubierto desbloquea el siguiente
let lastKnownUnlockedLevel = 1;
let levelSystemInitialized = false;

function countryLevel(id){
  const c = COUNTRIES.find(x=>x.id===id);
  return c ? c.difficulty : 4;
}
function countInLevel(level){
  return COUNTRIES.filter(c=>c.difficulty===level).length;
}
function discoveredInLevel(level){
  return COUNTRIES.filter(c=>c.difficulty===level && isDiscovered(c.id)).length;
}
function unlockThreshold(level){
  return Math.ceil(countInLevel(level) * LEVEL_UNLOCK_RATIO);
}
function getUnlockedLevel(){
  let lvl = 1;
  while(lvl < 4 && discoveredInLevel(lvl) >= unlockThreshold(lvl)) lvl++;
  return lvl;
}
function updateLevelProgressUI(){
  const el = document.getElementById("levelProgress");
  const lvl = getUnlockedLevel();
  if(lvl >= 4){
    el.textContent = t("level_progress_done");
  } else {
    const have = discoveredInLevel(lvl);
    const need = unlockThreshold(lvl);
    el.textContent = t("level_progress_locked", { count: Math.min(have,need), needed: need, next: lvl+1 });
  }
  if(lvl > lastKnownUnlockedLevel && levelSystemInitialized){
    showMapToast(t("level_up_toast", { level: lvl }));
    speak(t("level_up_toast", { level: lvl }));
  }
  lastKnownUnlockedLevel = lvl;
  levelSystemInitialized = true;
}

function handleMapTap(e){
  const target = document.elementFromPoint(e.clientX, e.clientY);
  if(!target || target.tagName !== "path") return;
  if(!target.classList.contains("known")) return;
  const cid = target.getAttribute("data-cid");
  const c = COUNTRIES.find(x=>x.id === cid);
  if(!c) return;
  if(c.difficulty > getUnlockedLevel()){
    showMapToast(t("locked_country_msg"));
    return;
  }
  document.querySelectorAll(".country.selected").forEach(p=>p.classList.remove("selected"));
  target.classList.add("selected");
  setTimeout(()=> openCountry(c), 420);
}
function showMapToast(msg){
  mapToast.textContent = msg;
  mapToast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> mapToast.classList.remove("show"), 1800);
}
function refreshMapDiscoveredStates(){
  const unlocked = getUnlockedLevel();
  document.querySelectorAll(".country.known").forEach(p=>{
    const cid = p.getAttribute("data-cid");
    p.classList.toggle("discovered", isDiscovered(cid));
    p.classList.toggle("locked", countryLevel(cid) > unlocked);
  });
  updateLevelProgressUI();
}

// ---------- Descubrimiento de país ----------
function openCountry(c){
  currentCountry = c;
  document.getElementById("discFlag").textContent = c.flag;
  document.getElementById("discCountry").textContent = c[`name_${state.lang}`];
  document.getElementById("illustrationBox").classList.remove("show");
  document.getElementById("illustrationBox").innerHTML = "";
  document.getElementById("moreGrid").classList.remove("show");
  document.getElementById("moreGrid").innerHTML = "";
  showScreen("screen-discover");
  narrateCountry(c);
}
function formatPopulation(n, lang){
  if(n == null) return null;
  if(n < 1000) return lang === "es" ? "menos de mil" : "less than a thousand";
  if(n < 1e6){
    const th = Math.round(n/1000);
    return lang === "es" ? `${th} mil` : `${th} thousand`;
  }
  if(n < 1e9){
    const mm = (n/1e6).toFixed(n < 10e6 ? 1 : 0);
    return lang === "es" ? `${mm} millones` : `${mm} million`;
  }
  const bn = (n/1e9).toFixed(2);
  return lang === "es" ? `${bn} mil millones` : `${bn} billion`;
}
function narrateCountry(c){
  const lang = state.lang;
  const name = c[`name_${lang}`];
  const cont = CONTINENTS[c.continent][lang];
  const cap = c[`capital_${lang}`];
  const fact = c[`fact_${lang}`] || t("coming_soon_fact");
  const line = document.getElementById("discLine");
  const lines = lang === "es"
    ? [`¡Llegamos a ${name}!`, `${name} ${t("is_in")} ${cont}.`, `${t("capital_is")} ${cap}.`, fact]
    : [`We landed in ${name}!`, `${name} ${t("is_in")} ${cont}.`, `${t("capital_is")} ${cap}.`, fact];
  let i = 0;
  function step(){
    line.textContent = lines[i];
    speak(lines[i]);
    i++;
    if(i < lines.length){
      const wait = Math.max(1800, lines[i-1].length * 70);
      window._discTimer = setTimeout(step, wait);
    } else {
      // Al terminar de contar todo, revelamos las características debajo
      // (antes requería tocar "Descubrir más" — ahora aparece solo, para
      // que la asociación bandera-características sea inmediata).
      window._discTimer = setTimeout(()=> revealCountryDetails(c), 900);
    }
  }
  clearTimeout(window._discTimer);
  step();
}
// ---------- Resolución de assets visuales (local -> url verificada -> dibujo -> placeholder) ----------
function getCountryAsset(id, type){
  return (typeof COUNTRY_ASSETS !== "undefined" && COUNTRY_ASSETS[id] && COUNTRY_ASSETS[id][type]) || null;
}
function placeholderHTML(asset){
  const icon = { hero:"🖼️", animal:"🐾", landmark:"📍", food:"🍽️", nature:"🌍" }[asset && asset._type] || "🖼️";
  const label = (asset && asset[`title_${state.lang}`]) || "";
  return `<div class="asset-placeholder"><span class="ph-icon">${icon}</span><span class="ph-text">${label}</span><span class="ph-soon">${t("asset_coming_soon")}</span></div>`;
}
function mountAssetImage(containerEl, asset, illustFallback){
  if(!asset){
    if(illustFallback){ containerEl.innerHTML = illustFallback; containerEl.classList.add("show"); }
    else { containerEl.innerHTML = ""; containerEl.classList.remove("show"); }
    return;
  }
  const candidates = [asset.path, asset.url].filter(Boolean);
  let i = 0;
  const img = document.createElement("img");
  img.alt = "";
  function tryNext(){
    if(i < candidates.length){
      img.src = candidates[i++];
    } else if(illustFallback){
      containerEl.innerHTML = illustFallback;
    } else {
      containerEl.innerHTML = placeholderHTML(asset);
    }
  }
  img.addEventListener("error", tryNext);
  containerEl.innerHTML = "";
  containerEl.appendChild(img);
  containerEl.classList.add("show");
  tryNext();
}

function revealCountryDetails(c){
  const illustBox = document.getElementById("illustrationBox");
  const illust = typeof ILLUSTRATIONS !== "undefined" ? ILLUSTRATIONS[c.id] : null;
  const landmarkAsset = getCountryAsset(c.id, "landmark");
  if(landmarkAsset) landmarkAsset._type = "landmark";
  mountAssetImage(illustBox, landmarkAsset, illust);

  const grid = document.getElementById("moreGrid");
  grid.innerHTML = "";
  const lang = state.lang;
  const items = [];
  if(c.animal) items.push({ emoji:c.animal, label:t("animal_lbl"), name:c[`animal_name_${lang}`], asset:getCountryAsset(c.id,"animal"), illust:null, assetType:"animal" });
  if(c.food) items.push({ emoji:c.food, label:t("food_lbl"), name:c[`food_name_${lang}`], asset:getCountryAsset(c.id,"food"), illust:null, assetType:"food" });
  if(c.landmark) items.push({ emoji:c.landmark, label:t("landmark_lbl"), name:c[`landmark_name_${lang}`], asset:landmarkAsset, illust:illust, assetType:"landmark" });
  if(c.sport) items.push({ emoji:c.sport, label:t("sport_lbl"), name:c[`sport_name_${lang}`], asset:null, illust:null, assetType:null });
  if(c.population != null){
    const popTxt = formatPopulation(c.population, lang);
    items.push({ emoji:"👨‍👩‍👧‍👦", label:t("pop_chip", { pop:popTxt }), name:null, asset:null, illust:null, noModal:true });
  }
  items.forEach(item=>{
    const chip = document.createElement("div");
    chip.className = "fact-chip";
    chip.innerHTML = `<span class="emoji">${item.emoji}</span><span class="txt">${item.label}</span>`;
    if(!item.noModal){
      chip.addEventListener("click", ()=> openDetailModal(item));
    }
    grid.appendChild(chip);
  });
  if(items.length) grid.classList.add("show");
}

// ---------- Modal de detalle al tocar un chip ----------
function openDetailModal(item){
  const modal = document.getElementById("detailModal");
  const title = item.name || item.label;
  const attrEl = document.getElementById("detailPhotoAttribution");
  const illustrationEl = document.getElementById("detailIllustration");
  document.getElementById("detailEmoji").textContent = (item.illust || item.asset) ? "" : item.emoji;
  if(item.asset){
    item.asset._type = item.assetType;
    mountAssetImage(illustrationEl, item.asset, item.illust);
    attrEl.textContent = item.asset.verified ? item.asset.source : "";
  } else {
    illustrationEl.innerHTML = item.illust || "";
    illustrationEl.classList.toggle("show", !!item.illust);
    attrEl.textContent = "";
  }
  document.getElementById("detailTitle").textContent = title;
  document.getElementById("detailCategory").textContent = item.label;
  modal.classList.add("show");
  speak(title);
}
document.getElementById("detailModal").addEventListener("click", (e)=>{
  if(e.target.id === "detailModal"){
    document.getElementById("detailModal").classList.remove("show");
  }
});
document.getElementById("voicePlayBtn").addEventListener("click", ()=>{
  if(currentCountry) narrateCountry(currentCountry);
});
document.getElementById("voiceMuteBtn").addEventListener("click", ()=>{
  state.sound = !state.sound;
  window.speechSynthesis && window.speechSynthesis.cancel();
  document.getElementById("voiceMuteBtn").textContent = state.sound ? "🔇" : "🔈";
  saveState();
});

// ---------- Mini-juego ----------
document.getElementById("playGameBtn").addEventListener("click", ()=> startGame(currentCountry));

function sampleOthers(country, n){
  const pool = COUNTRIES.filter(c=>c.id !== country.id);
  const picked = [];
  while(picked.length < n && pool.length){
    const idx = Math.floor(Math.random()*pool.length);
    picked.push(pool.splice(idx,1)[0]);
  }
  return picked;
}

function startGame(c){
  currentGameType = Math.random() < 0.5 ? "which_country" : "find_flag";
  const distractors = sampleOthers(c, 2);
  const options = [c, ...distractors].sort(()=>Math.random()-0.5);

  const promptEl = document.getElementById("gamePrompt");
  const bigFlag = document.getElementById("gameFlagBig");
  const optsEl = document.getElementById("gameOptions");
  document.getElementById("gameFeedback").textContent = "";
  optsEl.innerHTML = "";

  if(currentGameType === "which_country"){
    bigFlag.textContent = c.flag;
    promptEl.textContent = t("game_which_country");
    speak(t("game_which_country"));
    options.forEach(opt=>{
      const b = document.createElement("button");
      b.className = "opt-btn";
      b.textContent = opt[`name_${state.lang}`];
      b.addEventListener("click", ()=> answerGame(b, opt.id === c.id, "location"));
      optsEl.appendChild(b);
    });
  } else {
    bigFlag.textContent = "";
    const promptTxt = t("game_find_flag", { country: c[`name_${state.lang}`] });
    promptEl.textContent = promptTxt;
    speak(promptTxt);
    options.forEach(opt=>{
      const b = document.createElement("button");
      b.className = "opt-btn";
      b.style.fontSize = "2.2rem";
      b.textContent = opt.flag;
      b.addEventListener("click", ()=> answerGame(b, opt.id === c.id, "flag"));
      optsEl.appendChild(b);
    });
  }
  showScreen("screen-game");
}

function answerGame(btnEl, correct, field){
  document.querySelectorAll("#gameOptions .opt-btn").forEach(b=>b.disabled = true);
  const fb = document.getElementById("gameFeedback");
  if(correct){
    btnEl.classList.add("correct");
    fb.textContent = t("feedback_correct");
    bumpProgress(currentCountry.id, field);
    bumpProgress(currentCountry.id, "capital"); // visita cuenta también como exposición a capital
    setTimeout(()=> celebrate(currentCountry), 900);
  } else {
    btnEl.classList.add("wrong");
    fb.textContent = t("feedback_wrong");
    setTimeout(()=> startGame(currentCountry), 1300);
  }
}

// ---------- Celebración / sello ----------
function celebrate(c){
  ensureProgress(c.id);
  saveState();
  refreshMapDiscoveredStates();
  document.getElementById("celebrateCountry").textContent = `${c.flag} ${c[`name_${state.lang}`]}`;
  showScreen("screen-celebrate");
  speak(t("celebrate_title"));
  state.sessionVisits++;
  saveState();
}
function backToMap(){
  nav = ["screen-continents"];
  showScreen("screen-continents", false);
}
document.getElementById("celebrateContinueBtn").addEventListener("click", ()=>{
  if(state.sessionVisits > 0 && state.sessionVisits % 4 === 0){
    showPause();
  } else {
    backToMap();
  }
});

// ---------- Pausa / cierre de sesión ----------
function showPause(){
  const n = Object.keys(state.progress).length;
  document.getElementById("pauseSummary").textContent =
    state.lang === "es" ? `Llevás ${n} países descubiertos.` : `You've discovered ${n} countries so far.`;
  showScreen("screen-pause");
}
document.getElementById("pauseContinueBtn").addEventListener("click", backToMap);
document.getElementById("pauseExitBtn").addEventListener("click", ()=>{

  nav = ["screen-splash"];
  showScreen("screen-splash", false);
});

// ---------- Pasaporte ----------
document.getElementById("passportBtn").addEventListener("click", ()=> openPassport());
document.getElementById("passportBackBtn").addEventListener("click", goBack);
function openPassport(){
  const grid = document.getElementById("passportGrid");
  grid.innerHTML = "";
  COUNTRIES.forEach(c=>{
    const tile = document.createElement("div");
    const p = state.progress[c.id];
    tile.className = "pass-tile" + (p ? "" : " empty");
    tile.textContent = p ? c.flag : "❓";
    grid.appendChild(tile);
  });
  showScreen("screen-passport");
}

// ---------- Música de fondo ----------
function toggleMusic(){
  state.music = !state.music;
  saveState();
  document.getElementById("musicToggleBtn").textContent = state.music ? "🎵" : "🔕";
  document.getElementById("musicSettingToggle").classList.toggle("on", state.music);
  if(state.music){ MusicEngine.ensureContext(); MusicEngine.start(0.35); }
  else MusicEngine.stop();
}
document.getElementById("musicToggleBtn").addEventListener("click", toggleMusic);
document.getElementById("musicSettingToggle").addEventListener("click", toggleMusic);

// Los navegadores exigen un gesto del usuario antes de permitir audio;
// aprovechamos el primer toque en cualquier parte de la app para
// desbloquear el AudioContext y arrancar la música si está activada.
let audioUnlocked = false;
document.addEventListener("pointerdown", function unlockAudioOnce(){
  if(audioUnlocked) return;
  audioUnlocked = true;
  MusicEngine.ensureContext();
  if(state.music) MusicEngine.start(0.35);
}, { once:true });

// ---------- Splash / inicio ----------
document.getElementById("startBtn").addEventListener("click", ()=>{
  showScreen("screen-continents");
});
document.getElementById("backBtn").addEventListener("click", goBack);

// ---------- Idioma ----------
document.getElementById("langToggle").addEventListener("click", ()=>{
  state.lang = state.lang === "es" ? "en" : "es";
  saveState();
  applyI18n();
  document.getElementById("voiceMuteBtn").textContent = state.sound ? "🔇" : "🔈";
});

// ---------- Modo padres: barrera ----------
let holdTimer = null;
let gateAnswer = 0;
const gateBtn = document.getElementById("gateOpenBtn");
gateBtn.addEventListener("pointerdown", ()=>{
  holdTimer = setTimeout(openGate, 900);
});
["pointerup","pointerleave","pointercancel"].forEach(evt=>{
  gateBtn.addEventListener(evt, ()=> clearTimeout(holdTimer));
});
function openGate(){
  const a = 2 + Math.floor(Math.random()*6);
  const b = 2 + Math.floor(Math.random()*6);
  gateAnswer = a + b;
  document.getElementById("gateQuestion").textContent = `${a} + ${b} = ?`;
  document.getElementById("gateInput").value = "";
  showScreen("screen-gate");
}
document.getElementById("gateCancel").addEventListener("click", goBack);
document.getElementById("gateSubmit").addEventListener("click", ()=>{
  const val = parseInt(document.getElementById("gateInput").value, 10);
  if(val === gateAnswer){
    nav = ["screen-continents"];
    openParentProgress();
  } else {
    document.getElementById("gateQuestion").textContent += "  ❌";
  }
});

// ---------- Panel de padres: progreso ----------
document.getElementById("tabProgress").addEventListener("click", openParentProgress);
document.getElementById("tabSettings").addEventListener("click", ()=>{
  document.getElementById("tabProgress").classList.remove("active");
  document.getElementById("tabSettings").classList.add("active");
  showScreen("screen-parentSettings");
});
function openParentProgress(){
  document.getElementById("tabSettings")?.classList.remove("active");
  document.getElementById("tabProgress")?.classList.add("active");
  const panel = document.getElementById("progressPanel");
  panel.innerHTML = "";
  const discoveredCount = Object.keys(state.progress).length;
  const flagsOk = Object.values(state.progress).filter(p=>p.flag>=2).length;
  const capsOk = Object.values(state.progress).filter(p=>p.capital>=2).length;
  const contsExplored = new Set(Object.keys(state.progress).map(id=>{
    const c = COUNTRIES.find(x=>x.id===id); return c && c.continent;
  })).size;

  const summary = document.createElement("div");
  summary.innerHTML = `
    <div class="parent-row"><span>${t("countries_discovered")}</span><b>${discoveredCount}/${COUNTRIES.length}</b></div>
    <div class="parent-row"><span>${t("flags_recognized")}</span><b>${flagsOk}/${COUNTRIES.length}</b></div>
    <div class="parent-row"><span>${t("capitals_learned")}</span><b>${capsOk}/${COUNTRIES.length}</b></div>
    <div class="parent-row"><span>${t("continents_explored")}</span><b>${contsExplored}/5</b></div>
    <div style="height:10px"></div>
  `;
  panel.appendChild(summary);

  COUNTRIES.forEach(c=>{
    const p = state.progress[c.id] || {flag:0, location:0, capital:0};
    const row = document.createElement("div");
    row.className = "parent-row";
    row.innerHTML = `
      <span>${c.flag} ${c[`name_${state.lang}`]}</span>
      <span style="display:flex; gap:6px; font-size:.9rem;">
        <span title="bandera">🏳️${domainLabel(p.flag)}</span>
        <span title="ubicación">🌍${domainLabel(p.location)}</span>
        <span title="capital">🏙️${domainLabel(p.capital)}</span>
      </span>
    `;
    panel.appendChild(row);
  });
  showScreen("screen-parent");
}
document.getElementById("parentExitBtn").addEventListener("click", ()=>{
  nav = ["screen-continents"];
  showScreen("screen-continents", false);
});
document.getElementById("settingsBackBtn").addEventListener("click", ()=>{
  nav = ["screen-continents"];
  showScreen("screen-continents", false);
});

// ---------- Ajustes ----------
function bindToggle(id, key){
  document.getElementById(id).addEventListener("click", ()=>{
    state[key] = !state[key];
    saveState();
    applyAccessibility();
  });
}
bindToggle("soundToggle", "sound");
bindToggle("contrastToggle", "contrast");
bindToggle("bigTextToggle", "bigText");
bindToggle("reduceMotionToggle", "reduceMotion");

document.getElementById("resetProgressBtn").addEventListener("click", ()=>{
  if(confirm(state.lang === "es" ? "¿Reiniciar todo el progreso del niño?" : "Reset all of the child's progress?")){
    state.progress = {};
    state.sessionVisits = 0;
    saveState();
    refreshMapDiscoveredStates();
  }
});

// ---------- Registro del Service Worker (offline real) ----------
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{ /* si falla, la app sigue funcionando online */ });
  });
}

// ---------- Init ----------
applyI18n();
applyAccessibility();
refreshMapDiscoveredStates();
