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
  gb: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección de Inglaterra", team_en: "England National Team",
    shirt_colors_es: "Blanca", shirt_colors_en: "White",
    shirt_hex: ["#FFFFFF", "#CF142B"],
    shirt_description_es: "Camiseta blanca con detalles rojos y azules, pantalón azul.",
    shirt_description_en: "White shirt with red and blue trim, navy shorts.",
  },
  pt: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Portuguesa", team_en: "Portugal National Team",
    shirt_colors_es: "Roja y verde", shirt_colors_en: "Red and green",
    shirt_hex: ["#B22234", "#046A38"],
    shirt_description_es: "Camiseta roja con detalles verdes, pantalón verde.",
    shirt_description_en: "Red shirt with green trim, green shorts.",
  },
  nl: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección de los Países Bajos", team_en: "Netherlands National Team",
    shirt_colors_es: "Naranja", shirt_colors_en: "Orange",
    shirt_hex: ["#FF6C00", "#003DA5"],
    shirt_description_es: "Camiseta naranja, conocida como \"La Naranja Mecánica\".",
    shirt_description_en: "Orange shirt, known as \"Clockwork Orange\".",
  },
  be: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Belga", team_en: "Belgium National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#DA121A", "#000000"],
    shirt_description_es: "Camiseta roja con detalles negros y dorados, conocida como \"Los Diablos Rojos\".",
    shirt_description_en: "Red shirt with black and gold trim, known as \"The Red Devils\".",
  },
  hr: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Croata", team_en: "Croatia National Team",
    shirt_colors_es: "A cuadros rojos y blancos", shirt_colors_en: "Red and white checkered",
    shirt_hex: ["#FF0000", "#FFFFFF"],
    shirt_description_es: "Camiseta a cuadros rojos y blancos (el patrón \"šahovnica\"), símbolo nacional croata.",
    shirt_description_en: "Red and white checkered shirt (the \"šahovnica\" pattern), a Croatian national symbol.",
  },
  pl: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Polaca", team_en: "Poland National Team",
    shirt_colors_es: "Blanca y roja", shirt_colors_en: "White and red",
    shirt_hex: ["#FFFFFF", "#DC143C"],
    shirt_description_es: "Camiseta blanca con detalles rojos.",
    shirt_description_en: "White shirt with red trim.",
  },
  dk: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Danesa", team_en: "Denmark National Team",
    shirt_colors_es: "Roja y blanca", shirt_colors_en: "Red and white",
    shirt_hex: ["#C60C30", "#FFFFFF"],
    shirt_description_es: "Camiseta roja con detalles blancos.",
    shirt_description_en: "Red shirt with white trim.",
  },
  se: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Sueca", team_en: "Sweden National Team",
    shirt_colors_es: "Amarilla y azul", shirt_colors_en: "Yellow and blue",
    shirt_hex: ["#FECC02", "#006AA7"],
    shirt_description_es: "Camiseta amarilla con detalles azules.",
    shirt_description_en: "Yellow shirt with blue trim.",
  },
  no: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Noruega", team_en: "Norway National Team",
    shirt_colors_es: "Roja, blanca y azul", shirt_colors_en: "Red, white and blue",
    shirt_hex: ["#EF2B2D", "#002868"],
    shirt_description_es: "Camiseta roja con una cruz blanca y azul inspirada en la bandera.",
    shirt_description_en: "Red shirt with a white and blue cross inspired by the flag.",
  },
  ch: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Suiza", team_en: "Switzerland National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#FF0000", "#FFFFFF"],
    shirt_description_es: "Camiseta roja con una cruz blanca inspirada en la bandera.",
    shirt_description_en: "Red shirt with a white cross inspired by the flag.",
  },
  tr: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Turca", team_en: "Turkey National Team",
    shirt_colors_es: "Roja y blanca", shirt_colors_en: "Red and white",
    shirt_hex: ["#E30A17", "#FFFFFF"],
    shirt_description_es: "Camiseta roja con detalles blancos, inspirada en la bandera.",
    shirt_description_en: "Red shirt with white trim, inspired by the flag.",
  },
  ua: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Ucraniana", team_en: "Ukraine National Team",
    shirt_colors_es: "Amarilla y azul", shirt_colors_en: "Yellow and blue",
    shirt_hex: ["#FFD700", "#0057B7"],
    shirt_description_es: "Camiseta amarilla con detalles azules, inspirada en la bandera.",
    shirt_description_en: "Yellow shirt with blue trim, inspired by the flag.",
  },
  rs: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Serbia", team_en: "Serbia National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#C6363C", "#0C4076"],
    shirt_description_es: "Camiseta roja con detalles azules.",
    shirt_description_en: "Red shirt with blue trim.",
  },
  ca: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Canadiense", team_en: "Canada National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#FF0000", "#FFFFFF"],
    shirt_description_es: "Camiseta roja con una hoja de arce inspirada en la bandera.",
    shirt_description_en: "Red shirt with a maple leaf inspired by the flag.",
  },
  ma: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Marroquí", team_en: "Morocco National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#C1272D", "#006233"],
    shirt_description_es: "Camiseta roja con detalles verdes, conocida como \"Los Leones del Atlas\".",
    shirt_description_en: "Red shirt with green trim, known as \"The Atlas Lions\".",
  },
  sn: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Senegalesa", team_en: "Senegal National Team",
    shirt_colors_es: "Blanca con detalles verdes y amarillos", shirt_colors_en: "White with green and yellow trim",
    shirt_hex: ["#FFFFFF", "#00853F"],
    shirt_description_es: "Camiseta blanca con detalles verdes y amarillos, conocida como \"Los Leones de la Teranga\".",
    shirt_description_en: "White shirt with green and yellow trim, known as \"The Lions of Teranga\".",
  },
  gh: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Ghanesa", team_en: "Ghana National Team",
    shirt_colors_es: "Blanca con una estrella negra", shirt_colors_en: "White with a black star",
    shirt_hex: ["#FFFFFF", "#000000"],
    shirt_description_es: "Camiseta blanca con detalles rojos, dorados y verdes, y una estrella negra.",
    shirt_description_en: "White shirt with red, gold and green trim, and a black star.",
  },
  cm: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Camerunesa", team_en: "Cameroon National Team",
    shirt_colors_es: "Verde", shirt_colors_en: "Green",
    shirt_hex: ["#007A5E", "#CE1126"],
    shirt_description_es: "Camiseta verde con detalles rojos y amarillos, conocida como \"Los Leones Indomables\".",
    shirt_description_en: "Green shirt with red and yellow trim, known as \"The Indomitable Lions\".",
  },
  ng: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Nigeriana", team_en: "Nigeria National Team",
    shirt_colors_es: "Verde con estampado de rayos", shirt_colors_en: "Green with a lightning pattern",
    shirt_hex: ["#008751", "#FFFFFF"],
    shirt_description_es: "Camiseta verde con un patrón geométrico blanco, conocida como \"Las Súper Águilas\".",
    shirt_description_en: "Green shirt with a white geometric pattern, known as \"The Super Eagles\".",
  },
  kr: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección de Corea del Sur", team_en: "South Korea National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#C60C30", "#FFFFFF"],
    shirt_description_es: "Camiseta roja, conocida como \"Los Guerreros Taeguk\".",
    shirt_description_en: "Red shirt, known as \"The Taeguk Warriors\".",
  },
  sa: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Saudí", team_en: "Saudi Arabia National Team",
    shirt_colors_es: "Verde", shirt_colors_en: "Green",
    shirt_hex: ["#006C35", "#FFFFFF"],
    shirt_description_es: "Camiseta verde con detalles blancos, conocida como \"Los Halcones Verdes\".",
    shirt_description_en: "Green shirt with white trim, known as \"The Green Falcons\".",
  },
  ir: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Iraní", team_en: "Iran National Team",
    shirt_colors_es: "Blanca", shirt_colors_en: "White",
    shirt_hex: ["#FFFFFF", "#239F40"],
    shirt_description_es: "Camiseta blanca con detalles verdes y rojos, inspirada en la bandera.",
    shirt_description_en: "White shirt with green and red trim, inspired by the flag.",
  },
  qa: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Catarí", team_en: "Qatar National Team",
    shirt_colors_es: "Vinotinto", shirt_colors_en: "Maroon",
    shirt_hex: ["#8D1B3D", "#FFFFFF"],
    shirt_description_es: "Camiseta vinotinto con detalles blancos.",
    shirt_description_en: "Maroon shirt with white trim.",
  },
  tn: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Tunecina", team_en: "Tunisia National Team",
    shirt_colors_es: "Roja", shirt_colors_en: "Red",
    shirt_hex: ["#E70013", "#FFFFFF"],
    shirt_description_es: "Camiseta roja con detalles blancos, conocida como \"Las Águilas de Cartago\".",
    shirt_description_en: "Red shirt with white trim, known as \"The Eagles of Carthage\".",
  },
  ci: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Marfileña", team_en: "Ivory Coast National Team",
    shirt_colors_es: "Naranja", shirt_colors_en: "Orange",
    shirt_hex: ["#FF8200", "#FFFFFF"],
    shirt_description_es: "Camiseta naranja con detalles blancos y verdes, conocida como \"Los Elefantes\".",
    shirt_description_en: "Orange shirt with white and green trim, known as \"The Elephants\".",
  },
  dz: {
    sport_name_es: "Fútbol", sport_name_en: "Football",
    team_es: "Selección Argelina", team_en: "Algeria National Team",
    shirt_colors_es: "Blanca y verde", shirt_colors_en: "White and green",
    shirt_hex: ["#FFFFFF", "#006233"],
    shirt_description_es: "Camiseta blanca con detalles verdes, conocida como \"Los Zorros del Desierto\".",
    shirt_description_en: "White shirt with green trim, known as \"The Desert Foxes\".",
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
  es: { country_id:"es", asset_type:"shirt", asset_path:"assets/sports/shirts/spain.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  fr: { country_id:"fr", asset_type:"shirt", asset_path:"assets/sports/shirts/france.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  de: { country_id:"de", asset_type:"shirt", asset_path:"assets/sports/shirts/germany.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  it: { country_id:"it", asset_type:"shirt", asset_path:"assets/sports/shirts/italy.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  gb: { country_id:"gb", asset_type:"shirt", asset_path:"assets/sports/shirts/england.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  pt: { country_id:"pt", asset_type:"shirt", asset_path:"assets/sports/shirts/portugal.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  nl: { country_id:"nl", asset_type:"shirt", asset_path:"assets/sports/shirts/netherlands.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  be: { country_id:"be", asset_type:"shirt", asset_path:"assets/sports/shirts/belgium.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  hr: { country_id:"hr", asset_type:"shirt", asset_path:"assets/sports/shirts/croatia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  pl: { country_id:"pl", asset_type:"shirt", asset_path:"assets/sports/shirts/poland.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  dk: { country_id:"dk", asset_type:"shirt", asset_path:"assets/sports/shirts/denmark.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  se: { country_id:"se", asset_type:"shirt", asset_path:"assets/sports/shirts/sweden.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  no: { country_id:"no", asset_type:"shirt", asset_path:"assets/sports/shirts/norway.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ch: { country_id:"ch", asset_type:"shirt", asset_path:"assets/sports/shirts/switzerland.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  tr: { country_id:"tr", asset_type:"shirt", asset_path:"assets/sports/shirts/turkey.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ua: { country_id:"ua", asset_type:"shirt", asset_path:"assets/sports/shirts/ukraine.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  rs: { country_id:"rs", asset_type:"shirt", asset_path:"assets/sports/shirts/serbia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  mx: { country_id:"mx", asset_type:"shirt", asset_path:"assets/sports/shirts/mexico.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  us: { country_id:"us", asset_type:"shirt", asset_path:"assets/sports/shirts/usa.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ca: { country_id:"ca", asset_type:"shirt", asset_path:"assets/sports/shirts/canada.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ma: { country_id:"ma", asset_type:"shirt", asset_path:"assets/sports/shirts/morocco.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  sn: { country_id:"sn", asset_type:"shirt", asset_path:"assets/sports/shirts/senegal.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  gh: { country_id:"gh", asset_type:"shirt", asset_path:"assets/sports/shirts/ghana.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  cm: { country_id:"cm", asset_type:"shirt", asset_path:"assets/sports/shirts/cameroon.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ng: { country_id:"ng", asset_type:"shirt", asset_path:"assets/sports/shirts/nigeria.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  au: { country_id:"au", asset_type:"shirt", asset_path:"assets/sports/shirts/australia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  kr: { country_id:"kr", asset_type:"shirt", asset_path:"assets/sports/shirts/south_korea.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  sa: { country_id:"sa", asset_type:"shirt", asset_path:"assets/sports/shirts/saudi_arabia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ir: { country_id:"ir", asset_type:"shirt", asset_path:"assets/sports/shirts/iran.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  qa: { country_id:"qa", asset_type:"shirt", asset_path:"assets/sports/shirts/qatar.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  tn: { country_id:"tn", asset_type:"shirt", asset_path:"assets/sports/shirts/tunisia.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  ci: { country_id:"ci", asset_type:"shirt", asset_path:"assets/sports/shirts/ivory_coast.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  eg: { country_id:"eg", asset_type:"shirt", asset_path:"assets/sports/shirts/egypt.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  jp: { country_id:"jp", asset_type:"shirt", asset_path:"assets/sports/shirts/japan.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
  dz: { country_id:"dz", asset_type:"shirt", asset_path:"assets/sports/shirts/algeria.webp", verified:true, visual_style:"generic_national_team", object_position:"center center" },
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
