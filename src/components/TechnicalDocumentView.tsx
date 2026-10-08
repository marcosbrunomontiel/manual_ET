import React, { useState, useEffect } from 'react';
import { Copy, Check, Printer, FileDown, BookOpen, Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

interface TechDocProps {
  onCopyAll?: () => void;
  registerPdfExport?: (exportFn: () => void) => void;
}

export const TechnicalDocumentView: React.FC<TechDocProps> = ({ registerPdfExport }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [pdfProgress, setPdfProgress] = useState<string>('');

  const generateVectorPdfFallback = () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const margin = 15;
      const maxWidth = 180;
      let y = 20;

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(16);
      pdf.setTextColor(0, 45, 98); // #002D62
      pdf.text('EL TRIBUNO • MANUAL DE ESTILO Y DIAGRAMACIÓN', margin, y);
      y += 8;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(80, 80, 80);
      pdf.text('Ingeniería Inversa y Sistema Modular de Seis (6) Columnas', margin, y);
      y += 5;
      pdf.setDrawColor(0, 45, 98);
      pdf.setLineWidth(0.5);
      pdf.line(margin, y, margin + maxWidth, y);
      y += 8;

      const lines = markdownContent.split('\n');
      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) {
          y += 3;
          continue;
        }

        if (y > 275) {
          pdf.addPage();
          y = 20;
        }

        if (line.startsWith('# ')) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(14);
          pdf.setTextColor(0, 45, 98);
          const splitText = pdf.splitTextToSize(line.replace('# ', ''), maxWidth);
          pdf.text(splitText, margin, y);
          y += splitText.length * 6 + 2;
        } else if (line.startsWith('## ')) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(12);
          pdf.setTextColor(0, 45, 98);
          const splitText = pdf.splitTextToSize(line.replace('## ', ''), maxWidth);
          pdf.text(splitText, margin, y);
          y += splitText.length * 5 + 2;
        } else if (line.startsWith('### ')) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(10.5);
          pdf.setTextColor(0, 163, 224); // #00A3E0
          const splitText = pdf.splitTextToSize(line.replace('### ', ''), maxWidth);
          pdf.text(splitText, margin, y);
          y += splitText.length * 4.5 + 2;
        } else if (line.startsWith('* ') || line.startsWith('- ')) {
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(8.5);
          pdf.setTextColor(30, 30, 30);
          const cleanText = '• ' + line.substring(2).replace(/\*\*/g, '');
          const splitText = pdf.splitTextToSize(cleanText, maxWidth);
          pdf.text(splitText, margin, y);
          y += splitText.length * 4;
        } else if (line.startsWith('---')) {
          pdf.setDrawColor(210, 210, 210);
          pdf.setLineWidth(0.3);
          pdf.line(margin, y, margin + maxWidth, y);
          y += 5;
        } else if (!line.startsWith('|')) {
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(8.5);
          pdf.setTextColor(40, 40, 40);
          const cleanText = line.replace(/\*\*/g, '');
          const splitText = pdf.splitTextToSize(cleanText, maxWidth);
          pdf.text(splitText, margin, y);
          y += splitText.length * 3.8;
        }
      }

      pdf.save('Manual_Estilo_Diagramacion_El_Tribuno.pdf');
    } catch (err) {
      console.error('Fallback vector PDF error:', err);
      window.print();
    }
  };

  const exportToPdf = async () => {
    try {
      setIsExportingPdf(true);
      setPdfProgress('Renderizando documento...');

      const element = document.getElementById('tech-document-content');
      if (!element) {
        throw new Error('Elemento del documento no encontrado');
      }

      // html-to-image supports modern CSS oklch natively via the browser engine
      const imgData = await toPng(element, {
        quality: 0.95,
        backgroundColor: '#FFFFFF',
        pixelRatio: 1.5,
        cacheBust: true,
      });

      setPdfProgress('Compaginando hojas A4...');
      const img = new Image();
      img.src = imgData;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error('Error al cargar imagen procesada'));
      });

      // Create A4 PDF document in portrait
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; // 10mm margin
      const contentWidth = pdfWidth - margin * 2; // 190mm
      const contentHeight = (img.height * contentWidth) / img.width;
      const usablePageHeight = pdfHeight - margin * 2; // 277mm

      let heightLeft = contentHeight;
      let position = margin;
      let pageNum = 1;

      // First page
      pdf.addImage(imgData, 'PNG', margin, position, contentWidth, contentHeight, undefined, 'FAST');
      heightLeft -= usablePageHeight;

      // Loop for multi-page content
      while (heightLeft > 0) {
        position -= usablePageHeight;
        pdf.addPage();
        pageNum++;
        pdf.addImage(imgData, 'PNG', margin, position, contentWidth, contentHeight, undefined, 'FAST');
        heightLeft -= usablePageHeight;
      }

      setPdfProgress('Descargando archivo PDF...');
      pdf.save('Manual_Estilo_Diagramacion_El_Tribuno.pdf');
    } catch (error) {
      console.warn('Canvas export issue, switching to high-fidelity vector PDF:', error);
      setPdfProgress('Generando versión PDF alternativa...');
      generateVectorPdfFallback();
    } finally {
      setIsExportingPdf(false);
      setPdfProgress('');
    }
  };

  useEffect(() => {
    if (registerPdfExport) {
      registerPdfExport(exportToPdf);
    }
  }, [registerPdfExport]);

  const markdownContent = `# MANUAL TÉCNICO DE ESTILO Y DIAGRAMACIÓN EDITORIAL
## INGENIERÍA INVERSA DE DISEÑO UX/UI & SISTEMA EDITORIAL
### Publicación: Diario "El Tribuno" (Salta, Argentina)
**Elaborado por:** Dirección de Arte Editorial & Especialista en Diseño UX/UI  
**Destinatarios:** Equipo de Maquetación Front-End, Dirección de Arte y Maquetación Editorial (InDesign / CSS Grid)  
**Fecha de Emisión:** Edición Noviembre 2025 / Actualización Técnica  

---

### 1. ESTRUCTURA BASE Y RETÍCULA (GRID SYSTEM)

#### 1.1 Formato de Página y Dimensiones Físicas
* **Formato General:** Tabloide / Compacto Contemporáneo europeo-latinoamericano.
* **Medida de Plana Recortada:** 280 mm de ancho × 400 mm de alto (Proporción aproximada 1:1.42).
* **Caja Útil (Live Area / Mancha Tipográfica):** 254 mm de ancho × 374 mm de alto.
* **Resolución Base para Entornos Digitales:**
  * Base reticular responsiva de 12 unidades (subdivisible en 2, 3, 4, 5 y 6 columnas).
  * Breakpoints clave: Mobile (360-480px, 1-2 cols), Tablet (768-1024px, 3-4 cols), Desktop/Plana completa (1280px+, 5-6 cols).

#### 1.2 Sistema de Columnas Predominante: Retícula Maestra de SEIS (6) Columnas
* **Retícula Base Unificada de 6 Columnas (Universal Master Grid):**
  * **Ancho de Columna Base:** **38.0 mm** (aprox. 108 px en mancha útil de 254 mm).
  * **Medianil / Intercolumnio (Gutter):** **4.8 a 5.0 mm** (aprox. 14 px).
  * **Eje Matemático:** Toda la arquitectura visual de *El Tribuno* está calculada sobre un múltiplo de 6 columnas. Esta base de 6 unidades otorga una versatilidad armónica absoluta, permitiendo composiciones en:
    * **6 Columnas directas (1/1 de plana):** Texto de corrido a plana completa en noticias de investigación o impacto (Pág. 12 Operativo de droga 431 kg; Pág. 6 Conferencia sobre Secreto Profesional; Pág. 28 Jura de senadores) y en páginas de Clasificados/Edictos (Págs. 18 a 21).
    * **Modulación 4 + 2 Columnas (Razón 2/3 + 1/3):** La estructura insignia del periódico. La noticia dominante ocupa 4 columnas (167 mm) a la izquierda y el artículo secundario, sidebar de citas o big number ocupa 2 columnas (81 mm) a la derecha (Pág. 3 Obras Mercado San Miguel vs Turismo; Pág. 13 Muerte en comisaría vs recuadro policial; Pág. 35 Sanción de la AFA vs apoyo de clubes).
    * **Modulación 3 + 3 Columnas (Bipartición Simétrica 1/2 + 1/2):** Divide la plana en dos mitades gemelas de 124 mm para confrontar dos crónicas o notas de idéntico peso informativo (Pág. 15 "Fue a reconciliarse con su novio" vs "Madre filicida"; Pág. 36 "Teté Quiroz DT" vs "El Tano Riggio"; Pág. 5 "Cremación gratuita" vs "Expo Ciudad").
    * **Modulación 2 + 2 + 2 Columnas (Tercios):** Empleada en carteleras de cines, horarios y horóscopos (Pág. 26).

#### 1.3 Análisis de Márgenes: Páginas Pares (Izquierdas / Verso) vs. Impares (Derechas / Recto)
* **Página Par (Izquierda / Verso):**
  * **Margen Exterior (Izquierdo / Borde de corte):** 14.0 mm. Diseñado para permitir el agarre ergonómico con los dedos del lector sin invadir el bloque de texto.
  * **Margen Interior (Derecho / Hacia el Lomo o Pliegue):** 11.0 mm.
  * **Margen Superior (Cabeza):** 13.0 mm (alberga el cintillo continuo de folio par).
  * **Margen Inferior (Pie):** 13.0 mm.
* **Página Impar (Derecha / Recto):**
  * **Margen Interior (Izquierdo / Hacia el Lomo o Pliegue):** 11.0 mm.
  * **Margen Exterior (Derecho / Borde de corte):** 14.0 mm.
  * **Margen Superior (Cabeza):** 13.0 mm (alberga el folio impar con número saliente).
  * **Margen Inferior (Pie):** 13.0 mm.
* **Regla de Compensación de Lomo (Spine Compensation):**
  * Se aplica una reducción de 3.0 mm en los márgenes interiores (11 mm vs 14 mm exteriores). Al doblarse y coserse/engraparse el pliego en la rotativa, la curvatura natural del papel absorbe 3 mm, haciendo que al abrir el diario, la suma visual de ambos lomos (11 + 11 = 22 mm) aparente una separación equilibrada y limpia, idéntica a los blancos perimetrales.

#### 1.4 Espacios en Blanco (Breathing Room) y Flujo Visual
* **Densidad Periodística Controlada:** El ritmo no busca el minimalismo corporativo sino la densidad ordenada del periodismo impreso de referencia.
* **Blancos de Separación Vertical:** Separación mínima obligatoria de 4 mm (12 a 16 pt) antes de cada titular principal para otorgarle máxima fuerza gravitatoria.
* **Ausencia de Filetes Ciegos:** No se satura con corondeles verticales entre columnas de una misma nota. El blanco del medianil (5 mm) guía de forma natural el descenso visual en "Z".

---

### 2. JERARQUÍA TIPOGRÁFICA (TIPOMETRÍA)

#### 2.1 Familias Tipográficas Fundacionales
* **Familia Primaria (Titulares y Texto Corrido): BITTER**
  * **Diseñadora:** Sol Matas (Omnibus-Type).
  * **Clasificación:** *Slab Serif* (Egipcia / Mecana contemporánea).
  * **Pesos Utilizados:** Bitter Bold (700/800), Bitter Regular (400), Bitter Italic (400i).
  * **Justificación de Uso:** Serifas rectangulares de base gruesa y amplio ojo medio (x-height). Diseñada específicamente para resistir las micro-deformaciones de la tinta sobre papel prensa y garantizar lectura sin fatiga.
* **Familia Secundaria (Bajadas, Copetes y Destacados): FAGO NO (Fago Sans)**
  * **Diseñador:** Ole Schäfer.
  * **Clasificación:** *Sans-Serif Grotesque / Humanist Neo-Grotesque*.
  * **Pesos Utilizados:** Fago No Bold (700), Fago No Medium (500), Fago No Regular (400), Fago No Italic (400i).
  * **Justificación de Uso:** Geometría moderna, neutra y extremadamente legible en tamaños medios y pequeños. Establece un diálogo armónico con los remates de Bitter.
* **Familia Terciaria (Cintillos Temáticos y Números Grandes): GOTHIC CONDENSED DISPLAY**
  * **Clasificación:** Sans condensada pesada (Heavy / Black) para antetítulos mayúsculos y cifras estadísticas.

#### 2.2 Especificación Métrica por Componente Editorial

| Componente | Familia | Peso | Cuerpo (Pt) | Interlineado (Leading) | Tracking | Alineación | Color / Acento |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Gran Titular Portada (H1 Splash)** | Bitter | Bold / Black | 48 – 58 pt | 100% – 105% | -0.03em | Izquierda | #111827 / #002D62 |
| **Titular Principal Interiores (H1)** | Bitter | Bold (700) | 28 – 36 pt | 108% – 112% | -0.02em | Izquierda | #111827 (Carbón) |
| **Titular Secundario (H2)** | Bitter | Bold (700) | 20 – 24 pt | 115% | -0.015em | Izquierda | #111827 |
| **Intertítulo / Sub-bloque (H3)** | Bitter / Fago | Bold (700) | 13 – 16 pt | 120% | 0.00em | Izquierda | #111827 |
| **Antetítulo / Kicker** | Fago No / Gothic | Bold / Heavy | 9 – 11 pt | 100% | +0.05em | Izquierda (Mayúsculas) | #4B5563 o Color Sección |
| **Bajada / Copete (Lead)** | Fago No | Medium (500) | 11 – 13 pt | 135% – 140% | 0.00em | Izquierda | #1F2937 (+ Bullet Color 5pt) |
| **Cuerpo de Texto (Body)** | Bitter | Regular (400) | 8.5 – 9.5 pt | 125% – 130% | +0.005em | Justificado estricto | #1F2937 (Sangría 3mm) |
| **Letra Capitular (Drop Cap)** | Bitter | Extra Bold (800) | 36 – 44 pt | 80% (3-4 líneas) | 0.00em | Izquierda embutida | #0F172A |
| **Citas / Frases Destacadas** | Fago No / Bitter | Bold Italic (600) | 16 – 22 pt | 120% | -0.01em | Izquierda o Centrada | Color de Sección (#00A3E0 / #DC2626) |
| **Epígrafes de Foto (Captions)** | Fago No | Regular (400) | 7.5 – 8.5 pt | 120% | 0.00em | Justificado al ancho foto | #374151 + Crédito en Mayúsculas |
| **Cifras Infográficas (Big Numbers)** | Fago No / Bitter | Black (900) | 48 – 64 pt | 90% | -0.04em | Centrada | #002D62 / Color Sección |
| **Folios y Cornisas** | Bitter / Fago | Bold (700) | 9 – 11 pt | 100% | +0.03em | Esquinas extremas | #111827 / Color Sección |

---

### 3. ARQUITECTURA POR SECCIONES

#### 3.1 Identidad Cromática Normativa por Sección
* **Salta (Información Provincial y Local):**
  * **Tono:** Cyan / Celeste Institucional.
  * **Valores:** HEX: \`#00A3E0\` | CMYK: C:85 M:20 Y:0 K:0.
* **Policial / Judiciales:**
  * **Tono:** Azul Cobalto / Marino Profundo.
  * **Valores:** HEX: \`#0284C7\` / \`#0B2545\` | CMYK: C:95 M:45 Y:5 K:0.
* **Deportes:**
  * **Tono:** Rojo Pasión / Escarlata.
  * **Valores:** HEX: \`#DC2626\` | CMYK: C:5 M:95 Y:95 K:0.
* **Artes & Vida (Cultura y Espectáculos):**
  * **Tono:** Magenta / Fucsia Editorial.
  * **Valores:** HEX: \`#BE185D\` | CMYK: C:10 M:95 Y:40 K:10.
* **Panorama / Economía / Nacional:**
  * **Tono:** Ámbar / Dorado Periodístico.
  * **Valores:** HEX: \`#D97706\` | CMYK: C:15 M:45 Y:100 K:5.
* **Opinión:**
  * **Tono:** Carbón Neutro / Negro Monocromo.
  * **Valores:** HEX: \`#1F2937\` | CMYK: C:0 M:0 Y:0 K:90.
* **Clasificados & Servicios:**
  * **Tono:** Azul Marino Institucional con acentos de servicio.
  * **Valores:** HEX: \`#002D62\` | CMYK: C:100 M:80 Y:20 K:15.

#### 3.2 Páginas de Apertura de Sección vs. Páginas Interiores de Desarrollo
* **Página de Apertura (Section Opener):**
  1. **Tríada de Teasers de Cabecera:** Faja superior horizontal dividida en 3 módulos contiguos que adelantan contenidos clave del interior de la sección con antetítulo en Bitter Bold mayúscula y número de página destacado (ej. *MOSCONI PÁG. 11*, *UNSA PÁG. 6*, *CONCEJO PÁG. 5*).
  2. **Gran Bloque de Sección:** Barra de fondo sólido en color de sección (ej. Cyan en Salta, Rojo en Deportes) con el nombre de la sección en Bitter Bold de 32 a 36 pt en blanco o calado.
  3. **Ficha de Responsable Editorial:** Línea inferior que acredita formalmente al editor a cargo: *"Edición de hoy a cargo de Nelson Colque - redaccion@eltribuno.com"*.
  4. **Noticia Reina:** Ocupa el 70% restante de la plana con titular principal, bajada doble y fotografía a 3 o 4 columnas.
* **Página Interior de Desarrollo:**
  1. Prescinde de la cabecera pesada y de los teasers superiores.
  2. Sustituye la cabecera por un **cintillo fino continuo de 0.75 pt**.
  3. El nombre de la sección y el número de página se integran en la esquina extrema superior en notación esquinada (*Salta/ 3*, *Policial/ 13*).
  4. Diagramación modular multi-noticia: coexisten hasta 3 noticias estructuradas jerárquicamente por tamaño y recuadros de apoyo.

---

### 4. ELEMENTOS GRÁFICOS Y MISCELÁNEAS

#### 4.1 Uso de Líneas y Filetes
* **Filete de Cornisa Superior:** Grosor continuo de 0.75 pt a 1.0 pt, de corte a corte útil.
* **Filetes Separadores de Noticia (Cierres):** 0.5 pt en color gris neutro (#D1D5DB). Se colocan al pie de cada artículo para delimitarlo del espacio inferior.
* **Corondeles Verticales:** 0.3 pt a 0.5 pt, limitados exclusivamente a Clasificados y tablas de datos. En noticias generales se privilegia el espacio en blanco del medianil.
* **Filete Superior de Destacado / Declaración:** 2.5 pt a 3.0 pt en el color corporativo de la sección.

#### 4.2 Viñetas Distintivas (Bullets)
* **Viñeta Esférica:** Un círculo relleno (bullet) de 5 pt de diámetro al arranque de cada oración del copete o bajada. El color coincide invariablemente con el color corporativo de la sección.

#### 4.3 Letras Capitulares (Drop Caps)
* Empleadas en crónicas y artículos de opinión (Págs. 8, 16, 17, 24).
* Altura exacta: 3 o 4 líneas de caja de texto.
* Tipografía: Bitter Extra Bold 800 en color negro carbón (#0F172A).

#### 4.4 Tratamiento de Imágenes y Fotografía
* **Ortogonalidad Estricta:** Todas las fotografías se enmarcan en cajas rectangulares nítidas a 90°. Quedan prohibidos los marcos ornamentales, esquinas redondeadas o sombras proyectadas (drop shadows) en el material periodístico.
* **Sangrado Selectivo:** Las fotos **no sangran** en páginas interiores; respetan estrictamente la retícula de columnas. El sangrado total al corte se reserva para Portada y cabeceras especiales de suplementos.
* **Relaciones de Aspecto Predominantes:**
  * **3:2 Horizontal:** Tomas informativas panorámicas, obras, actos públicos (ancho de 3 a 5 columnas).
  * **4:5 / 2:3 Vertical:** Retratos de funcionarios, deportistas o entrevistados (1 o 2 columnas de ancho).
  * **1:1 Cuadrado:** Miniaturas de cabecera y fotos testimoniales de redes sociales.
* **Epígrafes (Pies de foto):** Fago No Regular 8 pt, justificado rigurosamente al mismo ancho de la fotografía. Crédito de fotógrafo o agencia (*EFE, NA, Archivo*) en mayúsculas al final del texto.

---

### 5. COMPORTAMIENTO DEL FLUJO EDITORIAL Y FOLIACIÓN

#### 5.1 Continuidad Gráfica y Política de Plana Autoconclusiva
* **Cero Saltos Largos (Zero-Jump Policy):** El Tribuno evita fragmentar artículos enviando la continuación a páginas lejanas. Cada página funciona como un bloque cerrado y autosuficiente.
* **Despieces Satélite (Sidebars):** La información complementaria se empaqueta en recuadros secundarios en la misma página (*"Waze para el monitoreo"*, *"Salud mental"*, *"Controles a motociclistas"*).
* **Remisiones de Portada:** En la primera plana, cada noticia breve se remite con la fórmula: \`[SECCIÓN]: [PÁGINA]\` en Fago No Bold 10 pt (ej. *SALTA: 2*, *DEPORTES: 33*, *POLICIAL: 12*).

#### 5.2 Sistema de Foliación: Páginas Pares vs. Impares
* **Página Par (Izquierda / Verso):**
  * **Extremo Superior Izquierdo:** \`[Número de Página] / [Nombre de Sección]\` (ej. \`2 / Salta\`, \`8 / Salta\`, \`16 / Opinión\`).
  * **Extremo Superior Derecho:** \`El Tribuno\` seguido de la fecha completa \`Viernes 28 de noviembre de 2025\`.
* **Página Impar (Derecha / Recto):**
  * **Extremo Superior Izquierdo:** \`El Tribuno\` seguido de la fecha completa \`Viernes 28 de noviembre de 2025\`.
  * **Extremo Superior Derecho:** \`[Nombre de Sección]/ [Número de Página]\` (ej. \`Salta/ 3\`, \`Policial/ 13\`, \`Deportes/ 33\`).
* **Criterio UX de Hojeo Háptico:** En las páginas impares, el número de página se sitúa en el extremo exterior derecho y con mayor peso tipográfico (14 a 16 pt) porque el usuario hojea la publicación sosteniendo la base y abriendo las hojas con el pulgar derecho.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manual_Estilo_Diagramacion_El_Tribuno.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadWordDoc = () => {
    const content = document.getElementById('tech-document-content')?.innerHTML || '';
    const html = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>Manual de Estilo y Diagramación - El Tribuno</title>
  <style>
    body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #111827; }
    h1 { font-size: 24pt; color: #002D62; border-bottom: 2pt solid #002D62; padding-bottom: 8px; margin-top: 24px; }
    h2 { font-size: 18pt; color: #002D62; margin-top: 20px; }
    h3 { font-size: 14pt; color: #0284C7; margin-top: 16px; }
    h4 { font-size: 12pt; color: #111827; font-weight: bold; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 9.5pt; }
    th, td { border: 1pt solid #D1D5DB; padding: 6px 10px; text-align: left; }
    th { background-color: #F3F4F6; font-weight: bold; }
    ul { margin: 8px 0; padding-left: 20px; }
    li { margin-bottom: 6px; }
    code { font-family: 'Consolas', monospace; font-size: 9.5pt; background: #F3F4F6; padding: 2px 4px; }
    .badge { background-color: #E0F2FE; color: #0369A1; font-weight: bold; padding: 2px 6px; border-radius: 3px; }
  </style>
</head>
<body>
  ${content}
</body>
</html>`;
    const blob = new Blob(['\ufeff', html], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manual_Estilo_Diagramacion_El_Tribuno.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-10 space-y-8">
      {/* Barra de Acciones Superior */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200 no-print">
        <div>
          <span className="text-[11px] font-fago font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
            Documento Técnico Formal • Descarga & Exportación
          </span>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 mt-2">
            Manual de Estilo y Diagramación (Guidelines)
          </h2>
          <p className="text-xs font-fago text-neutral-600 mt-1">
            Descarga el manual completo en formato editable Word (.doc), Markdown (.md) o guárdalo directamente como PDF.
          </p>
        </div>

        {/* Botones de Descarga */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={exportToPdf}
            disabled={isExportingPdf}
            className="px-4 py-2.5 bg-[#002D62] text-white rounded-xl text-xs font-fago font-bold hover:bg-[#001E44] transition-all flex items-center gap-2 shadow-xs cursor-pointer disabled:opacity-60 ring-2 ring-[#002D62]/20 active:scale-[0.98]"
            title="Generar y descargar documento PDF formateado directamente con jsPDF"
          >
            {isExportingPdf ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
                <span>{pdfProgress || 'Generando PDF...'}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-cyan-300" />
                <span>Exportar PDF (jsPDF)</span>
              </>
            )}
          </button>

          <button
            onClick={downloadWordDoc}
            className="px-3.5 py-2.5 bg-blue-700 text-white rounded-xl text-xs font-fago font-bold hover:bg-blue-800 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            title="Descargar como archivo Word compatible"
          >
            <FileDown className="w-4 h-4" />
            <span>Descargar Word (.doc)</span>
          </button>

          <button
            onClick={downloadMarkdown}
            className="px-3.5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-fago font-bold hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
            title="Descargar como archivo Markdown estándar"
          >
            <FileDown className="w-4 h-4" />
            <span>Descargar Markdown (.md)</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-2.5 bg-neutral-100 text-neutral-800 rounded-xl text-xs font-fago font-bold hover:bg-neutral-200 transition-all flex items-center gap-1.5 border border-neutral-300 cursor-pointer"
            title="Abrir diálogo nativo de impresión / Guardar como PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-3 py-2.5 bg-neutral-100 text-neutral-800 rounded-xl text-xs font-fago font-bold hover:bg-neutral-200 transition-all flex items-center gap-1.5 border border-neutral-300 cursor-pointer"
            title="Copiar texto en portapapeles"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Cuerpo del Documento Técnico Renderizado */}
      <div id="tech-document-content" className="prose prose-neutral max-w-none text-neutral-800 text-sm font-fago leading-relaxed space-y-6">
        
        {/* Cabecera Formal del Documento */}
        <div className="bg-[#FAF8F5] p-6 rounded-xl border border-neutral-300">
          <div className="flex items-center justify-between border-b border-neutral-300 pb-3 mb-4">
            <span className="font-bitter font-black text-xl text-[#002D62]">El Tribuno • Guía de Ingeniería Inversa</span>
            <span className="text-xs font-mono-code text-neutral-500">Versión 2025.1</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-fago">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">Publicación</span>
              <strong className="text-neutral-900">Diario El Tribuno</strong>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">Plataforma</span>
              <strong className="text-neutral-900">Editorial & Front-End UI</strong>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">Formato Base</span>
              <strong className="text-neutral-900">Tabloide (280 × 400 mm)</strong>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-bold">Familias Clave</span>
              <strong className="text-neutral-900">Bitter + Fago No</strong>
            </div>
          </div>
        </div>

        {/* 1. Estructura Base y Retícula */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h3 className="text-xl font-bitter font-extrabold text-neutral-900 flex items-center gap-2">
            <span className="text-cyan-600">1.</span> Estructura Base y Retícula (Grid System)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs leading-relaxed text-neutral-700">
            <li>
              <strong>Sistema de Columnas Predominante:</strong> Retícula Maestra Unificada de <strong>SEIS (6) COLUMNAS</strong> (38.0 mm por columna + 4.8 a 5.0 mm de medianil sobre caja útil de 254 mm). Es la matriz matemática sobre la que se articula toda la publicación. Permite modulaciones asimétricas de <strong>4 + 2 columnas</strong> (artículo dominante de 167 mm + apoyo de 81 mm, visto en Pág. 3, 13, 35), biparticiones simétricas de <strong>3 + 3 columnas</strong> (Págs. 5, 15, 36) y <strong>6 columnas directas</strong> de texto corrido (Págs. 6, 12, 28) o micro-avisos en Clasificados (Págs. 18–21).
            </li>
            <li>
              <strong>Márgenes Asimétricos y Compensación de Lomo:</strong>
              <div className="my-2 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <p>• <strong>Páginas Pares (Izquierdas):</strong> Margen exterior izquierdo de 14 mm (área de agarre manual); margen interior derecho (lomo) de 11 mm.</p>
                <p>• <strong>Páginas Impares (Derechas):</strong> Margen interior izquierdo (lomo) de 11 mm; margen exterior derecho de 14 mm.</p>
                <p>• <strong>Compensación:</strong> La diferencia de 3 mm contrarresta la curvatura física producida por el plegado de bobina en rotativa, logrando que el canal central (11 + 11 = 22 mm) aparente la misma holgura que los 14 mm exteriores.</p>
              </div>
            </li>
            <li>
              <strong>Espacios en Blanco y Flujo de Lectura:</strong> Los blancos actúan como amortiguadores visuales entre bloques temáticos. Existe una reserva mínima de 12–16 pt antes de cada titular principal. Se prescinde de filetes ciegos verticales entre columnas de una misma nota para no entorpecer el recorrido natural en 'Z'.
            </li>
          </ul>
        </section>

        {/* 2. Jerarquía Tipográfica */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h3 className="text-xl font-bitter font-extrabold text-neutral-900 flex items-center gap-2">
            <span className="text-amber-600">2.</span> Jerarquía Tipográfica (Tipometría)
          </h3>
          <p className="text-xs text-neutral-700">
            El sistema se sustenta en el binomio tipográfico confirmado: <strong>Bitter</strong> (Slab Serif) y <strong>Fago No</strong> (Grotesque Sans):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <strong className="text-neutral-900 block font-bitter text-sm">Bitter (Sol Matas - Slab Serif)</strong>
              <p className="text-neutral-600 mt-1">
                Usada en Titulares principales (H1 de 28 a 36 pt), Títulos secundarios (H2 de 20 a 24 pt) y Cuerpo de texto corrido (8.5 a 9.5 pt, justificado, leading 125%). Sus remates mecánicos rectangulares y amplio ojo medio garantizan legibilidad en papel periódico.
              </p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <strong className="text-neutral-900 block font-fago text-sm">Fago No (Ole Schäfer - Sans Grotesque)</strong>
              <p className="text-neutral-600 mt-1">
                Usada en Bajadas y Copetes (Medium 11 a 13 pt, leading 140%), Destacados de citas (Bold Italic 18 a 22 pt), Pies de foto (Regular 8 pt) y Cornisas de sección. Genera contraste geométrico de lectura rápida.
              </p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-700">
            <li><strong>Letra Capitular (Drop Cap):</strong> Bitter Extra Bold 800 de 3 a 4 líneas de caja en aperturas de crónicas y columnas.</li>
            <li><strong>Cifras Infográficas (Big Numbers):</strong> Cuerpos gigantes de 48 a 64 pt en Fago o Bitter Black para porcentajes y estadísticas.</li>
            <li><strong>Folios y Cintillos:</strong> Bitter 14 pt para números salientes y Fago 9 pt para la fecha institucional.</li>
          </ul>
        </section>

        {/* 3. Arquitectura por Secciones */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h3 className="text-xl font-bitter font-extrabold text-neutral-900 flex items-center gap-2">
            <span className="text-sky-600">3.</span> Arquitectura por Secciones
          </h3>
          <p className="text-xs text-neutral-700">
            Cada sección se diferencia mediante códigos cromáticos funcionales y morfologías de cabecera:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono-code">
            <div className="p-2 rounded bg-cyan-50 border border-cyan-200 text-cyan-900">
              <strong>Salta:</strong> #00A3E0 (Cyan)
            </div>
            <div className="p-2 rounded bg-red-50 border border-red-200 text-red-900">
              <strong>Deportes:</strong> #DC2626 (Rojo)
            </div>
            <div className="p-2 rounded bg-sky-50 border border-sky-200 text-sky-900">
              <strong>Policial:</strong> #0284C7 (Cobalto)
            </div>
            <div className="p-2 rounded bg-pink-50 border border-pink-200 text-pink-900">
              <strong>Artes & Vida:</strong> #BE185D (Magenta)
            </div>
            <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900">
              <strong>Panorama:</strong> #D97706 (Ámbar)
            </div>
            <div className="p-2 rounded bg-neutral-100 border border-neutral-300 text-neutral-900">
              <strong>Opinión:</strong> #1F2937 (Negro)
            </div>
          </div>
          <div className="space-y-2 text-xs text-neutral-700">
            <p>
              • <strong>Apertura de Sección vs. Páginas Interiores:</strong> La página de apertura incluye una <strong>tríada de teasers</strong> en cabeza (cajas con adelanto temático y número de página de destino), una cabecera masiva en color sólido con el nombre de la sección y la ficha con el nombre del editor responsable. Las páginas interiores eliminan los teasers y adoptan un cintillo fino continuo de 0.75 pt con el folio en la esquina.
            </p>
          </div>
        </section>

        {/* 4. Elementos Gráficos y Misceláneas */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h3 className="text-xl font-bitter font-extrabold text-neutral-900 flex items-center gap-2">
            <span className="text-purple-600">4.</span> Elementos Gráficos, Misceláneas y Fotografía
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs text-neutral-700">
            <li>
              <strong>Filetes y Corondeles:</strong> Filete de cornisa continuo de 0.75 pt; filetes de cierre de nota de 0.5 pt gris; filetes de remate en cajas de cita de 3 pt en color de sección. Corondeles verticales reservados para avisos clasificados.
            </li>
            <li>
              <strong>Viñeta de Copete (Bullet):</strong> Círculo lleno (dot) de 5 pt en el color de la sección al inicio de cada bajada informativa.
            </li>
            <li>
              <strong>Tratamiento Fotográfico:</strong> Encuadres rigurosamente ortogonales a 90° sin esquinas redondeadas ni efectos de drop shadow. En páginas interiores las imágenes quedan contenidas en las columnas maestras (no sangran). Relación de aspecto 3:2 para fotoperiodismo general y 4:5 para retratos. Epígrafes pegados al pie con crédito de agencia en mayúsculas al final.
            </li>
          </ul>
        </section>

        {/* 5. Comportamiento del Flujo Editorial */}
        <section className="space-y-4 pt-4 border-t border-neutral-200">
          <h3 className="text-xl font-bitter font-extrabold text-neutral-900 flex items-center gap-2">
            <span className="text-emerald-600">5.</span> Comportamiento del Flujo Editorial y Foliación
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs text-neutral-700">
            <li>
              <strong>Autonomía de Plana (Zero-Jump):</strong> Los artículos inician y concluyen en la misma página. La información secundaria se organiza en recuadros satélite en lugar de recurrir a saltos hacia páginas lejanas.
            </li>
            <li>
              <strong>Remisiones de Portada:</strong> En la portada se indica la continuidad mediante etiquetas fijas <code>[SECCIÓN]: [PÁGINA]</code> (ej. <em>SALTA: 2</em>, <em>DEPORTES: 33</em>).
            </li>
            <li>
              <strong>Foliación Asimétrica:</strong>
              <br />• <em>Página Par:</em> <code>[Página] / [Sección]</code> a la izquierda; <code>El Tribuno | Fecha</code> a la derecha.
              <br />• <em>Página Impar:</em> <code>El Tribuno | Fecha</code> a la izquierda; <code>[Sección]/ [Página]</code> a la derecha exterior. El número de página impar va en la esquina exterior para facilitar el hojeo rápido con el pulgar derecho.
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};
