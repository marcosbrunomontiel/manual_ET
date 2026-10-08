import React, { useState } from 'react';
import { GRID_SYSTEM_DATA } from '../data/editorialGuidelines';
import { Grid, Eye, BookOpen, MoveHorizontal, CheckCircle2, Sliders } from 'lucide-react';

export const GridSystemSection: React.FC = () => {
  const [activePreset, setActivePreset] = useState<number>(0);
  const [showRuler, setShowRuler] = useState<boolean>(true);
  const [spreadMode, setSpreadMode] = useState<'single' | 'spread'>('spread');

  const currentGrid = GRID_SYSTEM_DATA.columns[activePreset];

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header del Bloque */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-fago font-bold uppercase rounded-full mb-2">
            <Grid className="w-3.5 h-3.5" />
            Punto 1 • Ingeniería Inversa
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            1. Estructura Base y Retícula (Grid System)
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Desglose métrico del formato tabloide/compacto de <strong>El Tribuno</strong> (280 × 400 mm). Sistema modular adaptativo por sección con compensación geométrica de lomo.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRuler(!showRuler)}
            className={`px-3 py-2 text-xs font-fago font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
              showRuler
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            {showRuler ? 'Ocultar Cotas' : 'Ver Cotas'}
          </button>
          <div className="bg-neutral-100 p-1 rounded-lg border border-neutral-200 flex text-xs font-fago">
            <button
              onClick={() => setSpreadMode('spread')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                spreadMode === 'spread'
                  ? 'bg-white shadow-xs text-neutral-900 font-bold'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Doble Página (Spread)
            </button>
            <button
              onClick={() => setSpreadMode('single')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                spreadMode === 'single'
                  ? 'bg-white shadow-xs text-neutral-900 font-bold'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              Página Individual
            </button>
          </div>
        </div>
      </div>

      {/* Selector de Presets de Retícula */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {GRID_SYSTEM_DATA.columns.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActivePreset(idx)}
            className={`p-3.5 text-left rounded-xl border transition-all ${
              activePreset === idx
                ? 'border-cyan-600 bg-cyan-50/50 shadow-xs ring-1 ring-cyan-600'
                : 'border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100/60'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-fago font-bold text-neutral-500 uppercase tracking-wider">
                Preset Base 6 #{idx + 1}
              </span>
              {activePreset === idx && (
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
              )}
            </div>
            <h4 className="text-sm font-bitter font-bold text-neutral-900 mt-1">
              {item.type.split('(')[0]}
            </h4>
            <div className="flex items-center gap-1.5 mt-2 text-xs font-mono-code text-neutral-600">
              <span className="bg-white px-1.5 py-0.5 rounded border border-neutral-200 text-[10px]">
                {item.colWidth.split('|')[0].trim()}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Visualizador de Doble Página / Simulación de Margen */}
      <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 text-white overflow-x-auto">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-fago uppercase tracking-widest text-neutral-400 font-bold">
              Simulador Visual de Pliegos • Retícula de 6 Columnas
            </span>
            <span className="px-2 py-0.5 bg-neutral-800 text-cyan-400 rounded text-xs font-mono-code">
              Base: 6 Cols (38 mm c/u + 5 mm gap)
            </span>
          </div>
          <span className="text-xs font-fago text-neutral-400">
            Formato: 280 × 400 mm (Base: Tabloide)
          </span>
        </div>

        {/* Maqueta Spread */}
        <div className="min-w-[680px] flex items-center justify-center">
          <div className="flex items-stretch gap-0 bg-neutral-800 p-6 rounded-lg shadow-2xl border border-neutral-700">
            
            {/* Página Par (Izquierda / Verso) */}
            <div className="w-[320px] sm:w-[350px] bg-[#FAF8F5] text-neutral-900 p-4 rounded-l-md border-r border-neutral-400/80 relative shadow-inner">
              {/* Badge Par */}
              <div className="flex justify-between items-center text-[10px] font-fago font-bold pb-2 border-b border-neutral-300 text-neutral-500 mb-2">
                <span className="text-cyan-600 font-bitter text-xs font-black">2 / Salta</span>
                <span className="font-mono-code">El Tribuno • Viernes 28/11/2025</span>
              </div>

              {/* Cotas de márgenes si activo */}
              {showRuler && (
                <div className="mb-2 p-1.5 bg-cyan-50/80 border border-cyan-200 rounded text-[9px] font-mono-code text-cyan-900 flex justify-between">
                  <span>Ext: 14mm</span>
                  <span className="text-amber-800 font-bold">Lomo (Int): 11mm</span>
                </div>
              )}

              {/* Columnas Simuladas - 6 Columnas Base */}
              <div
                className="grid gap-1.5 h-64"
                style={{
                  gridTemplateColumns:
                    activePreset === 1
                      ? '4fr 2fr' // 4+2
                      : activePreset === 2
                      ? '3fr 3fr' // 3+3
                      : 'repeat(6, 1fr)' // 6 puras
                }}
              >
                {activePreset === 1 ? (
                  <>
                    <div className="bg-cyan-100/60 border border-cyan-300 rounded p-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] font-mono-code text-cyan-800 font-bold">
                        <span>BLOQUE DOMINANTE (4 COLS)</span>
                        <span>167 mm</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1 my-auto opacity-70">
                        <div className="h-20 bg-cyan-200 rounded-xs"></div>
                        <div className="h-20 bg-cyan-200 rounded-xs"></div>
                        <div className="h-20 bg-cyan-200 rounded-xs"></div>
                        <div className="h-20 bg-cyan-200 rounded-xs"></div>
                      </div>
                      <span className="text-[8px] font-fago text-cyan-700 text-center">
                        Art. Principal (Mercado / Crónica Central)
                      </span>
                    </div>
                    <div className="bg-amber-100/60 border border-amber-300 rounded p-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] font-mono-code text-amber-800 font-bold">
                        <span>APOYO (2 COLS)</span>
                        <span>81 mm</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1 my-auto opacity-70">
                        <div className="h-20 bg-amber-200 rounded-xs"></div>
                        <div className="h-20 bg-amber-200 rounded-xs"></div>
                      </div>
                      <span className="text-[8px] font-fago text-amber-700 text-center">
                        Sidebar / Segunda Noticia / Big Number
                      </span>
                    </div>
                  </>
                ) : activePreset === 2 ? (
                  <>
                    <div className="bg-purple-100/60 border border-purple-300 rounded p-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] font-mono-code text-purple-800 font-bold">
                        <span>NOTICIA A (3 COLS)</span>
                        <span>124 mm</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 my-auto opacity-70">
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                      </div>
                      <span className="text-[8px] font-fago text-purple-700 text-center">
                        Mitad Izquierda (1/2 de Plana)
                      </span>
                    </div>
                    <div className="bg-purple-100/60 border border-purple-300 rounded p-2 flex flex-col justify-between">
                      <div className="flex justify-between items-center text-[9px] font-mono-code text-purple-800 font-bold">
                        <span>NOTICIA B (3 COLS)</span>
                        <span>124 mm</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 my-auto opacity-70">
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                        <div className="h-20 bg-purple-200 rounded-xs"></div>
                      </div>
                      <span className="text-[8px] font-fago text-purple-700 text-center">
                        Mitad Derecha (1/2 de Plana)
                      </span>
                    </div>
                  </>
                ) : (
                  Array.from({ length: 6 }).map((_, colI) => (
                    <div
                      key={colI}
                      className="bg-neutral-200/70 border border-dashed border-neutral-300 rounded p-1 flex flex-col justify-between"
                    >
                      <span className="text-[9px] font-mono-code text-neutral-500 text-center font-bold">
                        C{colI + 1}
                      </span>
                      <div className="space-y-1 my-auto opacity-70">
                        <div className="h-1 bg-neutral-400 rounded-xs"></div>
                        <div className="h-1 bg-neutral-300 rounded-xs"></div>
                        <div className="h-1 bg-neutral-300 rounded-xs w-4/5"></div>
                      </div>
                      <span className="text-[8px] font-mono-code text-neutral-400 text-center">
                        38 mm
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Nota al pie */}
              <div className="mt-3 text-[9px] font-fago text-neutral-400 text-center uppercase tracking-wider">
                Página Par (Verso) • Margen Izq Mayor (14 mm)
              </div>
            </div>

            {/* Pliegue Central (Lomo / Gutter del Encuadernado) */}
            <div className="w-4 bg-gradient-to-r from-neutral-300 via-neutral-900/40 to-neutral-300 flex items-center justify-center relative">
              <div className="w-[1px] h-full bg-neutral-600"></div>
              {showRuler && (
                <div className="absolute top-1/2 -translate-y-1/2 -rotate-90 text-[8px] font-mono-code text-white bg-black/80 px-1 py-0.5 rounded whitespace-nowrap">
                  Lomo: 22 mm Total
                </div>
              )}
            </div>

            {/* Página Impar (Derecha / Recto) - Mostrado en modo spread */}
            {spreadMode === 'spread' && (
              <div className="w-[320px] sm:w-[350px] bg-[#FAF8F5] text-neutral-900 p-4 rounded-r-md border-l border-neutral-400/80 relative shadow-inner">
                {/* Badge Impar */}
                <div className="flex justify-between items-center text-[10px] font-fago font-bold pb-2 border-b border-neutral-300 text-neutral-500 mb-2">
                  <span className="font-mono-code">El Tribuno • Viernes 28/11/2025</span>
                  <span className="text-cyan-600 font-bitter text-xs font-black">Salta/ 3</span>
                </div>

                {/* Cotas de márgenes */}
                {showRuler && (
                  <div className="mb-2 p-1.5 bg-cyan-50/80 border border-cyan-200 rounded text-[9px] font-mono-code text-cyan-900 flex justify-between">
                    <span className="text-amber-800 font-bold">Lomo (Int): 11mm</span>
                    <span>Ext: 14mm</span>
                  </div>
                )}

                {/* Columnas Simuladas - 6 Columnas */}
                <div
                  className="grid gap-1.5 h-64"
                  style={{
                    gridTemplateColumns:
                      activePreset === 1
                        ? '4fr 2fr'
                        : activePreset === 2
                        ? '3fr 3fr'
                        : 'repeat(6, 1fr)'
                  }}
                >
                  {activePreset === 1 ? (
                    <>
                      <div className="bg-cyan-100/60 border border-cyan-300 rounded p-2 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[9px] font-mono-code text-cyan-800 font-bold">
                          <span>NOTICIA MERCADO (4 COLS)</span>
                          <span>167 mm</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 my-auto opacity-70">
                          <div className="h-20 bg-cyan-200 rounded-xs"></div>
                          <div className="h-20 bg-cyan-200 rounded-xs"></div>
                          <div className="h-20 bg-cyan-200 rounded-xs"></div>
                          <div className="h-20 bg-cyan-200 rounded-xs"></div>
                        </div>
                        <span className="text-[8px] font-fago text-cyan-700 text-center">
                          Avance 20% Obra Mercado
                        </span>
                      </div>
                      <div className="bg-amber-100/60 border border-amber-300 rounded p-2 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[9px] font-mono-code text-amber-800 font-bold">
                          <span>TURISMO (2 COLS)</span>
                          <span>81 mm</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 my-auto opacity-70">
                          <div className="h-20 bg-amber-200 rounded-xs"></div>
                          <div className="h-20 bg-amber-200 rounded-xs"></div>
                        </div>
                        <span className="text-[8px] font-fago text-amber-700 text-center">
                          Bitácora de Oro + 85% Hotel
                        </span>
                      </div>
                    </>
                  ) : activePreset === 2 ? (
                    <>
                      <div className="bg-purple-100/60 border border-purple-300 rounded p-2 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[9px] font-mono-code text-purple-800 font-bold">
                          <span>COLUMNA IZQ (3 COLS)</span>
                          <span>124 mm</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 my-auto opacity-70">
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                        </div>
                        <span className="text-[8px] font-fago text-purple-700 text-center">
                          Artículo A (Pág. 15 / 36)
                        </span>
                      </div>
                      <div className="bg-purple-100/60 border border-purple-300 rounded p-2 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[9px] font-mono-code text-purple-800 font-bold">
                          <span>COLUMNA DER (3 COLS)</span>
                          <span>124 mm</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 my-auto opacity-70">
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                          <div className="h-20 bg-purple-200 rounded-xs"></div>
                        </div>
                        <span className="text-[8px] font-fago text-purple-700 text-center">
                          Artículo B (Pág. 15 / 36)
                        </span>
                      </div>
                    </>
                  ) : (
                    Array.from({ length: 6 }).map((_, colI) => (
                      <div
                        key={colI}
                        className="bg-neutral-200/70 border border-dashed border-neutral-300 rounded p-1 flex flex-col justify-between"
                      >
                        <span className="text-[9px] font-mono-code text-neutral-500 text-center font-bold">
                          C{colI + 1}
                        </span>
                        <div className="space-y-1 my-auto opacity-70">
                          <div className="h-1 bg-neutral-400 rounded-xs"></div>
                          <div className="h-1 bg-neutral-300 rounded-xs"></div>
                          <div className="h-1 bg-neutral-300 rounded-xs w-4/5"></div>
                        </div>
                        <span className="text-[8px] font-mono-code text-neutral-400 text-center">
                          38 mm
                        </span>
                      </div>
                    ))
                  )}
                </div>

                {/* Nota al pie */}
                <div className="mt-3 text-[9px] font-fago text-neutral-400 text-center uppercase tracking-wider">
                  Página Impar (Recto) • Folio Saliente (14 mm)
                </div>
              </div>
            )}

          </div>
        </div>
        <p className="text-xs text-neutral-400 text-center mt-4 font-fago">
          * Diagrama métrico interactivo: retícula maestra de 6 columnas de 38 mm con compensación de lomo de 3 mm en el pliegue central.
        </p>
      </div>

      {/* Análisis Crítico y Técnico de los Tres Aspectos de Retícula */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* A. Sistema de Columnas */}
        <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bitter text-xs font-bold">
              A
            </span>
            <h3 className="font-bitter font-bold text-neutral-900 text-base">
              Retícula Maestra de 6 Columnas
            </h3>
          </div>
          <ul className="text-xs font-fago text-neutral-700 space-y-2.5 leading-relaxed">
            <li>
              <strong className="text-neutral-900">Eje Unificado de SEIS (6) Columnas:</strong> Constituye la matriz geométrica absoluta de <em>El Tribuno</em> en todo su tiraje. Cada columna mide <strong>38.0 mm</strong> con medianiles de <strong>4.8 a 5.0 mm</strong> sobre la mancha útil de 254 mm.
            </li>
            <li>
              <strong className="text-neutral-900">Modulación Asimétrica 4 + 2:</strong> Es la fórmula predilecta del diario para jerarquizar: 4 columnas (167 mm) para la historia dominante y 2 columnas (81 mm) para la nota complementaria o recuadro de citas (Pág. 3, Pág. 13, Pág. 35).
            </li>
            <li>
              <strong className="text-neutral-900">Bipartición Simétrica 3 + 3:</strong> Divide la plana en mitades exactas de 124 mm para confrontar dos noticias de igual relevancia (Pág. 15, Pág. 36, Pág. 5).
            </li>
            <li>
              <strong className="text-neutral-900">6 Columnas Puras de Texto:</strong> Empleadas tanto en crónicas densas a plana completa (Pág. 12 Operativo droga, Pág. 6 Conferencia) como en Clasificados y Edictos judiciales (Págs. 18 a 21).
            </li>
          </ul>
        </div>

        {/* B. Márgenes y Lomo (Pares vs Impares) */}
        <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bitter text-xs font-bold">
              B
            </span>
            <h3 className="font-bitter font-bold text-neutral-900 text-base">
              Márgenes y Lomo Asimétricos
            </h3>
          </div>
          <ul className="text-xs font-fago text-neutral-700 space-y-2.5 leading-relaxed">
            <li>
              <strong className="text-neutral-900">Páginas Pares (Izquierdas):</strong> Margen exterior izquierdo de 14 mm (área de agarre manual); margen interior derecho de 11 mm.
            </li>
            <li>
              <strong className="text-neutral-900">Páginas Impares (Derechas):</strong> Margen interior izquierdo de 11 mm; margen exterior derecho de 14 mm.
            </li>
            <li>
              <strong className="text-neutral-900">Regla de Compensación de Curvatura:</strong> El diferencial de 3 mm garantiza que cuando el lector abre el ejemplar impreso, la suma de ambos márgenes interiores (11 + 11 = 22 mm) aparente visualmente el mismo blanco de respiración que los 14 mm exteriores.
            </li>
          </ul>
        </div>

        {/* C. Espacios en blanco y Flujo de Lectura */}
        <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bitter text-xs font-bold">
              C
            </span>
            <h3 className="font-bitter font-bold text-neutral-900 text-base">
              Espacio en Blanco & Ritmo
            </h3>
          </div>
          <ul className="text-xs font-fago text-neutral-700 space-y-2.5 leading-relaxed">
            <li>
              <strong className="text-neutral-900">Respiración Vertical Pautada:</strong> Separación fija de 12–16 pt entre el antetítulo, el titular y la bajada.
            </li>
            <li>
              <strong className="text-neutral-900">Intercolumnios (Gutters):</strong> Fijos en 5 mm. Se omiten filetes verticales separadores, dejando que el blanco natural ordene la vista.
            </li>
            <li>
              <strong className="text-neutral-900">Flujo Modular y Enfoque Z:</strong> La mirada ingresa por el titular superior izquierdo (que suele cruzar de 3 a 6 columnas), escanea la bajada, choca con la fotografía y desciende ordenadamente por las columnas.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
