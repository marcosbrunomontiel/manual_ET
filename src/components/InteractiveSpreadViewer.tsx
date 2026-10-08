import React, { useState } from 'react';
import { Eye, Grid, Sliders, Layers, Tag, Check, Sparkles } from 'lucide-react';

export const InteractiveSpreadViewer: React.FC = () => {
  const [activePage, setActivePage] = useState<'salta-p6' | 'salta-p2' | 'salta-p3' | 'opinion' | 'deportes'>('salta-p6');
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(true);
  const [showTypographyTags, setShowTypographyTags] = useState<boolean>(false);

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 text-white text-xs font-fago font-bold uppercase rounded-full mb-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Simulador de Maqueta Front-End
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            Laboratorio Interactivo: La Ley de las 6 Columnas
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Inspecciona cómo los titulares, volantas y copetes cruzan libremente los módulos (colspan), mientras que <strong>todos los textos de corrido se trabajan invariablemente a 6 columnas fijas de 38 mm</strong>.
          </p>
        </div>

        {/* Controles de Vista */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setShowGridOverlay(!showGridOverlay)}
            className={`px-3 py-2 text-xs font-fago font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
              showGridOverlay
                ? 'bg-cyan-600 text-white border-cyan-600 shadow-xs'
                : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            {showGridOverlay ? 'Retícula Activa (6 Cols)' : 'Activar Retícula'}
          </button>
          <button
            onClick={() => setShowTypographyTags(!showTypographyTags)}
            className={`px-3 py-2 text-xs font-fago font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
              showTypographyTags
                ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <Tag className="w-3.5 h-3.5" />
            {showTypographyTags ? 'Tags Visibles' : 'Ver Tags'}
          </button>
        </div>
      </div>

      {/* Selector de Plana Real */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-fago">
        {[
          { id: 'salta-p6', label: 'Página 6 • Caso Canónico: Textos a 6 Cols (UNSa)', section: 'Salta', color: '#00A3E0', badge: 'RECOMENDADO' },
          { id: 'salta-p2', label: 'Página 2 • Apertura Salta (Par)', section: 'Salta', color: '#00A3E0' },
          { id: 'salta-p3', label: 'Página 3 • Desarrollo Salta (Impar)', section: 'Salta', color: '#00A3E0' },
          { id: 'opinion', label: 'Página 16 • Opinión / Soberanía', section: 'Opinión', color: '#1F2937' },
          { id: 'deportes', label: 'Página 33 • Deportes / River', section: 'Deportes', color: '#DC2626' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActivePage(tab.id as any)}
            className={`px-4 py-2 rounded-xl font-bold border transition-all whitespace-nowrap flex items-center gap-2 ${
              activePage === tab.id
                ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: tab.color }}
            ></span>
            {tab.label}
            {tab.badge && (
              <span className="text-[9px] bg-cyan-500 text-neutral-950 px-1.5 py-0.2 rounded font-black">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Contenedor del Periódico Simulado (Tabloide) */}
      <div className="bg-neutral-850 p-4 sm:p-8 rounded-2xl flex justify-center overflow-x-auto">
        <div
          className="w-[740px] min-w-[740px] bg-[#FAF8F5] text-neutral-900 shadow-2xl rounded-sm p-6 relative border border-neutral-300"
          style={{ minHeight: '900px' }}
        >
          {/* Overlay de Retícula si está activado (Base 6 Columnas) */}
          {showGridOverlay && (
            <div className="absolute inset-0 p-6 pointer-events-none z-20 opacity-20">
              <div className="w-full h-full grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-cyan-500/30 border-x border-cyan-600 h-full flex flex-col justify-between py-2 text-[9px] font-mono-code font-bold text-cyan-900 text-center">
                    <span>Col {i + 1}</span>
                    <span>38mm</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CASO CANÓNICO: PÁGINA 6 (Salta - UNSa Secreto Profesional) */}
          {activePage === 'salta-p6' && (
            <div className="space-y-3 flex flex-col justify-between min-h-[840px]">
              <div>
                {/* Cornisa Par */}
                <div className="border-b border-neutral-900 pb-1.5 flex items-center justify-between text-xs font-fago">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bitter font-black text-2xl leading-none">6</span>
                    <span className="text-neutral-400 font-light text-xl leading-none">/</span>
                    <span className="font-bitter font-bold text-lg text-[#00A3E0] leading-none">Salta</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bitter font-black text-sm text-[#002D62] tracking-tight block">El Tribuno</span>
                    <span className="text-[10px] text-neutral-500">Viernes 28 de noviembre de 2025</span>
                  </div>
                </div>

                {/* Titular Principal H1 Bitter: Cruza horizontalmente 4.5 columnas */}
                <div className="mt-2.5">
                  {showTypographyTags && (
                    <span className="text-[9px] font-mono-code bg-amber-200 text-amber-900 px-1 py-0.5 rounded font-bold mr-1">
                      H1 Bitter Bold 32pt (Cruza cols 1 a 4.5)
                    </span>
                  )}
                  <h1 className="font-bitter font-black text-3xl text-neutral-950 tracking-tight leading-tight max-w-[520px]">
                    Conferencia sobre: “El secreto profesional” en el periodismo
                  </h1>
                </div>

                {/* Bajada / Copete Fago Medium: Cruza horizontalmente 4 columnas */}
                <div className="mt-1.5 mb-3 max-w-[500px]">
                  {showTypographyTags && (
                    <span className="text-[9px] font-mono-code bg-cyan-200 text-cyan-900 px-1 py-0.5 rounded font-bold mr-1">
                      Bajada Fago No Medium 12pt (Cruza cols 1 a 4)
                    </span>
                  )}
                  <div className="flex items-start gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shrink-0 mt-1"></span>
                    <p className="font-fago font-medium text-xs text-neutral-800 leading-snug">
                      Se hará hoy en la UNSa donde disertarán el juez federal y catedrático Gustavo Montoya y el periodista de investigación de El Tribuno, Antonio Oieni.
                    </p>
                  </div>
                </div>

                {/* MATRIZ DE CUERPO DE TEXTO A SEIS (6) COLUMNAS FIJAS */}
                <div className="grid grid-cols-6 gap-2 text-[8px] font-bitter text-neutral-800 leading-tight text-justify pt-1 border-t border-neutral-300">
                  
                  {/* Columna 1 de 6 (38 mm) */}
                  <div className="space-y-1">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 1 (38mm)
                      </span>
                    )}
                    <p>
                      En el marco del “Ciclo de conversatorios sobre libertad de expresión”, organizado por la Facultad de Humanidades y la Escuela de Ciencias de la Comunicación de la UNSa, se desarrollará hoy la conferencia: “El secreto profesional. La verdad no develada”, en el anfiteatro L de esa casa de altos estudios, de 11 a 12.30 horas, con entrega de certificados a los asistentes.
                    </p>
                    <p>
                      Los calificados disertantes serán el juez Federal Gustavo Montoya, quien además es profesor de la cátedra de Libertad de Expresión en la UNSa, y el periodista Antonio Oieni...
                    </p>
                  </div>

                  {/* Columna 2 de 6 (38 mm) */}
                  <div className="space-y-1">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 2 (38mm)
                      </span>
                    )}
                    <p>
                      ...de no revelación de las fuentes de información en el contexto de la sociedad democrática y la libertad de expresión. Veremos casos ocurridos en la Argentina y el modo en que el artículo 43 incorporado en 1994 en la reforma constitucional dice que no se deberá revelar el secreto de la fuente informativa.
                    </p>
                    <p>
                      Agregó: “Creo que Argentina es un país que está a la vanguardia en ese sentido; en EEUU por ejemplo es muy debatido si se revelan o no las fuentes de acuerdo a determinadas circunstancias”.
                    </p>
                  </div>

                  {/* Columna 3 de 6 (38 mm) */}
                  <div className="space-y-1.5">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 3 (38mm)
                      </span>
                    )}
                    <p>
                      ...de esa investigación se desprendieron elementos que fueron clave para el esclarecimiento de un crimen posterior que ocurrió el 18 de septiembre de 1998, cuando tres miembros ejecutaron a dos gendarmes.
                    </p>
                    {/* Recuadro de apoyo dentro de la Columna 3 (ancho 1 col) */}
                    <div className="bg-neutral-100 p-1.5 rounded border border-neutral-300 space-y-1">
                      <div className="h-[2px] bg-neutral-900 w-full mb-1"></div>
                      <span className="font-bitter font-black text-[9px] uppercase block leading-tight text-neutral-900">
                        Los detalles del encuentro
                      </span>
                      <span className="text-[7.5px] font-fago font-bold text-[#00A3E0] block leading-tight">
                        La protección de la ley
                      </span>
                      <p className="text-[7px] font-fago text-neutral-700 leading-tight">
                        La reforma de 1994 incluyó el artículo 43 que garantiza no afectar la reserva.
                      </p>
                      <span className="text-[7.5px] font-fago font-bold text-[#00A3E0] block leading-tight pt-0.5">
                        Una investigación como ejemplo
                      </span>
                      <p className="text-[7px] font-fago text-neutral-700 leading-tight">
                        El caso ocurrió en 1998 en Bolivia con bandas del crimen en Yacuiba.
                      </p>
                    </div>
                  </div>

                  {/* Columna 4 de 6 (38 mm) */}
                  <div className="space-y-1">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 4 (38mm)
                      </span>
                    )}
                    <p>
                      ...que tenía solamente 21 años. Ese fue considerado el crimen más sanguinario de esa década, e inicialmente las investigaciones apuntaron a un malviviente que integraba estas redes. Pero a partir de los elementos aportados, se pudo incriminar a los verdaderos autores.
                    </p>
                    <p>
                      Añadió: “Hablo de Ramón Rojas, Teodoro Villagrán y Julio Asaa, quienes en agosto de 2005 fueron condenados a perpetua en un juicio oral histórico”.
                    </p>
                  </div>

                  {/* Columna 5 de 6 (38 mm) - Foto 1 Col + Texto 1 Col */}
                  <div className="space-y-1">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 5 (38mm)
                      </span>
                    )}
                    {/* Retrato Oieni (Ancho 1 Columna) */}
                    <div className="bg-neutral-200 rounded border border-neutral-300 overflow-hidden">
                      <div className="aspect-4/5 bg-gradient-to-b from-neutral-300 to-neutral-400 flex items-center justify-center text-[7px] font-fago font-bold text-neutral-600">
                        [Foto Oieni]
                      </div>
                      <div className="p-0.5 text-[7px] font-fago font-bold text-neutral-800 text-center">
                        Antonio Oieni
                      </div>
                    </div>
                    <p className="pt-0.5">
                      Yacuiba. Obviamente, me planté y dije que bajo ningún punto de vista iba a dar detalles de esa investigación periodística que tenía un sinfín de fuentes reservadas, porque había vidas en riesgo. Solá Torino le pidió al fiscal que me impute por falso testimonio...
                    </p>
                  </div>

                  {/* Columna 6 de 6 (38 mm) - Foto 1 Col + Texto 1 Col */}
                  <div className="space-y-1">
                    {showTypographyTags && (
                      <span className="text-[7px] font-mono-code bg-neutral-200 text-neutral-800 px-1 block font-bold text-center">
                        Col 6 (38mm)
                      </span>
                    )}
                    {/* Retrato Montoya (Ancho 1 Columna) */}
                    <div className="bg-neutral-200 rounded border border-neutral-300 overflow-hidden">
                      <div className="aspect-4/5 bg-gradient-to-b from-neutral-300 to-neutral-400 flex items-center justify-center text-[7px] font-fago font-bold text-neutral-600">
                        [Foto Montoya]
                      </div>
                      <div className="p-0.5 text-[7px] font-fago font-bold text-neutral-800 text-center">
                        Gustavo Montoya
                      </div>
                    </div>
                    <p className="pt-0.5">
                      ...que, a 20 años de aquel juicio, quede sentado cuál es la importancia de que los periodistas defiendan y protejan el secreto de las fuentes periodísticas. Más aún si tenés en cuenta que dos años después aquel tribunal fue destituido por proteger bandas narcos...
                    </p>
                  </div>

                </div>
              </div>

              {/* Publicidad a Plana Completa al Pie (Cruza las 6 Columnas) */}
              <div className="bg-[#002D62] text-white p-3 rounded border border-neutral-400 space-y-1.5 mt-4">
                <div className="flex justify-between items-center text-[8px] font-fago uppercase tracking-widest text-cyan-300 font-bold border-b border-cyan-800 pb-1">
                  <span>• Sumate al canal más visto de la Provincia.</span>
                  <span>• Único con 24 horas de programación propia.</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#D9252A] text-white px-2 py-0.5 rounded font-bitter font-black text-xs uppercase tracking-tight">
                      MULTIVISIÓN® FEDERAL
                    </span>
                    <span className="font-bitter font-black text-sm uppercase text-white tracking-wider">
                      DE SALTA HACIA TODO EL PAÍS
                    </span>
                  </div>
                  <span className="font-mono-code text-[8px] text-cyan-300">
                    WWW.MULTIVISION.TV (Cruza 6 cols)
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* CASO: PÁGINA 2 (Apertura Salta - Par) */}
          {activePage === 'salta-p2' && (
            <div className="space-y-4">
              {/* Cornisa Par */}
              <div className="border-b border-neutral-900 pb-2 flex items-center justify-between text-xs font-fago">
                <div className="flex items-baseline gap-2">
                  <span className="font-bitter font-black text-2xl leading-none">2</span>
                  <span className="text-neutral-400 font-light text-xl leading-none">/</span>
                  <span className="font-bitter font-bold text-lg text-[#00A3E0] leading-none">Salta</span>
                </div>
                <div className="text-right">
                  <span className="font-bitter font-black text-sm text-[#002D62] tracking-tight block">El Tribuno</span>
                  <span className="text-[10px] text-neutral-500">Viernes 28 de noviembre de 2025</span>
                </div>
              </div>

              {/* 3 Teasers Superiores de Apertura */}
              <div className="grid grid-cols-3 gap-3 pb-3 border-b border-neutral-300">
                <div className="border-r border-neutral-300 pr-2">
                  <div className="text-[10px] font-bitter font-extrabold uppercase text-neutral-900">MOSCONI</div>
                  <div className="text-[9px] font-fago text-neutral-600 line-clamp-2">
                    Un terciario que no para de crecer y le urge ampliar el edificio.
                  </div>
                  <div className="text-[9px] font-mono-code font-bold text-[#00A3E0] mt-0.5">PÁGINA 11</div>
                </div>
                <div className="border-r border-neutral-300 pr-2">
                  <div className="text-[10px] font-bitter font-extrabold uppercase text-neutral-900">UNSA</div>
                  <div className="text-[9px] font-fago text-neutral-600 line-clamp-2">
                    Conferencia sobre “El secreto profesional” en el periodismo.
                  </div>
                  <div className="text-[9px] font-mono-code font-bold text-[#00A3E0] mt-0.5">PÁGINA 6</div>
                </div>
                <div>
                  <div className="text-[10px] font-bitter font-extrabold uppercase text-neutral-900">CONCEJO</div>
                  <div className="text-[9px] font-fago text-neutral-600 line-clamp-2">
                    Linares impulsó un proyecto de cremación municipal.
                  </div>
                  <div className="text-[9px] font-mono-code font-bold text-[#00A3E0] mt-0.5">PÁGINA 5</div>
                </div>
              </div>

              {/* Cabecera de Sección Salta */}
              <div className="bg-[#00A3E0] text-white px-4 py-2.5 rounded flex items-center justify-between">
                <h1 className="font-bitter font-black text-3xl tracking-tight leading-none">Salta</h1>
                <span className="text-[9px] font-fago text-white/90">Edición a cargo de Nelson Colque - redaccion@eltribuno.com</span>
              </div>

              {/* Titular Principal H1 Bitter */}
              <div>
                {showTypographyTags && (
                  <span className="text-[9px] font-mono-code bg-amber-200 text-amber-900 px-1 py-0.5 rounded font-bold mr-1">
                    H1 Bitter Bold 34pt
                  </span>
                )}
                <h2 className="font-bitter font-black text-3xl text-neutral-950 tracking-tight leading-tight mt-1">
                  La industria resiste la crisis y se esfuerza para mantener el empleo
                </h2>
              </div>

              {/* Bajadas con Bullet Cyan */}
              <div className="space-y-1.5 pt-1">
                {showTypographyTags && (
                  <span className="text-[9px] font-mono-code bg-cyan-200 text-cyan-900 px-1 py-0.5 rounded font-bold mr-1">
                    Copete Fago No Medium 12pt + Bullet Cyan 5pt
                  </span>
                )}
                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shrink-0 mt-1"></span>
                  <p className="font-fago font-medium text-sm text-neutral-800 leading-snug">
                    La Unión Industrial de Salta advierte por los impuestos y la suba de costos.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shrink-0 mt-1"></span>
                  <p className="font-fago font-medium text-sm text-neutral-800 leading-snug">
                    Uno de los sectores más críticos es de las cerámicas por las importaciones de Brasil.
                  </p>
                </div>
              </div>

              {/* Foto a 4 columnas con Cita a 2 columnas (Total 6 Cols) */}
              <div className="grid grid-cols-6 gap-3 pt-2">
                <div className="col-span-4 bg-neutral-200 rounded border border-neutral-300 overflow-hidden">
                  <div className="aspect-16/9 bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center text-xs font-fago text-neutral-500 font-bold">
                    [Fotografía: Planta industrial salteña y obreros (4 Cols)]
                  </div>
                  <div className="p-1.5 bg-neutral-100 text-[9px] font-fago text-neutral-600 border-t border-neutral-200">
                    Obreros y maquinarias en una planta industrial de Salta; el sector enfrenta un panorama complejo.
                  </div>
                </div>

                <div className="col-span-2 bg-white p-3 rounded border-l-4 border-[#00A3E0] flex flex-col justify-between shadow-2xs">
                  <div>
                    <span className="font-fago font-bold text-xs text-[#00A3E0] uppercase block">Pedro Pittaluga</span>
                    <span className="text-[9px] font-fago text-neutral-500 uppercase block font-semibold">Unión Industrial</span>
                    <blockquote className="font-fago italic text-xs text-neutral-800 mt-2 leading-snug">
                      “Trabajar en la microeconomía es generar un desarrollo federal equilibrado y reducción del costo”.
                    </blockquote>
                  </div>
                  <span className="text-[9px] font-mono-code text-neutral-400">Entrevista Exclusiva (2 Cols)</span>
                </div>
              </div>

              {/* Cuerpo de texto a 6 columnas / 3 dobles */}
              <div className="editorial-columns-3 text-[10px] font-bitter text-neutral-800 leading-relaxed text-justify pt-2 border-t border-neutral-300">
                <p className="mb-2">
                  La industria en Salta atraviesa un cierre de 2025 complejo, con resultados dispares según el sector, pero con un dato que desde la Unión Industrial de Salta (UIS) destacan como central: pese a las caídas en la actividad, las empresas locales están haciendo esfuerzos para sostener el empleo y evitar despidos masivos.
                </p>
                <p className="mb-2">
                  Sectores como la construcción, el textil, la confección y la metalmecánica registraron retrocesos de hasta el 20% durante el año, en un contexto marcado por la presión de los costos, la falta de infraestructura y la competencia regional.
                </p>
                <p>
                  "Lo que estamos notando es una variación según sectores. Este año la construcción sufrió un golpe muy fuerte, con caídas severas; pero no advertimos empresas al borde de la quiebra", concluyó el dirigente de la UIS.
                </p>
              </div>
            </div>
          )}

          {/* CASO: PÁGINA 3 (Desarrollo Salta - Impar) */}
          {activePage === 'salta-p3' && (
            <div className="space-y-4">
              {/* Cornisa Impar */}
              <div className="border-b border-neutral-900 pb-2 flex items-center justify-between text-xs font-fago">
                <div>
                  <span className="font-bitter font-black text-sm text-[#002D62] tracking-tight block">El Tribuno</span>
                  <span className="text-[10px] text-neutral-500">Viernes 28 de noviembre de 2025</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bitter font-bold text-lg text-[#00A3E0] leading-none">Salta/</span>
                  <span className="font-bitter font-black text-2xl leading-none">3</span>
                </div>
              </div>

              {/* Foto superior panorámica a 6 columnas */}
              <div className="bg-neutral-200 rounded border border-neutral-300 overflow-hidden">
                <div className="aspect-21/9 bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center text-xs font-fago text-neutral-500 font-bold">
                  [Fotografía Panorámica: Obras del Mercado San Miguel a 6 Columnas]
                </div>
                <div className="p-1.5 bg-neutral-100 text-[9px] font-fago text-neutral-600 border-t border-neutral-200">
                  Los trabajos que se realizaron para levantar nuevas columnas en calle Urquiza.
                </div>
              </div>

              {/* Titular Principal H1 */}
              <div>
                <h2 className="font-bitter font-black text-2xl text-neutral-950 tracking-tight leading-tight">
                  El mercado San Miguel tiene un 20% de avance de obra
                </h2>
              </div>

              {/* Bajada */}
              <div className="flex items-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A3E0] shrink-0 mt-1"></span>
                <p className="font-fago font-medium text-xs text-neutral-800 leading-snug">
                  Obras Públicas de la Municipalidad estima habilitar sectores parciales mientras continúa la obra, que estaría lista para el primer trimestre de 2027.
                </p>
              </div>

              {/* Layout Dividido 4 + 2: Noticia Mercado (4 cols) + Turismo con Big Number (2 cols) */}
              <div className="grid grid-cols-6 gap-4 pt-2 border-t border-neutral-300">
                {/* 4 Columnas: Mercado */}
                <div className="col-span-4 space-y-2">
                  <div className="editorial-columns-2 text-[10px] font-bitter text-neutral-800 leading-relaxed text-justify">
                    <p className="mb-2">
                      El secretario de Obras Públicas, Gastón Viola, informó que la reconstrucción del mercado San Miguel registra un avance sostenido. Los trabajos incluyen la construcción de vigas interiores y las primeras losas que conformarán unos 1.600 metros cuadrados.
                    </p>
                    <p>
                      En el sector afectado por el incendio se levanta por completo el primer nivel. Asimismo, se avanza en la recuperación del estacionamiento con una intervención de 2.000 metros adicionales.
                    </p>
                  </div>
                </div>

                {/* 2 Columnas: Noticia Turismo con Big Number */}
                <div className="col-span-2 bg-neutral-50 p-3 rounded border border-neutral-200 space-y-3">
                  <div>
                    <span className="text-[9px] font-fago font-bold text-[#00A3E0] uppercase block">PREMIO BITÁCORA DE ORO</span>
                    <h3 className="font-bitter font-bold text-sm text-neutral-900 mt-0.5">
                      Distinción para el turismo de Salta
                    </h3>
                  </div>

                  {/* Big Number Component */}
                  <div className="bg-white p-2 rounded border border-neutral-200 text-center">
                    <div className="text-3xl font-bitter font-black text-[#002D62] leading-none">
                      85
                    </div>
                    <div className="text-[9px] font-fago font-bold uppercase text-neutral-500">
                      por ciento
                    </div>
                    <div className="text-[8.5px] font-fago text-neutral-600 mt-1">
                      fue el pico de ocupación hotelera en el último fin de semana largo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CASO: PÁGINA 16 (Opinión) */}
          {activePage === 'opinion' && (
            <div className="space-y-4">
              {/* Cornisa Par de Opinión */}
              <div className="border-b border-neutral-900 pb-2 flex items-center justify-between text-xs font-fago">
                <div className="flex items-baseline gap-2">
                  <span className="font-bitter font-black text-2xl leading-none">16</span>
                  <span className="text-neutral-400 font-light text-xl leading-none">/</span>
                  <span className="font-bitter font-bold text-lg text-neutral-900 leading-none">Opinión</span>
                </div>
                <div className="text-right">
                  <span className="font-bitter font-black text-sm text-[#002D62] tracking-tight block">El Tribuno</span>
                  <span className="text-[10px] text-neutral-500">Viernes 28 de noviembre de 2025</span>
                </div>
              </div>

              {/* Módulo Superior de Redes Sociales */}
              <div className="bg-neutral-100 p-2.5 rounded border border-neutral-300">
                <span className="text-[8.5px] font-fago font-bold uppercase text-neutral-500 tracking-wider block">REDES SOCIALES</span>
                <p className="text-xs font-bitter italic text-neutral-800 mt-1">
                  “El 10 de diciembre cambia la fuerza, cambian las prioridades y empieza una nueva etapa en el Congreso: orden, responsabilidad y trabajo”.
                </p>
                <span className="text-[9px] font-fago font-bold text-neutral-700 block mt-1">
                  PATRICIA BULLRICH, ministra de Seguridad
                </span>
              </div>

              {/* Gran Titular Ensayo de Opinión */}
              <div className="text-center pt-2 max-w-xl mx-auto">
                <span className="text-[10px] font-fago font-bold uppercase tracking-wider text-neutral-500">
                  Tribuna de Doctrina • Por José Eduardo Poma
                </span>
                <h1 className="font-bitter font-black text-3xl text-neutral-900 mt-1 tracking-tight leading-tight">
                  El ultraliberalismo ante el Día de la Soberanía
                </h1>
                <p className="font-fago text-xs text-neutral-600 mt-1 italic">
                  La Vuelta de Obligado constituye un hito en nuestra historia: una batalla desproporcionada que definió el control sobre los ríos.
                </p>
              </div>

              {/* Retícula de 4 Columnas con Letra Capitular */}
              <div className="editorial-columns-4 text-[9.5px] font-bitter text-neutral-800 leading-relaxed text-justify pt-3 border-t border-neutral-300">
                <p className="drop-cap mb-2">
                  ada 20 de noviembre la Argentina conmemora la Batalla de la Vuelta de Obligado, un acontecimiento que trasciende la historia militar para convertirse en un símbolo profundo de la soberanía nacional. En 1845, fuerzas de la Confederación enfrentaron a las escuadras combinadas más poderosas del mundo.
                </p>
                <p className="mb-2">
                  El combate fue desigual: de un lado una resistencia patriótica improvisada; del otro la tecnología naval más avanzada. Sin embargo, lograron que las flotas invasoras comprendieran que no podrían someter a un pueblo libre.
                </p>
                <p className="mb-2">
                  El Día de la Soberanía Nacional reconoce esa gesta histórica, reivindicando la figura de Juan Manuel de Rosas y el derecho inalienable a la autodeterminación territorial frente a potencias foráneas.
                </p>
                <p>
                  Hoy la libertad no consiste en abrir indiscriminadamente nuestros recursos al arbitrio externo, sino en tener la templanza institucional para defender el desarrollo y la industria de nuestro suelo.
                </p>
              </div>
            </div>
          )}

          {/* CASO: PÁGINA 33 (Deportes) */}
          {activePage === 'deportes' && (
            <div className="space-y-4">
              {/* Cornisa Deportes */}
              <div className="border-b border-neutral-900 pb-2 flex items-center justify-between text-xs font-fago">
                <div className="flex items-baseline gap-2">
                  <span className="font-bitter font-black text-2xl leading-none">33</span>
                  <span className="text-neutral-400 font-light text-xl leading-none">/</span>
                  <span className="font-bitter font-bold text-lg text-[#DC2626] leading-none">Deportes</span>
                </div>
                <div className="text-right">
                  <span className="font-bitter font-black text-sm text-[#002D62] tracking-tight block">El Tribuno</span>
                  <span className="text-[10px] text-neutral-500">Viernes 28 de noviembre de 2025</span>
                </div>
              </div>

              {/* Cintillo Deportivo de 3 Teasers */}
              <div className="grid grid-cols-3 gap-3 pb-2 border-b border-neutral-300">
                <div className="text-center p-1 bg-neutral-100 rounded">
                  <span className="text-[10px] font-bitter font-black uppercase text-neutral-900 block">PARANÁ</span>
                  <span className="text-[8px] font-fago text-neutral-600 truncate block">Seven de la República</span>
                  <span className="text-[8.5px] font-mono-code font-bold text-[#DC2626]">PÁG. 37</span>
                </div>
                <div className="text-center p-1 bg-neutral-100 rounded">
                  <span className="text-[10px] font-bitter font-black uppercase text-neutral-900 block">AFA</span>
                  <span className="text-[8px] font-fago text-neutral-600 truncate block">Sanción a Estudiantes</span>
                  <span className="text-[8.5px] font-mono-code font-bold text-[#DC2626]">PÁG. 35</span>
                </div>
                <div className="text-center p-1 bg-neutral-100 rounded">
                  <span className="text-[10px] font-bitter font-black uppercase text-neutral-900 block">COMPLOT</span>
                  <span className="text-[8px] font-fago text-neutral-600 truncate block">Fallo Gimnasia y Tiro</span>
                  <span className="text-[8.5px] font-mono-code font-bold text-[#DC2626]">PÁG. 34</span>
                </div>
              </div>

              {/* Cabecera Deportes Rojo */}
              <div className="bg-[#DC2626] text-white px-4 py-2.5 rounded flex items-center justify-between">
                <h1 className="font-bitter font-black text-3xl tracking-tight leading-none italic">Deportes</h1>
                <span className="text-[9px] font-fago text-white/90">Edición a cargo de Mario Peiró - deportes@eltribuno.com</span>
              </div>

              {/* Antetítulo Kicker */}
              <div>
                <span className="text-[10px] font-fago font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded">
                  LA CRISIS MILLONARIA
                </span>
                <h2 className="font-bitter font-black text-3xl text-neutral-950 tracking-tight leading-tight mt-1">
                  Llegó la motosierra Gallardo
                </h2>
              </div>

              {/* Bajadas con Bullet Rojo */}
              <div className="space-y-1">
                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] shrink-0 mt-1"></span>
                  <p className="font-fago font-medium text-xs text-neutral-800 leading-snug">
                    El DT le comunicó a varios jugadores que no seguirán a partir de fin de año.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] shrink-0 mt-1"></span>
                  <p className="font-fago font-medium text-xs text-neutral-800 leading-snug">
                    Hay cuatro héroes de Madrid y se suman promesas que no rindieron lo esperado.
                  </p>
                </div>
              </div>

              {/* Foto de Gallardo a 4 columnas y Módulo Estadístico a 2 columnas (Total 6 Cols) */}
              <div className="grid grid-cols-6 gap-3 pt-2">
                <div className="col-span-4 bg-neutral-200 rounded border border-neutral-300 overflow-hidden">
                  <div className="aspect-16/10 bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 flex items-center justify-center text-xs font-fago text-neutral-500 font-bold">
                    [Fotografía: Marcelo Gallardo pensativo en el entrenamiento (4 Cols)]
                  </div>
                  <div className="p-1.5 bg-neutral-100 text-[9px] font-fago text-neutral-600 border-t border-neutral-200">
                    Gallardo prendió la motosierra a raíz de las frustraciones y apuntaría a la cantera.
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <div className="bg-red-50 p-2.5 rounded border border-red-200 text-center">
                    <span className="text-3xl font-bitter font-black text-[#DC2626] block leading-none">12</span>
                    <span className="text-[9px] font-fago font-bold text-red-950 uppercase block">torneos</span>
                    <span className="text-[8px] font-fago text-neutral-600 block mt-0.5">
                      nacionales sumó River eliminado en playoffs de manera consecutiva.
                    </span>
                  </div>
                  <p className="text-[9.5px] font-bitter text-neutral-700 leading-relaxed text-justify">
                    Al año de River ya no le quedan compromisos oficiales pero sí disgustos. En la vuelta a los entrenamientos el técnico ratificó que no contará con Ignacio Fernández, Milton Casco, ni Enzo Pérez.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
