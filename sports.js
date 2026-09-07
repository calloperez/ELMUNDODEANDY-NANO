// ============================================================
// SPORTS DATA — deporte representativo + colores de la camiseta
// de la selección nacional, por país.
//
// Separado a propósito de data.js (datos educativos generales) y
// de photos.js (catálogo de imágenes) — esta es una tercera capa
// de contenido, con su propio getter.
//
// IMPORTANTE sobre los colores:
// - Son los colores TRADICIONALES y ESTABLES de la camiseta
//   principal de la selección nacional (no de un club privado).
// - Se evita cualquier afirmación demasiado específica que pueda
//   cambiar de temporada en temporada (por eso "shirt_description"
//   habla en términos generales — "camiseta a rayas...", no
//   "la camiseta 2026 tiene tal detalle").
// - NO se usan escudos, logos ni imágenes oficiales de ningún tipo.
//   La camiseta que dibuja la app es una silueta genérica coloreada
//   con estos hex, no una reproducción de una prenda real.
//
// Cobertura actual: los 13 países del Nivel 1 (los mismos que ya
// tienen el resto del contenido más completo). Para el resto de los
// 195, getCountrySport() devuelve null y la UI muestra el fallback
// "Información deportiva próximamente" — nunca rompe la pantalla.
// ============================================================

const SPORTS_DATA = {
  ar: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Argentina", team_en: "Argentina National Team",
    shirt_colors_es: "Celeste y blanca", shirt_colors_en: "Sky blue and white",
    shirt_hex: ["#75AADB", "#FFFFFF"],
    shirt_description_es: "Camiseta a rayas verticales celestes y blancas, con pantalón negro.",
    shirt_description_en: "Vertically striped sky blue and white shirt, with black shorts.",
  },
  br: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Brasileña", team_en: "Brazil National Team",
    shirt_colors_es: "Amarilla y verde", shirt_colors_en: "Yellow and green",
    shirt_hex: ["#FFDF00", "#009739"],
    shirt_description_es: "Camiseta amarilla con detalles verdes, pantalón azul.",
    shirt_description_en: "Yellow shirt with green trim, blue shorts.",
  },
  uy: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Uruguaya", team_en: "Uruguay National Team",
    shirt_colors_es: "Celeste", shirt_colors_en: "Sky blue",
    shirt_hex: ["#5DA9E9", "#0038A8"],
    shirt_description_es: "Camiseta celeste, conocida como \"La Celeste\", pantalón negro.",
    shirt_description_en: "Sky blue shirt, known as \"La Celeste\", black shorts.",
  },
  co: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Colombiana", team_en: "Colombia National Team",
    shirt_colors_es: "Amarilla", shirt_colors_en: "Yellow",
    shirt_hex: ["#FCD116", "#003893"],
    shirt_description_es: "Camiseta amarilla con detalles azules y rojos.",
    shirt_description_en: "Yellow shirt with blue and red trim.",
  },
  cl: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Chilena", team_en: "Chile National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#D52B1E", "#0033A0"],
    shirt_description_es: "Camiseta roja, conocida como \"La Roja\", con detalles azules.",
    shirt_description_en: "Red shirt, known as \"La Roja\", with blue trim.",
  },
  pe: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Peruana", team_en: "Peru National Team",
    shirt_colors_es: "Blanca con franja roja", shirt_colors_en: "White with a red sash",
    shirt_hex: ["#FFFFFF", "#D91023"],
    shirt_description_es: "Camiseta blanca con una franja diagonal roja.",
    shirt_description_en: "White shirt with a diagonal red sash.",
  },
  ec: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Ecuatoriana", team_en: "Ecuador National Team",
    shirt_colors_es: "Amarilla y azul", shirt_colors_en: "Yellow and blue",
    shirt_hex: ["#FFD100", "#002D62"],
    shirt_description_es: "Camiseta amarilla con detalles azules.",
    shirt_description_en: "Yellow shirt with blue trim.",
  },
  py: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Paraguaya", team_en: "Paraguay National Team",
    shirt_colors_es: "Roja y blanca", shirt_colors_en: "Red and white",
    shirt_hex: ["#D52B1E", "#FFFFFF"],
    shirt_description_es: "Camiseta a rayas rojas y blancas, conocida como \"La Albirroja\".",
    shirt_description_en: "Red and white striped shirt, known as \"La Albirroja\".",
  },
  bo: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Boliviana", team_en: "Bolivia National Team",
    shirt_colors_es: "Verde", shirt_colors_en: "Green",
    shirt_hex: ["#2E8B57", "#FFC72C"],
    shirt_description_es: "Camiseta verde con detalles dorados y rojos.",
    shirt_description_en: "Green shirt with gold and red trim.",
  },
  ve: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Venezolana", team_en: "Venezuela National Team",
    shirt_colors_es: "Vinotinto", shirt_colors_en: "Wine red (\"Vinotinto\")",
    shirt_hex: ["#7B1E3A", "#FFC72C"],
    shirt_description_es: "Camiseta vinotinto con detalles dorados.",
    shirt_description_en: "Wine-red shirt with gold trim.",
  },
  us: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección de Estados Unidos", team_en: "United States National Team",
    shirt_colors_es: "Blanca y azul", shirt_colors_en: "White and navy blue",
    shirt_hex: ["#FFFFFF", "#3C3B6E"],
    shirt_description_es: "Camiseta blanca con detalles azules y rojos.",
    shirt_description_en: "White shirt with navy blue and red trim.",
  },
  mx: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Mexicana", team_en: "Mexico National Team",
    shirt_colors_es: "Verde", shirt_colors_en: "Green",
    shirt_hex: ["#006847", "#FFFFFF"],
    shirt_description_es: "Camiseta verde con detalles blancos, pantalón blanco.",
    shirt_description_en: "Green shirt with white trim, white shorts.",
  },
  es: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Española", team_en: "Spain National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#C60B1E", "#FFC400"],
    shirt_description_es: "Camiseta roja con detalles dorados, pantalón azul.",
    shirt_description_en: "Red shirt with gold trim, blue shorts.",
  },
  fr: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Francesa", team_en: "France National Team",
    shirt_colors_es: "Azul", shirt_colors_en: "Blue",
    shirt_hex: ["#002395", "#FFFFFF"],
    shirt_description_es: "Camiseta azul con detalles blancos, pantalón blanco.",
    shirt_description_en: "Blue shirt with white trim, white shorts.",
  },
  it: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Italiana", team_en: "Italy National Team",
    shirt_colors_es: "Azul (Azzurri)", shirt_colors_en: "Blue (Azzurri)",
    shirt_hex: ["#0F4A99", "#FFFFFF"],
    shirt_description_es: "Camiseta azul, conocida como \"Azzurri\", pantalón blanco.",
    shirt_description_en: "Blue shirt, known as the \"Azzurri\", white shorts.",
  },
  jp: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Japonesa", team_en: "Japan National Team",
    shirt_colors_es: "Azul", shirt_colors_en: "Blue",
    shirt_hex: ["#0033A0", "#FFFFFF"],
    shirt_description_es: "Camiseta azul, conocida como \"Samurai Blue\", pantalón azul.",
    shirt_description_en: "Blue shirt, known as \"Samurai Blue\", blue shorts.",
  },
  cn: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección China", team_en: "China National Team",
    shirt_colors_es: "Roja y amarilla", shirt_colors_en: "Red and yellow",
    shirt_hex: ["#DE2910", "#FFDE00"],
    shirt_description_es: "Camiseta roja con detalles amarillos, pantalón blanco.",
    shirt_description_en: "Red shirt with yellow trim, white shorts.",
  },
  au: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Australiana", team_en: "Australia National Team",
    shirt_colors_es: "Dorada y verde", shirt_colors_en: "Gold and green",
    shirt_hex: ["#FFCD00", "#00843D"],
    shirt_description_es: "Camiseta dorada con detalles verdes, conocida como \"Socceroos\".",
    shirt_description_en: "Gold shirt with green trim, known as the \"Socceroos\".",
  },
  in: {
    sport_name_es: "Críquet", sport_name_en: "Cricket",
    team_es: "Selección de Críquet de India", team_en: "India Cricket Team",
    shirt_colors_es: "Azul", shirt_colors_en: "Blue",
    shirt_hex: ["#0033A0", "#FF9933"],
    shirt_description_es: "Camiseta azul, el equipo es conocido como \"Men in Blue\".",
    shirt_description_en: "Blue shirt, the team is known as \"Men in Blue\".",
  },
  eg: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Egipcia", team_en: "Egypt National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#CE1126", "#000000"],
    shirt_description_es: "Camiseta roja con detalles negros, conocida como \"Los Faraones\".",
    shirt_description_en: "Red shirt with black trim, known as \"The Pharaohs\".",
  },
  za: {
    sport_name_es: "Rugby", sport_name_en: "Rugby",
    team_es: "Selección Sudafricana (Springboks)", team_en: "South Africa National Team (Springboks)",
    shirt_colors_es: "Verde y dorada", shirt_colors_en: "Green and gold",
    shirt_hex: ["#007A4D", "#FFB81C"],
    shirt_description_es: "Camiseta verde con detalles dorados, conocida como \"Springboks\".",
    shirt_description_en: "Green shirt with gold trim, known as the \"Springboks\".",
  },
  de: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Alemana", team_en: "Germany National Team",
    shirt_colors_es: "Blanca y negra", shirt_colors_en: "White and black",
    shirt_hex: ["#FFFFFF", "#000000"],
    shirt_description_es: "Camiseta blanca con detalles negros, pantalón negro.",
    shirt_description_en: "White shirt with black trim, black shorts.",
  },
};

// ---------- Assets de camiseta (imagen real por país) ----------
// Separado de SPORTS_DATA por claridad, pero vive en el mismo archivo
// (sports.js) porque conceptualmente es "datos deportivos", no un
// asset de fotografía real como los de photos.js.
//
// Metadata por país:
//   asset_type     siempre "shirt"
//   asset_path     ruta local (assets/sports/shirts/<pais>.webp)
//   verified       true si el archivo ya existe y fue revisado
//   visual_style   "generic_national_team" (nunca un club, nunca un logo)
//   object_position ajuste fino opcional de encuadre (default "center center")
const SPORT_SHIRT_ASSETS = {
  ar: { country_id:"ar", asset_type:"shirt", asset_path:"assets/sports/shirts/argentina.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  br: { country_id:"br", asset_type:"shirt", asset_path:"assets/sports/shirts/brazil.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  uy: { country_id:"uy", asset_type:"shirt", asset_path:"assets/sports/shirts/uruguay.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  co: { country_id:"co", asset_type:"shirt", asset_path:"assets/sports/shirts/colombia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  cl: { country_id:"cl", asset_type:"shirt", asset_path:"assets/sports/shirts/chile.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  pe: { country_id:"pe", asset_type:"shirt", asset_path:"assets/sports/shirts/peru.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ec: { country_id:"ec", asset_type:"shirt", asset_path:"assets/sports/shirts/ecuador.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  py: { country_id:"py", asset_type:"shirt", asset_path:"assets/sports/shirts/paraguay.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  bo: { country_id:"bo", asset_type:"shirt", asset_path:"assets/sports/shirts/bolivia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ve: { country_id:"ve", asset_type:"shirt", asset_path:"assets/sports/shirts/venezuela.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
};

// Única forma en que el resto de la app debe resolver la imagen de camiseta.
function getSportShirtAsset(countryId){
  return SPORT_SHIRT_ASSETS[countryId] || null;
}

// ---------- Getters de datos deportivos (única forma en que el resto de la app debe leer SPORTS_DATA) ----------
function getCountrySport(countryId) {
  return SPORTS_DATA[countryId] || null;
}

function getSportShirt(countryId) {
  const s = SPORTS_DATA[countryId];
  if (!s) return null;
  return {
    colors_es: s.shirt_colors_es,
    colors_en: s.shirt_colors_en,
    hex: s.shirt_hex,
    description_es: s.shirt_description_es,
    description_en: s.shirt_description_en,
  };
}
