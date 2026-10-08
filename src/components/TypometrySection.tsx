import React, { useState } from 'react';
import { TYPOMETRY_TABLE, BRAND_IDENTITY } from '../data/editorialGuidelines';
import { Type, Sparkles, Copy, Check, SlidersHorizontal, BookOpen } from 'lucide-react';

export const TypometrySection: React.FC = () => {
  const [filterFamily, setFilterFamily] = useState<string>('all');
  const [testText, setTestText] = useState<string>(
    'Industrias de Salta buscan sostener el empleo'
  );
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredTokens = TYPOMETRY_TABLE.filter((t) => {
    if (filterFamily === 'all') return true;
    if (filterFamily === 'bitter') return t.fontFamily.includes('Bitter');
    if (filterFamily === 'fago') return t.fontFamily.includes('Fago');
    return true;
  });

  const handleCopyCss = (token: typeof TYPOMETRY_TABLE[0], index: number) => {
    const css = `/* ${token.role} */
font-family: ${token.fontFamily};
font-weight: ${token.weight};
font-size: ${token.sizePt} (${token.sizePx});
line-height: ${token.leading};
letter-spacing: ${token.tracking};
color: ${token.color.split(' ')[0]};`;
    navigator.clipboard.writeText(css);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-fago font-bold uppercase rounded-full mb-2">
            <Type className="w-3.5 h-3.5" />
            Punto 2 • Tipometría Editorial
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            2. Jerarquía Tipográfica (Tipometría)
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Ingeniería inversa de la pareja tipográfica fundacional de <strong>El Tribuno</strong>: <strong>Bitter</strong> (Slab Serif) y <strong>Fago No</strong> (Grotesque Sans), con sus escalas métricas y reglas de interlineado.
          </p>
        </div>

        {/* Filtro por familia */}
        <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl border border-neutral-200 text-xs font-fago">
          <button
            onClick={() => setFilterFamily('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterFamily === 'all'
                ? 'bg-white shadow-xs text-neutral-900 font-bold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Todas ({TYPOMETRY_TABLE.length})
          </button>
          <button
            onClick={() => setFilterFamily('bitter')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterFamily === 'bitter'
                ? 'bg-white shadow-xs text-neutral-900 font-bold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Bitter (Slab)
          </button>
          <button
            onClick={() => setFilterFamily('fago')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              filterFamily === 'fago'
                ? 'bg-white shadow-xs text-neutral-900 font-bold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Fago No (Sans)
          </button>
        </div>
      </div>

      {/* Carteles de Especímenes Tipográficos Principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Espécimen Bitter */}
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/60 p-6 rounded-xl border border-neutral-200 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-fago font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/70 px-2.5 py-0.5 rounded-full">
                Familia Principal • Títulos y Cuerpo
              </span>
              <h3 className="text-xl font-bitter font-bold text-neutral-900 mt-1">
                Bitter (Sol Matas)
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-500">
              Slab Serif / Mecana
            </span>
          </div>

          <p className="text-xs font-fago text-neutral-600 mb-5 leading-relaxed">
            {BRAND_IDENTITY.coreTypography.primary.rationale}
          </p>

          {/* Muestra visual de Bitter */}
          <div className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-inner space-y-3">
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Bitter Bold (700)</div>
              <p className="font-bitter font-bold text-2xl text-[#002D62] tracking-tight">
                Esta es la familia principal para títulos
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Bitter Regular (400)</div>
              <p className="font-bitter text-sm text-neutral-800 leading-relaxed">
                El sector de cerámicas atraviesa uno de los momentos más críticos por las importaciones desde Brasil y la caída sostenida del consumo.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Bitter Italic (400i)</div>
              <p className="font-bitter italic text-xs text-neutral-600">
                "La industria resiste la crisis y se esfuerza para mantener el empleo"
              </p>
            </div>
          </div>
        </div>

        {/* Espécimen Fago No */}
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/60 p-6 rounded-xl border border-neutral-200 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-fago font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
                Familia Secundaria • Copetes y Destacados
              </span>
              <h3 className="text-xl font-fago font-bold text-neutral-900 mt-1">
                Fago No (Ole Schäfer)
              </h3>
            </div>
            <span className="text-xs font-mono-code text-neutral-500">
              Sans-Serif Grotesque
            </span>
          </div>

          <p className="text-xs font-fago text-neutral-600 mb-5 leading-relaxed">
            {BRAND_IDENTITY.coreTypography.secondary.rationale}
          </p>

          {/* Muestra visual de Fago */}
          <div className="bg-white p-4 rounded-lg border border-neutral-200/80 shadow-inner space-y-3">
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Fago No Bold (700)</div>
              <p className="font-fago font-bold text-xl text-[#002D62] tracking-tight">
                Esta es la familia tipográfica de uso secundario
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Fago No Medium / Copete con Bullet</div>
              <div className="flex items-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0 mt-1"></span>
                <p className="font-fago font-medium text-xs text-neutral-800 leading-normal">
                  La Unión Industrial advierte por la caída de la actividad, los altos costos, baja competitividad y falta de crédito.
                </p>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-neutral-400 mb-0.5">Fago No Italic (400i) / Citas</div>
              <p className="font-fago italic text-xs text-cyan-800">
                “Trabajar en la microeconomía es generar un desarrollo federal equilibrado y reducción del costo”.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Probador en vivo */}
      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center gap-3">
        <label className="text-xs font-fago font-bold text-neutral-700 whitespace-nowrap flex items-center gap-1.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-500" />
          Probar texto de titulares:
        </label>
        <input
          type="text"
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          placeholder="Escribe un titular periodístico..."
          className="w-full bg-white px-3 py-1.5 text-sm font-fago border border-neutral-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Tabla Exhaustiva de Jerarquías y Métricas */}
      <div className="overflow-x-auto rounded-xl border border-neutral-200">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-neutral-100/80 border-b border-neutral-200 font-fago font-bold text-neutral-700 uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-4">Rol Editorial</th>
              <th className="py-3.5 px-4">Familia & Clasificación</th>
              <th className="py-3.5 px-4">Peso</th>
              <th className="py-3.5 px-4">Tamaño (Pt / Px)</th>
              <th className="py-3.5 px-4">Interlineado (Leading)</th>
              <th className="py-3.5 px-4">Tracking</th>
              <th className="py-3.5 px-4">Color Base</th>
              <th className="py-3.5 px-4 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 font-fago">
            {filteredTokens.map((token, idx) => (
              <tr
                key={idx}
                className="hover:bg-neutral-50/80 transition-colors group"
              >
                <td className="py-3.5 px-4">
                  <div className="font-bold text-neutral-900 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-neutral-200 text-neutral-700 rounded text-[10px] font-mono-code">
                      {token.tag}
                    </span>
                    {token.role}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 max-w-xs">
                    {token.usageNotes}
                  </div>
                </td>

                <td className="py-3.5 px-4">
                  <span className={`font-semibold ${token.fontFamily.includes('Bitter') ? 'font-bitter text-[#002D62]' : 'font-fago text-neutral-800'}`}>
                    {token.fontFamily}
                  </span>
                  <div className="text-[10px] text-neutral-500">{token.classification}</div>
                </td>

                <td className="py-3.5 px-4 font-medium text-neutral-800">
                  {token.weight}
                </td>

                <td className="py-3.5 px-4 font-mono-code font-bold text-neutral-900">
                  {token.sizePt}
                  <span className="text-[10px] text-neutral-400 block font-normal">
                    {token.sizePx}
                  </span>
                </td>

                <td className="py-3.5 px-4 font-mono-code text-neutral-700">
                  {token.leading}
                </td>

                <td className="py-3.5 px-4 font-mono-code text-neutral-700">
                  {token.tracking}
                </td>

                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5 font-mono-code text-[11px]">
                    <span
                      className="w-3 h-3 rounded-full border border-neutral-300 shrink-0"
                      style={{
                        backgroundColor: token.color.includes('#002D62')
                          ? '#002D62'
                          : token.color.includes('#0F172A')
                          ? '#0F172A'
                          : '#111827'
                      }}
                    ></span>
                    <span className="truncate max-w-[90px]">{token.color.split(' ')[0]}</span>
                  </div>
                </td>

                <td className="py-3.5 px-4 text-right">
                  <button
                    onClick={() => handleCopyCss(token, idx)}
                    className="p-1.5 rounded-lg border border-neutral-200 text-neutral-600 hover:bg-white hover:text-neutral-900 transition-colors inline-flex items-center gap-1 text-[11px] font-fago"
                    title="Copiar token CSS"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>CSS</span>
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reglas Técnicas Obligatorias de Composición Tipográfica */}
      <div className="bg-neutral-900 text-neutral-200 p-6 rounded-xl border border-neutral-800">
        <h3 className="text-sm font-fago font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Reglas de Composición Tipográfica y Justificación
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-fago leading-relaxed">
          <div className="space-y-2">
            <p>
              <strong className="text-white">Justificación & Partición de Palabras (Hyphenation):</strong> En el cuerpo de texto corrido (Bitter 8.5–9.5 pt), el alineado justificado es estricto. El motor de maquetación debe tener activada la división silábica automática con un máximo de 2 guiones consecutivos para evitar "calles" o "ríos" blancos en columnas estrechas de 46 mm.
            </p>
            <p>
              <strong className="text-white">Tratamiento de Bajadas / Copetes:</strong> Siempre van precedidas por una viñeta esférica (bullet) de 5 pt en el color de la sección. La tipografía es Fago No Medium de 11–13 pt con interlineado del 140% para favorecer el escaneo rápido antes de profundizar en la noticia.
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <strong className="text-white">Letras Capitulares (Drop Caps):</strong> Se aplican exclusivamente en notas de autor, columnas de opinión o crónicas especiales (Págs. 8, 16, 17, 24). Ocupan exactamente 3 o 4 líneas de caja en Bitter Extra Bold 800, alineadas a la izquierda sin desbordar el margen.
            </p>
            <p>
              <strong className="text-white">Cifras Infográficas (Big Data Numbers):</strong> Las cifras estadísticas clave ("20 por ciento", "85 por ciento", "1.500 alumnos") se componen en cuerpo gigante (48–60 pt) en Fago o Bitter Bold, acompañadas de su bajada explicativa a dos líneas en Fago Regular 9 pt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
