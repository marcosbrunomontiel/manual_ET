import React, { useState } from 'react';
import { GRAPHIC_ELEMENTS_DATA } from '../data/editorialGuidelines';
import { Sparkles, Sliders, Image as ImageIcon, Minus, Square, AlignLeft, Info } from 'lucide-react';

export const GraphicElementsSection: React.FC = () => {
  const [activePhotoRatio, setActivePhotoRatio] = useState<string>('3:2');

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-800 text-xs font-fago font-bold uppercase rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Punto 4 • Elementos Gráficos & Fotografía
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            4. Elementos Gráficos, Misceláneas y Fotografía
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Catálogo morfológico de filetes, corondeles, viñetas cromáticas, letras capitulares y protocolos de encuadre, proporción y sangrado de imágenes periodísticas.
          </p>
        </div>
      </div>

      {/* Grid de Misceláneas Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* 1. Filetes y Corondeles */}
        <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bitter font-bold text-sm mb-3">
              <Minus className="w-4 h-4 text-cyan-600" />
              Filetes y Corondeles
            </div>
            <div className="space-y-3 text-xs font-fago text-neutral-700">
              <div>
                <span className="font-mono-code text-[10px] text-neutral-500 block">Filete Cornisa (0.75 pt)</span>
                <div className="h-[1px] bg-neutral-900 my-1"></div>
                <span className="text-[11px] text-neutral-600">Alineado a cabecera</span>
              </div>
              <div>
                <span className="font-mono-code text-[10px] text-neutral-500 block">Filete Separador (0.5 pt)</span>
                <div className="h-[0.5px] bg-neutral-400 my-1"></div>
                <span className="text-[11px] text-neutral-600">Fin de noticia / Inicio de módulo</span>
              </div>
              <div>
                <span className="font-mono-code text-[10px] text-neutral-500 block">Filete de Cita (3 pt)</span>
                <div className="h-[3px] bg-cyan-600 my-1"></div>
                <span className="text-[11px] text-neutral-600">Acento superior en declaraciones</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] font-fago text-neutral-400 mt-3 pt-2 border-t border-neutral-200">
            * Corondeles verticales: solo en 6 cols de clasificados.
          </div>
        </div>

        {/* 2. Viñetas (Bullets de Copete) */}
        <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bitter font-bold text-sm mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
              Viñetas de Copete (Bullets)
            </div>
            <p className="text-xs font-fago text-neutral-600 mb-3">
              Punto esférico macizo de <strong>5 pt</strong> ubicado al arranque de cada oración de bajada o sumario:
            </p>
            <div className="space-y-2 text-xs font-fago">
              <div className="flex items-start gap-2 bg-white p-2 rounded border border-neutral-200">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0 mt-0.5"></span>
                <span className="text-neutral-800 text-[11px] leading-tight font-medium">
                  La Unión Industrial advierte por la caída de actividad...
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white p-2 rounded border border-neutral-200">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0 mt-0.5"></span>
                <span className="text-neutral-800 text-[11px] leading-tight font-medium">
                  El DT le comunicó a varios jugadores que no seguirán...
                </span>
              </div>
            </div>
          </div>
          <div className="text-[10px] font-fago text-neutral-400 mt-3 pt-2 border-t border-neutral-200">
            * Nunca usar guiones planos ni flechas en copetes formales.
          </div>
        </div>

        {/* 3. Letras Capitulares (Drop Caps) */}
        <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bitter font-bold text-sm mb-3">
              <AlignLeft className="w-4 h-4 text-cyan-600" />
              Letras Capitulares
            </div>
            <p className="text-xs font-fago text-neutral-600 mb-2">
              Uso riguroso en crónicas de fondo y columnas de opinión (Págs. 8, 16, 17):
            </p>
            <div className="bg-white p-2.5 rounded border border-neutral-200">
              <p className="font-bitter text-xs text-neutral-800 leading-snug drop-cap">
                n la mina de cobre Kansanshi, en Solwezi, un argentino de 45 años ocupa un rol clave como superintendente de Mantenimiento en la planta de First Quantum...
              </p>
            </div>
          </div>
          <div className="text-[10px] font-fago text-neutral-400 mt-3 pt-2 border-t border-neutral-200">
            * 3 a 4 líneas de caja en Bitter Extra Bold 800.
          </div>
        </div>

        {/* 4. Cajas y Módulos Notariales */}
        <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-neutral-900 font-bitter font-bold text-sm mb-3">
              <Square className="w-4 h-4 text-cyan-600" />
              Cajas de Color & Notariales
            </div>
            <div className="space-y-2">
              {/* Tarjeta Edictos */}
              <div className="border border-neutral-900 rounded overflow-hidden">
                <div className="bg-neutral-900 text-white font-bitter font-bold text-[9px] uppercase tracking-wider py-1 px-2 text-center">
                  SUBASTA JUDICIAL ELECTRÓNICA
                </div>
                <div className="p-2 bg-white text-[8px] font-bitter text-neutral-700 leading-tight">
                  Juzgado de Concursos y Quiebras • Dr. Eduardo Guidoni...
                </div>
              </div>
              {/* Tarjeta Cita Declaración */}
              <div className="border-l-3 border-cyan-600 bg-white p-2 rounded-r shadow-2xs">
                <span className="text-[8px] font-fago font-bold text-cyan-800 uppercase block">
                  Pedro Pittaluga • U.I.S.
                </span>
                <span className="text-[10px] font-fago italic text-neutral-800">
                  “Trabajar en la microeconomía...”
                </span>
              </div>
            </div>
          </div>
          <div className="text-[10px] font-fago text-neutral-400 mt-3 pt-2 border-t border-neutral-200">
            * Prohibidas las esquinas redondeadas en notas judiciales.
          </div>
        </div>

      </div>

      {/* Protocolo de Tratamiento Fotográfico e Imágenes */}
      <div className="bg-neutral-900 rounded-xl p-6 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-neutral-800 rounded-lg text-cyan-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bitter font-bold text-lg text-white">
                Tratamiento Fotográfico y Encuadres
              </h3>
              <p className="text-xs font-fago text-neutral-400">
                Reglas formales de proporciones, relación de aspecto, sangrado y créditos de autoría.
              </p>
            </div>
          </div>

          {/* Selector de Aspect Ratio interactivo */}
          <div className="flex items-center gap-1.5 bg-neutral-800 p-1 rounded-lg text-xs font-fago">
            <span className="text-neutral-400 px-2 text-[11px] font-bold">Relación:</span>
            {['3:2', '4:5', '1:1'].map((ratio) => (
              <button
                key={ratio}
                onClick={() => setActivePhotoRatio(ratio)}
                className={`px-2.5 py-1 rounded-md font-mono-code transition-all ${
                  activePhotoRatio === ratio
                    ? 'bg-cyan-500 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {ratio}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Visual del Tratamiento de Imagen y Epígrafe */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          {/* Mockup de Imagen con Epígrafe */}
          <div className="lg:col-span-2 bg-neutral-800 p-4 rounded-xl border border-neutral-700">
            <div className="relative overflow-hidden bg-neutral-950 border border-neutral-700">
              <div
                className={`w-full bg-gradient-to-tr from-neutral-800 via-neutral-700 to-neutral-800 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ${
                  activePhotoRatio === '3:2'
                    ? 'aspect-3/2'
                    : activePhotoRatio === '4:5'
                    ? 'aspect-4/5 max-h-[300px]'
                    : 'aspect-square max-h-[300px]'
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-neutral-900/80 border border-neutral-600 flex items-center justify-center text-cyan-400 mb-2">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <span className="font-bitter font-bold text-sm text-neutral-200">
                  Encuadre Periodístico Ortogonal • Relación {activePhotoRatio}
                </span>
                <span className="text-xs font-mono-code text-cyan-400 mt-1">
                  Caja neta sin marco ornamental • Esquinas ortogonales a 90°
                </span>
              </div>
            </div>

            {/* Epígrafe Formal Inmediatamente al Pie */}
            <div className="mt-2 text-left bg-neutral-850 p-2 border-t border-neutral-700">
              <p className="font-fago text-xs text-neutral-300 leading-snug">
                Daniel Coronel muestra una camiseta de Messi con la fábrica de cobre de fondo en la provincia de Solwezi, Zambia.
                <span className="font-mono-code text-[10px] text-cyan-400 font-bold uppercase ml-1.5">
                  FOTO: PABLO JUÁREZ / ENVIADO ESPECIAL
                </span>
              </p>
            </div>
          </div>

          {/* Parámetros Normativos */}
          <div className="space-y-4 text-xs font-fago">
            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700">
              <span className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                A. Sangrado al Corte vs. Cajas
              </span>
              <p className="text-neutral-300 leading-relaxed">
                El sangrado total (bleed de 3 a 5 mm en corte guillotinado) se reserva exclusivamente para <strong>Portadas de impacto</strong> (Pág. 1) y <strong>Aperturas de Deportes</strong> (Pág. 33). En páginas interiores (90% del periódico), la imagen <strong>nunca sangra</strong>: queda rigurosamente confinada al ancho modular de 2, 3 o 5 columnas.
              </p>
            </div>

            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700">
              <span className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                B. Tratamiento de Retratos
              </span>
              <p className="text-neutral-300 leading-relaxed">
                Los retratos testimoniales ('bustos parlantes' de entrevistados) tienen un ancho de <strong>1 o 2 columnas</strong> en proporción <strong>4:5</strong>, recortados o enmarcados sin viñeteados suaves ni sombras degradadas.
              </p>
            </div>

            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700">
              <span className="text-cyan-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                C. Epígrafes y Créditos
              </span>
              <p className="text-neutral-300 leading-relaxed">
                Siempre en <strong>Fago No Regular 8 pt</strong> con interlineado de 10 pt. El crédito de autor o agencia informativa (<em>EFE, NA, Archivo, Instagram</em>) se añade al final en mayúsculas o caja alta sin paréntesis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
