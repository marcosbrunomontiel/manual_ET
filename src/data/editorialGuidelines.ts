export interface TypographicToken {
  role: string;
  tag: string;
  fontFamily: string;
  classification: string;
  weight: string;
  sizePt: string;
  sizePx: string;
  leading: string;
  tracking: string;
  color: string;
  textTransform?: string;
  usageNotes: string;
}

export interface SectionToken {
  id: string;
  name: string;
  colorHex: string;
  colorCmyk: string;
  accentBg: string;
  textTone: string;
  description: string;
  typicalColumns: string;
  leadArticleStyle: string;
  openerTeasers: string;
}

export const BRAND_IDENTITY = {
  newspaperName: "El Tribuno",
  region: "Salta, Argentina",
  founded: "1949",
  format: "Tabloide / Compacto Contemporáneo (280 × 400 mm / Proporción 1:1.42)",
  leadSlogan: "El diario de Salta",
  colors: {
    navyPrimary: "#002D62",
    redAccent: "#D9252A",
    cyanSalta: "#00A3E0",
    redDeportes: "#DC2626",
    magentaCultura: "#BE185D",
    policeBlue: "#0B2545",
    amberPanorama: "#D97706",
    neutralBlack: "#111827",
    neutralGrayRule: "#D1D5DB",
    paperWhite: "#F8F9FA",
    newsprintBg: "#F4F1EA",
  },
  coreTypography: {
    primary: {
      name: "Bitter",
      author: "Sol Matas (Omnibus-Type)",
      classification: "Slab Serif (Mecana / Egipcia contemporánea)",
      weights: ["Regular (400)", "Bold (700)", "Italic (400i)"],
      purpose: "Títulos principales, subtítulos de apertura y texto de corrido.",
      rationale: "Sus remates rectangulares robustos, gran ojo medio (x-height) y generosa apertura de contraformas garantizan alta legibilidad en impresión rotativa sobre papel de periódico y pantallas digitales de cualquier densidad de píxeles."
    },
    secondary: {
      name: "Fago No (Fago Sans)",
      author: "Ole Schäfer",
      classification: "Sans-Serif Grotesque / Humanist Neo-Grotesque",
      weights: ["Regular (400)", "Medium (500)", "Bold (700)", "Italic (400i)"],
      purpose: "Copetes (bajadas), sumarios analíticos, destacados, citas flotantes y firmas.",
      rationale: "Aporta un contrapunto dinámico y geométrico limpio frente a la robustez clasicista de Bitter, ordenando los niveles de lectura rápida con máxima nitidez tipográfica."
    },
    tertiary: {
      name: "Gothic / Grotesque Display Condensada",
      author: "Derivados Franklin / Trade Gothic / DIN",
      classification: "Sans-Serif Condensada Extra Bold / Heavy",
      weights: ["Condensed Bold", "Condensed Heavy"],
      purpose: "Antetítulos temáticos (kickers), cintillos de sección ('PARANÁ', 'AFA', 'COMPLOT') y cifras infográficas."
    }
  }
};

export const GRID_SYSTEM_DATA = {
  baseModular: "Retícula Maestra Unificada de SEIS (6) COLUMNAS (Master 6-Column Grid)",
  tabloidDimensions: {
    pageWidth: "280 mm (794 px a 72 dpi / 3307 px a 300 dpi)",
    pageHeight: "400 mm (1134 px a 72 dpi / 4724 px a 300 dpi)",
    liveAreaWidth: "254 mm (aprox. 720 px en viewport desktop)",
    liveAreaHeight: "374 mm",
  },
  columns: [
    {
      type: "Retícula Maestra de 6 Columnas (Eje Estructural Único)",
      colWidth: "38.0 mm (aprox. 108 px)",
      gutter: "4.8 mm a 5.0 mm (aprox. 14 px)",
      usage: "Esqueleto compositivo absoluto de El Tribuno. Gobierna todas las secciones del periódico (Portada, Salta, Policiales, Deportes, Panorama, Clasificados). Sobre esta matriz de 6 columnas se modula la totalidad de notas y publicidad.",
    },
    {
      type: "Modulación 4 + 2 Columnas (Jerarquía 2/3 + 1/3)",
      colWidth: "Bloque A: 167 mm (4 cols) | Bloque B: 81 mm (2 cols)",
      gutter: "5.0 mm (aprox. 14 px)",
      usage: "Fórmula predilecta de página interior (Pág. 3 Mercado/Turismo, Pág. 13 Policiales, Pág. 35 Sanción AFA). Noticia dominante ocupa 4 columnas a la izquierda y nota secundaria ocupa 2 columnas a la derecha.",
    },
    {
      type: "Modulación 3 + 3 Columnas (Bipartición Simétrica 1/2 + 1/2)",
      colWidth: "Dos bloques de 124 mm cada uno (3 cols + 3 cols)",
      gutter: "5.0 mm (aprox. 14 px)",
      usage: "Páginas compartidas con dos noticias de igual jerarquía (Pág. 15 'Fue a reconciliarse' vs 'Madre filicida', Pág. 36 'Teté Quiroz' vs 'El Tano Riggio', Pág. 5 'Cremación' vs 'Expo Ciudad').",
    },
    {
      type: "Modulación 6 Columnas Directas (Texto Corrido / Clasificados)",
      colWidth: "6 columnas puras de 38.0 mm",
      gutter: "4.0 mm a 5.0 mm",
      usage: "Uso dual: 1) Crónicas de alta densidad a plana completa (Pág. 12 Operativo 431 kg de cocaína, Pág. 6 Conferencia UNSa, Pág. 28 Senadores). 2) Páginas de Clasificados, Subastas y Edictos Judiciales (Págs. 18, 19, 20, 21).",
    }
  ],
  margins: {
    pageEven: {
      name: "Página Par (Izquierda / Verso)",
      exterior: "14 mm (Margen exterior izquierdo, zona de corte y agarre)",
      interior: "11 mm (Margen interior derecho, hacia el lomo / pliegue central)",
      top: "13 mm (Cabeza, reserva para cintillo continuo y folio par)",
      bottom: "13 mm (Pie de página)"
    },
    pageOdd: {
      name: "Página Impar (Derecha / Recto)",
      interior: "11 mm (Margen interior izquierdo, hacia el lomo / pliegue central)",
      exterior: "14 mm (Margen exterior derecho, borde de corte y hojeo)",
      top: "13 mm (Cabeza, reserva para sección y folio saliente impar)",
      bottom: "13 mm (Pie de página)"
    },
    lomoCompensation: "Compensación de lomo de 3 mm respecto al margen exterior (11 mm interior vs 14 mm exterior). Al plegarse el diario en rotativa, los dos márgenes interiores suman 22 mm en la canaleta, lo cual simula visualmente la misma respiración que los 14 mm exteriores."
  },
  whiteSpacePhilosophy: {
    rhythm: "La Ley del Texto a Seis (6) Columnas: Ancho Fijo Inmutable de 38 mm",
    principles: [
      "REGLA DE ORO DE EL TRIBUNO: Salvo los títulos (H1/H2), volantas/antetítulos y copetes/bajadas —que tienen libertad de cruzar horizontalmente múltiples módulos (colspan)—, TODOS LOS TEXTOS DE CORRIDO SE TRABAJAN ESTRICTAMENTE A SEIS (6) COLUMNAS.",
      "Ancho Unitario Universal: El cuerpo de texto (Bitter Regular 8.5–9.5 pt) NUNCA se ensancha a columnas anchas de 50 mm ni 60 mm. Cada columna de texto mide SIEMPRE 38.0 mm (1/6 de la plana).",
      "Distribución de Crónicas Completas: En notas de desarrollo a plana completa (como la Página 6 'Conferencia sobre el secreto profesional' o la Página 12 'Gendarmería'), el texto de corrido fluye a través de las SEIS (6) columnas consecutivas de corte a corte útil.",
      "Integración de Apoyos y Fotos en Base 6: En la Página 6, el titular cruza 4-5 columnas y la bajada 4 columnas; pero debajo, el texto llena las columnas 1, 2, 3 y 4 a 38 mm, el recuadro 'Los detalles del encuentro' mide exactamente 1 columna (38 mm), y las fotografías de Antonio Oieni y Gustavo Montoya ocupan exactamente 1 columna cada una (columnas 5 y 6), con texto corrido de 38 mm fluyendo bajo ellas.",
      "Separación vertical de titulares: mínimo 4 mm (12-16 pt) antes del titular principal.",
      "Intercolumnios ciegos: se prescinde de filetes verticales internos entre columnas de texto corrido (el blanco de 5 mm guía el ojo)."
    ]
  }
};

export const TYPOMETRY_TABLE: TypographicToken[] = [
  {
    role: "Gran Titular Portada (H1 Splash)",
    tag: "H1",
    fontFamily: "Bitter",
    classification: "Slab Serif",
    weight: "Bold (700/800)",
    sizePt: "48 – 58 pt",
    sizePx: "64 – 77 px",
    leading: "100% – 105%",
    tracking: "-0.03em",
    color: "#111827 (Negro) / #002D62 (Azul)",
    usageNotes: "Noticia principal de portada. Ocupa de 3 a 5 columnas."
  },
  {
    role: "Titular Principal de Página (H1 Interiores)",
    tag: "H1",
    fontFamily: "Bitter",
    classification: "Slab Serif",
    weight: "Bold (700)",
    sizePt: "28 – 36 pt",
    sizePx: "37 – 48 px",
    leading: "108% – 112%",
    tracking: "-0.02em",
    color: "#111827 (Carbón)",
    usageNotes: "Apertura de artículo de página par o impar. Entre 2 y 4 líneas, alineado a la izquierda."
  },
  {
    role: "Titular Secundario / Nota de Apoyo (H2)",
    tag: "H2",
    fontFamily: "Bitter",
    classification: "Slab Serif",
    weight: "Bold (700)",
    sizePt: "20 – 24 pt",
    sizePx: "26 – 32 px",
    leading: "115%",
    tracking: "-0.015em",
    color: "#111827",
    usageNotes: "Segunda noticia en jerarquía dentro de la misma plana."
  },
  {
    role: "Titulillo / Nota Breve / Recuadro (H3)",
    tag: "H3",
    fontFamily: "Bitter o Fago No",
    classification: "Slab Serif / Grotesque",
    weight: "Bold (700)",
    sizePt: "14 – 17 pt",
    sizePx: "18 – 22 px",
    leading: "120%",
    tracking: "0em",
    color: "#111827",
    usageNotes: "Despieces, análisis breves o sub-bloques ('Waze para el monitoreo', 'Matices en los números')."
  },
  {
    role: "Antetítulo / Epígrafe Temático (Kicker)",
    tag: "Span/Header",
    fontFamily: "Fago No o Gothic Condensed",
    classification: "Sans-Serif Condensada",
    weight: "Bold / Heavy (700)",
    sizePt: "9 – 11 pt",
    sizePx: "12 – 14 px",
    leading: "100%",
    tracking: "+0.05em",
    textTransform: "MAYÚSCULAS",
    color: "#4B5563 (Gris neutro) o Color de Sección",
    usageNotes: "Contextualiza geográficamente o temáticamente ('General Mosconi', 'Aguas Blancas', 'LA CRISIS MILLONARIA')."
  },
  {
    role: "Bajada / Copete de Noticia",
    tag: "P (Lead)",
    fontFamily: "Fago No",
    classification: "Sans-Serif Grotesque",
    weight: "Medium (500) o Regular (400)",
    sizePt: "11 – 13 pt",
    sizePx: "14 – 17 px",
    leading: "135% – 140%",
    tracking: "0em",
    color: "#1F2937",
    usageNotes: "Precedido invariablemente por viñeta esférica (bullet) en color identitario de la sección. Resume los puntos medulares."
  },
  {
    role: "Cuerpo de Texto Corrido (Body Text)",
    tag: "P (Body)",
    fontFamily: "Bitter",
    classification: "Slab Serif",
    weight: "Regular (400)",
    sizePt: "8.5 – 9.5 pt",
    sizePx: "11 – 12.5 px",
    leading: "125% – 130% (11 a 12.5 pt)",
    tracking: "+0.005em",
    color: "#1F2937",
    usageNotes: "Alineación justificada en columnas estrechas con silabeo riguroso (hyphenation). Sangría de 3 mm en primera línea sin espacio interparratal."
  },
  {
    role: "Letra Capitular (Drop Cap)",
    tag: "Span",
    fontFamily: "Bitter",
    classification: "Slab Serif",
    weight: "Extra Bold (800)",
    sizePt: "36 – 44 pt (3 a 4 líneas de caja)",
    sizePx: "48 – 60 px",
    leading: "80%",
    tracking: "0em",
    color: "#0F172A",
    usageNotes: "Apertura del primer párrafo en crónicas de fondo, editoriales y columnas de opinión (Págs. 8, 16, 17, 24)."
  },
  {
    role: "Citas Destacadas (Pull-quotes / Frases)",
    tag: "Blockquote",
    fontFamily: "Fago No o Bitter",
    classification: "Sans / Slab Serif",
    weight: "Bold Italic o Medium (600)",
    sizePt: "16 – 22 pt",
    sizePx: "21 – 29 px",
    leading: "120%",
    tracking: "-0.01em",
    color: "#002D62 (Azul) o Color de Sección",
    usageNotes: "Encerradas entre comillas tipográficas dobles latinas o inglesas. Acompañadas de nombre del autor en Fago Bold 11pt."
  },
  {
    role: "Epígrafes de Foto (Pies de foto)",
    tag: "Figcaption",
    fontFamily: "Fago No",
    classification: "Sans-Serif Grotesque",
    weight: "Regular (400) / Medium (500)",
    sizePt: "7.5 – 8.5 pt",
    sizePx: "10 – 11 px",
    leading: "125%",
    tracking: "0em",
    color: "#374151",
    usageNotes: "Ubicados inmediatamente al pie de la imagen, justificados al ancho del módulo. Crédito fotográfico al final (EFE, NA, Archivo) en mayúsculas pequeñas."
  },
  {
    role: "Firma de Periodista (Byline)",
    tag: "Span",
    fontFamily: "Fago No",
    classification: "Sans-Serif Grotesque",
    weight: "Bold (700) para el nombre / Regular (400) para el cargo",
    sizePt: "8.5 – 9.5 pt",
    sizePx: "11 – 12.5 px",
    leading: "120%",
    tracking: "0em",
    color: "#111827",
    usageNotes: "Ubicada entre la bajada y el inicio del texto corrido o al pie en columnas de opinión."
  },
  {
    role: "Cifras Infográficas (Big Numbers)",
    tag: "Data/Stat",
    fontFamily: "Fago No o Bitter",
    classification: "Sans Bold Display",
    weight: "Black (900)",
    sizePt: "42 – 64 pt",
    sizePx: "56 – 85 px",
    leading: "90%",
    tracking: "-0.04em",
    color: "#0F172A",
    usageNotes: "Para destacar porcentajes ('20 por ciento', '85 por ciento', '1.500 alumnos'). La palabra 'por ciento' se ubica debajo o al lado en caja baja sans 10pt."
  },
  {
    role: "Folios y Cintillos de Plana",
    tag: "Header/Folio",
    fontFamily: "Bitter (Diario) + Fago No (Sección/Fecha)",
    classification: "Híbrida",
    weight: "Bold (700) para folios y números",
    sizePt: "8.5 – 10 pt",
    sizePx: "11 – 13 px",
    leading: "100%",
    tracking: "+0.03em",
    color: "#111827 / Color de Sección",
    usageNotes: "Cornisa superior de 15 mm con filete horizontal de 0.75 pt que recorre todo el ancho útil de la plana."
  }
];

export const SECTIONS_DATA: SectionToken[] = [
  {
    id: "salta",
    name: "Salta (Información General / Local)",
    colorHex: "#00A3E0",
    colorCmyk: "C:85 M:20 Y:0 K:0",
    accentBg: "bg-cyan-500",
    textTone: "text-cyan-600",
    description: "Sección central provincial y municipal. Enfoque en obras públicas, política local, economía regional e historias de vida.",
    typicalColumns: "5 columnas modulares (artículos en bloques de 3 cols de texto + 2 de apoyo o 2 + 3).",
    leadArticleStyle: "Gran titular en Bitter Bold de 34pt, bajada con bullet cyan, foto horizontal a 3 o 4 columnas.",
    openerTeasers: "Cintillo superior con 3 módulos de alerta ('MOSCONI PÁG 11', 'UNSA PÁG 6', 'CONCEJO PÁG 5') con miniatura circular o cuadrada."
  },
  {
    id: "policial",
    name: "Policial / Judiciales",
    colorHex: "#0284C7",
    colorCmyk: "C:95 M:45 Y:5 K:0",
    accentBg: "bg-sky-600",
    textTone: "text-sky-700",
    description: "Cobertura de sucesos delictivos, operativos de Gendarmería, investigaciones judiciales y seguridad ciudadana.",
    typicalColumns: "5 columnas con cajas laterales de contexto normativo o declaraciones oficiales ('Bajo custodia estatal').",
    leadArticleStyle: "Titulares directos y de alto impacto emocional, fotografías documentales con tratamiento crudo y encuadres rectangulares cerrados.",
    openerTeasers: "Identificador 'Policial' en caja de sección o tipografía de 24pt con barra de fecha y crédito de editor."
  },
  {
    id: "opinion",
    name: "Opinión / Editorial",
    colorHex: "#1F2937",
    colorCmyk: "C:0 M:0 Y:0 K:90",
    accentBg: "bg-neutral-800",
    textTone: "text-neutral-800",
    description: "Tribuna de análisis político, social e histórico. Columnas de colaboradores, editorial institucional y buzón de lectores.",
    typicalColumns: "4 columnas de mayor ancho (59 mm) o 3 columnas amplias flanqueadas por módulos sociales de 1 columna.",
    leadArticleStyle: "Capitulares monumentales de 4 líneas (Bitter Extra Bold), grabados históricos o retratos vectoriales en blanco y negro.",
    openerTeasers: "Módulos de interacción social con logotipos de redes ('Facebook', 'Instagram') y citas textuales de ciudadanos."
  },
  {
    id: "artes-vida",
    name: "Artes & Vida (Cultura / Espectáculos)",
    colorHex: "#BE185D",
    colorCmyk: "C:10 M:95 Y:40 K:10",
    accentBg: "bg-pink-700",
    textTone: "text-pink-700",
    description: "Cartelera de espectáculos, crítica de cine, festivales folclóricos de Salta, teatro y horóscopo tradicional.",
    typicalColumns: "5 columnas maestras con cuadrículas modulares tipo cartelera (cines con horarios en 3 columnas) y horóscopo en franja lateral.",
    leadArticleStyle: "Titulares estilizados en Bitter Regular / Italic y Fago No, fotos artísticas de mayor superficie.",
    openerTeasers: "Barra superior de eventos recomendados: 3 pastillas temáticas ('OBRA PÁG 26', 'TEATRO PÁG 26', 'FOLCLORE PÁG 25')."
  },
  {
    id: "panorama",
    name: "Panorama / Nacional / Mundo",
    colorHex: "#D97706",
    colorCmyk: "C:15 M:45 Y:100 K:5",
    accentBg: "bg-amber-600",
    textTone: "text-amber-700",
    description: "Política nacional, economía macro (Indec, tipo de cambio, inflación, acuerdos de gobernadores) y cable internacional.",
    typicalColumns: "5 columnas con notas dobles: noticia principal con foto superior y noticia secundaria en la mitad inferior de la plana.",
    leadArticleStyle: "Titulares de análisis institucional, gráficos estadísticos y declaraciones entrecomilladas en cajas de color.",
    openerTeasers: "Cornisa compuesta 'Argentina/Panorama/' o '/Panorama/Mundo' con número de folio esquinado."
  },
  {
    id: "deportes",
    name: "Deportes",
    colorHex: "#DC2626",
    colorCmyk: "C:5 M:95 Y:95 K:0",
    accentBg: "bg-red-600",
    textTone: "text-red-600",
    description: "Fútbol nacional (River, Boca, Selección), fútbol liguista local (Gimnasia y Tiro, Central Norte, Juventud Antoniana), rugby y automovilismo.",
    typicalColumns: "Retícula muy agresiva y modular; fotos sangradas o dominantes de 4 columnas con textos dinámicos.",
    leadArticleStyle: "Títulos llamativos con metáforas directas ('Llegó la motosierra Gallardo'), antetítulos en negativo ('LA CRISIS MILLONARIA') y cifras de torneos.",
    openerTeasers: "Triada de anticipos en cabeza: 'PARANÁ PÁG 37', 'AFA PÁG 35', 'COMPLOT PÁG 34'."
  },
  {
    id: "clasificados",
    name: "Clasificados & Servicios / Fúnebres",
    colorHex: "#002D62",
    colorCmyk: "C:100 M:80 Y:20 K:15",
    accentBg: "bg-blue-900",
    textTone: "text-blue-900",
    description: "Inmuebles, automotores, empleos, remates judiciales, edictos de ley, obituarios (participaciones y misas) y datos del tiempo.",
    typicalColumns: "6 columnas estrechas (38 mm) con intercolumnios mínimos para compactación extrema.",
    leadArticleStyle: "Micro-módulos con código alfanumérico ('1.1 Casas Compras', '3.1 Automotores Ventas'), cajas con borde negro y destacados en amarillo.",
    openerTeasers: "Cabecera masiva 'Clasificados' con logotipo de El Tribuno en miniatura y números de teléfono/canal web."
  }
];

export const GRAPHIC_ELEMENTS_DATA = {
  rulesAndDividers: [
    {
      name: "Filete de Cornisa Superior (Header Rule)",
      thickness: "0.75 pt a 1 pt",
      color: "#111827 (Carbón) / Color de sección",
      behavior: "Recorre de margen a margen útil debajo del cintillo de fecha y sección."
    },
    {
      name: "Filete de Cierre de Artículo (Ending Rule)",
      thickness: "0.5 pt continuo",
      color: "#D1D5DB (Gris neutro)",
      behavior: "Separa verticalmente una noticia concluida del anuncio publicitario o nota inferior."
    },
    {
      name: "Corondel Vertical (Column Rule)",
      thickness: "0.3 pt a 0.5 pt",
      color: "#E5E7EB",
      behavior: "Uso selectivo en páginas densas de clasificación o cuando colindan dos artículos independientes en columnas adyacentes para evitar invasión de lectura."
    },
    {
      name: "Filete Superior de Destacado / Caja de Cita",
      thickness: "2.5 pt a 3 pt",
      color: "Color corporativo de la sección (Cyan, Rojo, Azul)",
      behavior: "Apertura superior de la caja de cita o declaración clave del entrevistado."
    }
  ],
  calloutBullets: {
    description: "Elemento icónico de El Tribuno en todas las bajadas y copetes.",
    shape: "Círculo relleno (bullet esférico) de 5 pt de diámetro.",
    color: "Coincidente con la sección (ej. Turquesa/Cyan en Salta, Rojo en Deportes, Azul en Policial).",
    positioning: "Alineado con la línea de base del primer carácter tipográfico del copete."
  },
  boxesAndBorders: {
    advertisementFrames: "Borde de 0.5 pt gris claro con indicación sutil 'ESPACIO DE PUBLICIDAD' cuando imita formato editorial.",
    notarialBoxes: "Borde negro de 1 pt sólido, cabecera en barra negra invertida con texto en blanco sans bold.",
    calloutCards: "Fondo gris neutro muy suave (3% negro `#F9FAFB`) con borde izquierdo acentuado de 3 pt en color de sección."
  },
  photographyTreatment: {
    geometry: "Rigurosamente ortogonal (rectángulos perfectos). Quedan prohibidos los marcos ornamentales, sombras paralelas difusas (drop shadows) o bordes redondeados en noticias duras.",
    bleed: "El sangrado total al corte se reserva para Portada, suplementos y cabeceras deportivas. En el 90% de las páginas interiores la foto se ciñe a la retícula de columnas.",
    aspectRatios: [
      { ratio: "3:2 Horizontal", use: "Fotoperiodismo panorámico, actos oficiales, coberturas de campo (4 o 5 columnas de ancho)." },
      { ratio: "4:5 / 2:3 Vertical", use: "Retratos individuales de protagonistas o funcionarios (1 o 2 columnas de ancho)." },
      { ratio: "1:1 Cuadrado", use: "Miniaturas de apertura en teasers superiores y fotos testimoniales de redes sociales." }
    ],
    captions: "Texto en Fago No Regular 8pt, leading 10pt. Crédito de fotógrafo o agencia informativa (EFE, NA, Archivo, Instagram) al cierre en mayúscula o itálica."
  }
};

export const EDITORIAL_FLOW_DATA = {
  jumpLines: {
    crossPagePolicy: "Autonomía de plana: El Tribuno aplica un modelo modular donde el 95% de los artículos comienzan y concluyen en la misma página.",
    continuationTags: "En casos de gran cobertura que ameritan apertura en portada, se emplea la fórmula de remisión: `[SECCIÓN]: [NÚMERO DE PÁGINA]` en Fago Bold 10pt (ej. `SALTA: 2`, `DEPORTES: 33`, `POLICIAL: 13`).",
    internalJump: "Si un texto salta a página par posterior, se utiliza `(Continúa en pág. XX)` en Bitter Italic 8pt al pie de la última columna."
  },
  foliationSystem: {
    evenPage: {
      location: "Esquina superior izquierda y derecha de la cornisa",
      structure: "[Número de Página] / [Nombre de Sección]                        El Tribuno | [Fecha Completa]",
      example: "2 / Salta                                                        El Tribuno | Viernes 28 de noviembre de 2025"
    },
    oddPage: {
      location: "Esquina superior izquierda y derecha de la cornisa",
      structure: "El Tribuno | [Fecha Completa]                        [Nombre de Sección]/ [Número de Página]",
      example: "El Tribuno | Viernes 28 de noviembre de 2025                        Salta/ 3"
    },
    visualHighlight: "El número de página en páginas impares suele componerse en tamaño 14-16pt bold para facilitar el hojeo digital y analógico con el pulgar derecho."
  }
};
