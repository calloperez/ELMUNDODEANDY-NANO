// ============================================================
// MUSIC ENGINE — música de fondo generativa y suave
// No usa archivos de audio: sintetiza acordes con Web Audio API.
// 100% offline, sin derechos de autor (todo se genera en el dispositivo),
// pensada para un fondo calmo y predecible, nunca protagónico.
// ============================================================

const MusicEngine = (function () {
  let ctx = null;
  let masterGain = null;
  let filter = null;
  let playing = false;
  let chordTimer = null;
  let chordIndex = 0;
  let baseVolume = 0.35;
  const activeOsc = [];

  // Progresión simple y cíclica (Cmaj7 - Am7 - Fmaj7 - G(add9)),
  // notas en Hz. Repetitiva a propósito: la previsibilidad es lo que
  // ayuda a que el sonido quede en segundo plano en vez de competir
  // por la atención del niño.
  const CHORDS = [
    [261.63, 329.63, 392.0, 493.88],
    [220.0, 261.63, 329.63, 392.0],
    [174.61, 220.0, 261.63, 329.63],
    [196.0, 246.94, 293.66, 392.0],
  ];

  function ensureContext() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0;
      filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 1100;
      filter.Q.value = 0.25;
      masterGain.connect(filter);
      filter.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  }

  function playChord(freqs, duration) {
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = 0;
      osc.connect(g);
      g.connect(masterGain);
      const now = ctx.currentTime;
      const peak = 0.06 / freqs.length;
      g.gain.linearRampToValueAtTime(peak, now + 2.2);
      g.gain.linearRampToValueAtTime(0, now + duration);
      osc.start(now);
      osc.stop(now + duration + 0.2);
      activeOsc.push(osc);
      osc.onended = () => {
        const idx = activeOsc.indexOf(osc);
        if (idx >= 0) activeOsc.splice(idx, 1);
      };
    });
  }

  function loop() {
    const duration = 9; // segundos por acorde
    playChord(CHORDS[chordIndex % CHORDS.length], duration);
    chordIndex++;
    chordTimer = setTimeout(loop, duration * 1000 * 0.88);
  }

  function start(volume) {
    if (!ensureContext()) return;
    baseVolume = volume ?? baseVolume;
    if (playing) {
      setVolume(baseVolume);
      return;
    }
    playing = true;
    masterGain.gain.linearRampToValueAtTime(baseVolume, ctx.currentTime + 1.5);
    loop();
  }

  function stop() {
    playing = false;
    clearTimeout(chordTimer);
    if (masterGain && ctx) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.0);
    }
  }

  // Baja el volumen temporalmente (para no tapar la voz de Andy/Nano)
  // y lo devuelve a su nivel normal.
  function duck() {
    if (playing && masterGain && ctx) {
      masterGain.gain.linearRampToValueAtTime(baseVolume * 0.3, ctx.currentTime + 0.4);
    }
  }
  function unduck() {
    if (playing && masterGain && ctx) {
      masterGain.gain.linearRampToValueAtTime(baseVolume, ctx.currentTime + 0.8);
    }
  }

  function setVolume(v) {
    baseVolume = v;
    if (masterGain && ctx) masterGain.gain.linearRampToValueAtTime(v, ctx.currentTime + 0.5);
  }

  return { ensureContext, start, stop, duck, unduck, setVolume };
})();
