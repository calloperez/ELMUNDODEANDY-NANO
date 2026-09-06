// ============================================================
// ILUSTRACIONES — dibujos originales estilo caricatura de los
// monumentos/lugares destacados de cada país. Todo es arte propio
// en SVG (formas geométricas simples), no fotografías — así no hay
// ningún tema de derechos de autor y la app sigue pesando poco y
// funcionando 100% offline.
//
// Cobertura actual: los 13 países del Nivel 1. El resto de los 195
// países no tiene ilustración todavía (se sigue mostrando el emoji
// del monumento como hasta ahora) — se puede ampliar en tandas,
// igual que hicimos con los datos curiosos.
// ============================================================

const ILLUSTRATIONS = {

  // Francia — Torre Eiffel
  fr: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <path d="M120 20 L100 150 L112 150 L118 90 L122 90 L128 150 L140 150 Z" fill="#4A4A5A"/>
    <path d="M108 110 L132 110 L128 100 L112 100 Z" fill="#4A4A5A"/>
    <path d="M112 70 L128 70 L124 60 L116 60 Z" fill="#4A4A5A"/>
    <rect x="117" y="8" width="6" height="14" fill="#4A4A5A"/>
  </svg>`,

  // Estados Unidos — Estatua de la Libertad
  us: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="140" width="240" height="40" fill="#3B6FA0"/>
    <ellipse cx="120" cy="145" rx="34" ry="10" fill="#9AA0A6"/>
    <rect x="105" y="120" width="30" height="26" fill="#B7BCC2"/>
    <path d="M100 120 L108 60 L132 60 L140 120 Z" fill="#4AB3A8"/>
    <circle cx="120" cy="48" r="14" fill="#4AB3A8"/>
    <path d="M108 40 L120 20 L132 40 Z" fill="#3E9D93"/>
    <rect x="128" y="20" width="5" height="30" fill="#4AB3A8"/>
    <ellipse cx="130" cy="17" rx="7" ry="6" fill="#FFC94A"/>
  </svg>`,

  // Egipto — Pirámides de Guiza
  eg: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#F5DEA0"/>
    <circle cx="200" cy="35" r="18" fill="#FFC94A"/>
    <path d="M60 150 L110 60 L160 150 Z" fill="#D9B26A"/>
    <path d="M100 150 L150 80 L195 150 Z" fill="#C79F58"/>
    <path d="M85 150 L110 105 L135 150 Z" fill="#B98F4A"/>
    <rect y="150" width="240" height="30" fill="#E6C687"/>
  </svg>`,

  // China — Gran Muralla
  cn: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <path d="M0 120 Q60 90 120 115 T240 100 L240 180 L0 180 Z" fill="#8FCB8F"/>
    <path d="M0 118 Q60 88 120 113 T240 98" stroke="#C9A46A" stroke-width="14" fill="none"/>
    <rect x="55" y="98" width="18" height="18" fill="#B08A55"/>
    <path d="M52 98 L82 98 L67 84 Z" fill="#8B6A3F"/>
    <rect x="150" y="86" width="16" height="16" fill="#B08A55"/>
    <path d="M147 86 L175 86 L161 73 Z" fill="#8B6A3F"/>
  </svg>`,

  // India — Taj Mahal
  in: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <rect x="80" y="150" width="80" height="20" fill="#BFC9E8"/>
    <rect x="90" y="95" width="60" height="55" fill="#F4F1EA"/>
    <ellipse cx="120" cy="95" rx="34" ry="26" fill="#F4F1EA"/>
    <circle cx="120" cy="72" r="6" fill="#FFC94A"/>
    <rect x="60" y="60" width="8" height="90" fill="#F4F1EA"/>
    <rect x="172" y="60" width="8" height="90" fill="#F4F1EA"/>
    <rect x="45" y="55" width="8" height="95" fill="#F4F1EA"/>
    <rect x="187" y="55" width="8" height="95" fill="#F4F1EA"/>
    <circle cx="64" cy="55" r="6" fill="#F4F1EA"/>
    <circle cx="176" cy="55" r="6" fill="#F4F1EA"/>
    <circle cx="49" cy="50" r="6" fill="#F4F1EA"/>
    <circle cx="191" cy="50" r="6" fill="#F4F1EA"/>
    <path d="M108 150 Q120 120 132 150 Z" fill="#D8D2C4"/>
  </svg>`,

  // Italia — Coliseo Romano
  it: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#F7DFA0"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <path d="M30 150 Q30 70 120 70 Q210 70 210 150 Z" fill="#E4C288"/>
    <path d="M30 150 Q30 90 120 90 Q210 90 210 150 Z" fill="#D9B476"/>
    <g fill="#F7DFA0">
      <rect x="45" y="100" width="10" height="16"/><rect x="65" y="95" width="10" height="16"/>
      <rect x="85" y="92" width="10" height="16"/><rect x="105" y="90" width="10" height="16"/>
      <rect x="125" y="90" width="10" height="16"/><rect x="145" y="92" width="10" height="16"/>
      <rect x="165" y="95" width="10" height="16"/><rect x="185" y="100" width="10" height="16"/>
    </g>
    <g fill="#F7DFA0">
      <rect x="45" y="125" width="10" height="16"/><rect x="65" y="122" width="10" height="16"/>
      <rect x="85" y="120" width="10" height="16"/><rect x="105" y="119" width="10" height="16"/>
      <rect x="125" y="119" width="10" height="16"/><rect x="145" y="120" width="10" height="16"/>
      <rect x="165" y="122" width="10" height="16"/><rect x="185" y="125" width="10" height="16"/>
    </g>
  </svg>`,

  // Japón — Monte Fuji
  jp: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <circle cx="190" cy="35" r="20" fill="#FF7A5C"/>
    <path d="M40 150 L120 40 L200 150 Z" fill="#5B6B8C"/>
    <path d="M95 90 L120 40 L145 90 Q120 78 95 90 Z" fill="#FFFFFF"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <circle cx="60" cy="160" r="8" fill="#F7A8C4"/>
    <circle cx="75" cy="165" r="6" fill="#F7A8C4"/>
  </svg>`,

  // México — Pirámide del Sol (Teotihuacán)
  mx: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <rect x="70" y="130" width="100" height="20" fill="#C98A55"/>
    <rect x="80" y="110" width="80" height="20" fill="#B97D4C"/>
    <rect x="90" y="90" width="60" height="20" fill="#C98A55"/>
    <rect x="100" y="70" width="40" height="20" fill="#B97D4C"/>
    <polygon points="120,50 145,70 95,70" fill="#C98A55"/>
    <rect x="115" y="70" width="10" height="80" fill="#8B6A3F"/>
  </svg>`,

  // España — Alhambra
  es: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="150" width="240" height="30" fill="#8FCB8F"/>
    <rect x="40" y="90" width="160" height="60" fill="#D98A6C"/>
    <g fill="#D98A6C">
      <rect x="40" y="80" width="10" height="10"/><rect x="60" y="80" width="10" height="10"/>
      <rect x="80" y="80" width="10" height="10"/><rect x="100" y="80" width="10" height="10"/>
      <rect x="120" y="80" width="10" height="10"/><rect x="140" y="80" width="10" height="10"/>
      <rect x="160" y="80" width="10" height="10"/><rect x="180" y="80" width="10" height="10"/>
    </g>
    <rect x="60" y="55" width="26" height="75" fill="#C97A5C"/>
    <rect x="154" y="55" width="26" height="75" fill="#C97A5C"/>
    <path d="M110 150 Q120 120 130 150 Z" fill="#F4E4D4"/>
  </svg>`,

  // Argentina — Glaciar Perito Moreno
  ar: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <polygon points="0,110 40,60 80,100 130,50 180,95 240,70 240,150 0,150" fill="#8A93A8"/>
    <polygon points="20,150 45,95 70,120 100,80 130,120 160,90 190,130 220,100 240,150" fill="#EAF6FB"/>
    <polygon points="35,150 55,110 75,150" fill="#CDEBF7"/>
    <polygon points="95,150 115,105 140,150" fill="#CDEBF7"/>
    <rect y="150" width="240" height="30" fill="#3B6FA0"/>
  </svg>`,

  // Brasil — Selva amazónica
  br: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <circle cx="190" cy="40" r="18" fill="#FFC94A"/>
    <ellipse cx="60" cy="90" rx="55" ry="30" fill="#4E9E5A"/>
    <ellipse cx="130" cy="80" rx="60" ry="32" fill="#3E8B4C"/>
    <ellipse cx="195" cy="95" rx="45" ry="26" fill="#4E9E5A"/>
    <path d="M0 130 Q60 110 120 130 T240 125 L240 180 L0 180 Z" fill="#2F7A44"/>
    <path d="M60 180 Q90 130 130 180 Z" fill="#3B6FA0" opacity="0.7"/>
  </svg>`,

  // Sudáfrica — Sabana / Parque Kruger
  za: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#FBC98A"/>
    <circle cx="70" cy="45" r="26" fill="#FF9A4A"/>
    <rect y="140" width="240" height="40" fill="#D9A85C"/>
    <rect x="150" y="90" width="8" height="50" fill="#6B4A2F"/>
    <ellipse cx="154" cy="80" rx="38" ry="14" fill="#3E6B3A"/>
    <path d="M40 140 L55 100 L70 140 Z" fill="#8A6A4A"/>
    <path d="M60 140 L70 115 L80 140 Z" fill="#7A5A3F"/>
  </svg>`,

  // Australia — Ópera de Sídney
  au: `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="180" fill="#BEE3F5"/>
    <rect y="140" width="240" height="40" fill="#3B6FA0"/>
    <path d="M60 140 Q75 90 95 140 Z" fill="#F4F1EA"/>
    <path d="M90 140 Q108 80 128 140 Z" fill="#FFFFFF"/>
    <path d="M120 140 Q140 85 160 140 Z" fill="#F4F1EA"/>
    <path d="M150 140 Q165 95 182 140 Z" fill="#FFFFFF"/>
    <path d="M20 145 Q120 115 220 145" stroke="#4A4A5A" stroke-width="4" fill="none"/>
  </svg>`,

};
