import React, { useState } from 'react';
import { SECTIONS_DATA } from '../data/editorialGuidelines';
import { Layers, Bookmark, Palette, FileText, ArrowRight, CheckCircle } from 'lucide-react';

export const SectionsArchitecture: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('salta');

  const currentSection =
    SECTIONS_DATA.find((s) => s.id === selectedSection) || SECTIONS_DATA[0];

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-fago font-bold uppercase rounded-full mb-2">
            <Layers className="w-3.5 h-3.5" />
            Punto 3 • Arquitectura Editorial
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            3. Arquitectura por Secciones
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Sistemas de identificación cromática, señalética de cabecera y diferenciación funcional entre <strong>Páginas de Apertura de Sección</strong> y <strong>Páginas Interiores de Desarrollo</strong>.
          </p>
        </div>
      </div>

      {/* Barra de Tabs por Sección con su Color Identitario */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SECTIONS_DATA.map((section) => (
          <button
            key={section.id}
            onClick={() => setSelectedSection(section.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-fago font-bold flex items-center gap-2 whitespace-nowrap transition-all border ${
              selectedSection === section.id
                ? 'shadow-xs ring-2'
                : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
            }`}
            style={{
              borderColor: selectedSection === section.id ? section.colorHex : undefined,
              backgroundColor: selectedSection === section.id ? `${section.colorHex}15` : undefined,
              color: selectedSection === section.id ? section.colorHex : undefined,
            }}
          >
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: section.colorHex }}
            ></span>
            {section.name.split('(')[0]}
          </button>
        ))}
      </div>

      {/* Ficha Detallada de la Sección Seleccionada */}
      <div className="bg-neutral-50/60 rounded-2xl border border-neutral-200/90 p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/80 pb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bitter font-black text-xl shadow-xs"
              style={{ backgroundColor: currentSection.colorHex }}
            >
              {currentSection.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bitter font-bold text-neutral-900">
                {currentSection.name}
              </h3>
              <p className="text-xs font-fago text-neutral-600">
                {currentSection.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-code bg-white px-3 py-2 rounded-xl border border-neutral-200">
            <span className="font-bold text-neutral-900">HEX: {currentSection.colorHex}</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-600">{currentSection.colorCmyk}</span>
          </div>
        </div>

        {/* Comparativa Visual: Página de Apertura vs Página Interior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card: Página de Apertura */}
          <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-fago font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md text-white" style={{ backgroundColor: currentSection.colorHex }}>
                  Página de Apertura de Sección
                </span>
                <span className="text-xs font-mono-code text-neutral-400">
                  Ej. Pág. 2 (Salta) o Pág. 33 (Deportes)
                </span>
              </div>

              {/* Maqueta esquemática de la apertura */}
              <div className="border border-neutral-300 rounded-lg p-3 bg-neutral-50/50 mb-4 space-y-2.5">
                {/* 1. Cintillo de 3 Teasers Superiores */}
                <div className="grid grid-cols-3 gap-2 pb-2 border-b border-neutral-300">
                  <div className="bg-white p-1.5 rounded border border-neutral-200 text-center">
                    <div className="text-[9px] font-bitter font-black uppercase tracking-tight text-neutral-900">
                      TEMA A
                    </div>
                    <div className="text-[7.5px] font-fago text-neutral-500 truncate">
                      Llamada destacada
                    </div>
                    <div className="text-[8px] font-mono-code font-bold text-cyan-700">
                      PÁG. 6
                    </div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-neutral-200 text-center">
                    <div className="text-[9px] font-bitter font-black uppercase tracking-tight text-neutral-900">
                      TEMA B
                    </div>
                    <div className="text-[7.5px] font-fago text-neutral-500 truncate">
                      Anticipo clave
                    </div>
                    <div className="text-[8px] font-mono-code font-bold text-cyan-700">
                      PÁG. 11
                    </div>
                  </div>
                  <div className="bg-white p-1.5 rounded border border-neutral-200 text-center">
                    <div className="text-[9px] font-bitter font-black uppercase tracking-tight text-neutral-900">
                      TEMA C
                    </div>
                    <div className="text-[7.5px] font-fago text-neutral-500 truncate">
                      Segunda noticia
                    </div>
                    <div className="text-[8px] font-mono-code font-bold text-cyan-700">
                      PÁG. 5
                    </div>
                  </div>
                </div>

                {/* 2. Gran Cabecera de Sección */}
                <div
                  className="py-2 px-3 rounded text-white font-bitter font-black text-2xl tracking-tight flex items-center justify-between"
                  style={{ backgroundColor: currentSection.colorHex }}
                >
                  <span>{currentSection.name.split(' ')[0]}</span>
                  <span className="text-[10px] font-fago font-normal tracking-normal opacity-90">
                    Apertura
                  </span>
                </div>

                {/* 3. Ficha de Responsable Editorial */}
                <div className="text-[8.5px] font-fago text-neutral-500 italic pb-1 border-b border-neutral-200">
                  Edición de hoy a cargo de Editor de Sección - redaccion@eltribuno.com
                </div>

                {/* 4. Gran Título Bitter de 34pt y Cuerpo */}
                <div className="space-y-1">
                  <div className="text-xs font-bitter font-extrabold text-neutral-900 leading-tight">
                    {currentSection.leadArticleStyle.split(',')[0]}
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-fago text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: currentSection.colorHex }}></span>
                    <span>Bajada destacada en Fago No Medium</span>
                  </div>
                </div>
              </div>

              <ul className="text-xs font-fago text-neutral-700 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tríada de Teasers de Cabecera:</strong> 3 cajas con miniatura o antetítulo mayúscula y número de página interior de destino.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nombre de Sección Gigante:</strong> Caja sólida o tipografía de 42pt en el color corporativo.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ficha Editorial:</strong> Nombre y correo electrónico del editor responsable de la jornada.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card: Página Interior de Desarrollo */}
          <div className="bg-white rounded-xl border border-neutral-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-fago font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                  Página Interior de Desarrollo
                </span>
                <span className="text-xs font-mono-code text-neutral-400">
                  Ej. Págs. 3, 4, 6, 8, 12, 13, 34
                </span>
              </div>

              {/* Maqueta esquemática de página interior */}
              <div className="border border-neutral-300 rounded-lg p-3 bg-neutral-50/50 mb-4 space-y-2.5">
                {/* 1. Folio superior sobrio con filete de 0.75pt */}
                <div className="flex justify-between items-center text-[10px] font-fago pb-1.5 border-b border-neutral-400">
                  <span className="font-bitter font-bold text-neutral-800">
                    El Tribuno • 28 de Noviembre de 2025
                  </span>
                  <span className="font-bitter font-extrabold text-sm" style={{ color: currentSection.colorHex }}>
                    {currentSection.name.split(' ')[0]}/ 3
                  </span>
                </div>

                {/* 2. Disposición modular piramidal en 6 columnas (4 + 2) */}
                <div className="grid grid-cols-6 gap-1.5 h-36">
                  {/* Foto a 4 cols */}
                  <div className="col-span-4 bg-neutral-300 rounded p-2 flex flex-col justify-between">
                    <span className="text-[9px] font-fago text-neutral-600 font-bold">
                      Fotografía Documental (4 Cols de 6)
                    </span>
                    <span className="text-[7.5px] font-fago text-neutral-500">
                      Epígrafe de foto al pie + Crédito NA/EFE
                    </span>
                  </div>
                  {/* Destacado / Cita a 2 cols */}
                  <div className="col-span-2 bg-white border border-neutral-200 rounded p-2 flex flex-col justify-between">
                    <span className="text-[8px] font-bitter font-bold text-neutral-900 leading-tight">
                      Cita textual destacada (2 Cols)
                    </span>
                    <span className="text-[7.5px] font-mono-code text-cyan-700 font-bold">
                      Fago Bold 11pt
                    </span>
                  </div>

                  {/* Cuerpo a 6 columnas puras abajo */}
                  <div className="col-span-6 grid grid-cols-6 gap-1 pt-1 border-t border-neutral-200">
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                    <div className="h-6 bg-neutral-200/80 rounded-xs"></div>
                  </div>
                </div>
              </div>

              <ul className="text-xs font-fago text-neutral-700 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Cintillo Superior Continuo:</strong> Filete fino continuo de 0.75 pt que atraviesa de corte a corte útil.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Foliación con Slash:</strong> Notación `Sección/ Página` o `Página / Sección` en el color de la sección.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                  <span><strong>Alta Densidad de Contenido:</strong> Coexistencia de nota dominante, notas secundarias en faja inferior y recuadros de apoyo.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Matriz Sintética de Particularidades Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-fago">
        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <h4 className="font-bitter font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-cyan-600" />
            Tratamiento Cromático Funcional
          </h4>
          <p className="text-neutral-600 leading-relaxed">
            El color nunca es meramente decorativo: funciona como código de navegación rápida (Wayfinding) para que el lector reconozca la sección con solo ver el borde de la página al hojear.
          </p>
        </div>

        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <h4 className="font-bitter font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            Antetítulos por Sección
          </h4>
          <p className="text-neutral-600 leading-relaxed">
            En <em>Salta</em> se usa toponimia geográfica ('General Mosconi', 'Aguas Blancas'); en <em>Deportes</em> se usan conceptos temáticos ('LA CRISIS MILLONARIA', 'COMPLOT', 'AFA'); en <em>Policiales</em> el nombre del fuero.
          </p>
        </div>

        <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
          <h4 className="font-bitter font-bold text-neutral-900 mb-1 flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-cyan-600" />
            Integración de Publicidad
          </h4>
          <p className="text-neutral-600 leading-relaxed">
            Los anuncios comerciales se asientan rigurosamente en la base de la plana (módulos de faja inferior de 2 a 5 columnas) o en página par completa (Pág. 10, 14, 40), aislados con filete de 0.5 pt.
          </p>
        </div>
      </div>
    </section>
  );
};
