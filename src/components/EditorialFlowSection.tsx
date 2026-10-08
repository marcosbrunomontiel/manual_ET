import React, { useState } from 'react';
import { EDITORIAL_FLOW_DATA } from '../data/editorialGuidelines';
import { RefreshCw, GitFork, Compass, ArrowRight, CornerDownRight, FileText } from 'lucide-react';

export const EditorialFlowSection: React.FC = () => {
  const [activeFoliationTab, setActiveFoliationTab] = useState<'even' | 'odd'>('even');

  return (
    <section className="bg-white rounded-2xl border border-neutral-200/80 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-fago font-bold uppercase rounded-full mb-2">
            <RefreshCw className="w-3.5 h-3.5" />
            Punto 5 • Flujo Editorial & Foliación
          </div>
          <h2 className="text-2xl sm:text-3xl font-bitter font-extrabold text-neutral-900 tracking-tight">
            5. Comportamiento del Flujo Editorial y Foliación
          </h2>
          <p className="text-sm font-fago text-neutral-600 mt-1 max-w-2xl">
            Protocolo de continuidad gráfica, política de autonomía de plana (Zero-jump policy), remisiones desde portada y rotación simétrica de folios entre <strong>página par (verso)</strong> e <strong>impar (recto)</strong>.
          </p>
        </div>
      </div>

      {/* 1. Sistema de Foliación: Interactivo Par vs Impar */}
      <div className="bg-neutral-900 rounded-xl p-6 text-white space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <h3 className="font-bitter font-bold text-base text-white">
              Anatomía de la Cornisa Superior y Foliación
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-neutral-800 p-1 rounded-lg text-xs font-fago">
            <button
              onClick={() => setActiveFoliationTab('even')}
              className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                activeFoliationTab === 'even'
                  ? 'bg-cyan-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Página Par (Izquierda / 2, 4, 6...)
            </button>
            <button
              onClick={() => setActiveFoliationTab('odd')}
              className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                activeFoliationTab === 'odd'
                  ? 'bg-cyan-500 text-neutral-950 shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Página Impar (Derecha / 3, 5, 7...)
            </button>
          </div>
        </div>

        {/* Muestra interactiva de la cabecera real según la página */}
        <div className="bg-[#FAF8F5] text-neutral-900 p-6 rounded-xl border border-neutral-700 shadow-inner">
          <div className="text-[10px] font-mono-code text-neutral-500 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>
              {activeFoliationTab === 'even'
                ? 'Cabecera de Página Par (Verso) • Margen Izquierdo Exterior'
                : 'Cabecera de Página Impar (Recto) • Margen Derecho Exterior'}
            </span>
            <span className="text-cyan-700 font-bold">
              Filete Superior de 0.75 pt
            </span>
          </div>

          {/* Banner de Cornisa */}
          {activeFoliationTab === 'even' ? (
            <div className="border-b border-neutral-900/80 pb-2 flex items-center justify-between font-fago">
              {/* Esquina Izquierda: Folio + Slash + Sección */}
              <div className="flex items-baseline gap-2">
                <span className="font-bitter font-black text-2xl text-neutral-900 leading-none">
                  2
                </span>
                <span className="text-neutral-400 font-light text-xl leading-none">/</span>
                <span className="font-bitter font-bold text-lg text-cyan-600 leading-none">
                  Salta
                </span>
              </div>

              {/* Esquina Derecha: Marca del Diario + Fecha */}
              <div className="text-right flex flex-col items-end">
                <span className="font-bitter font-black text-sm tracking-tight text-[#002D62] leading-tight">
                  El Tribuno
                </span>
                <span className="text-[10px] font-fago text-neutral-500 leading-tight">
                  Viernes 28 de noviembre de 2025
                </span>
              </div>
            </div>
          ) : (
            <div className="border-b border-neutral-900/80 pb-2 flex items-center justify-between font-fago">
              {/* Esquina Izquierda: Marca del Diario + Fecha */}
              <div className="text-left flex flex-col items-start">
                <span className="font-bitter font-black text-sm tracking-tight text-[#002D62] leading-tight">
                  El Tribuno
                </span>
                <span className="text-[10px] font-fago text-neutral-500 leading-tight">
                  Viernes 28 de noviembre de 2025
                </span>
              </div>

              {/* Esquina Derecha: Sección con Slash + Folio Saliente */}
              <div className="flex items-baseline gap-2">
                <span className="font-bitter font-bold text-lg text-cyan-600 leading-none">
                  Salta/
                </span>
                <span className="font-bitter font-black text-2xl text-neutral-900 leading-none">
                  3
                </span>
              </div>
            </div>
          )}

          {/* Explicación de UX y Lectura Háptica */}
          <div className="mt-4 p-3 bg-neutral-100 rounded-lg text-xs font-fago text-neutral-700 leading-relaxed">
            <strong className="text-neutral-900">Fundamento UX de la Foliación Asimétrica:</strong> Al hojear físicamente un periódico o revista en formato impreso (y en visores de doble página digital), el lector sostiene el diario con la mano izquierda y desliza las páginas con el <strong>pulgar derecho</strong> sobre la esquina superior derecha exterior. Por esta razón, el número de página impar (pág. 3, 5, 7, etc.) y la sección deben ubicarse obligatoriamente en el extremo derecho para una identificación inmediata durante el hojeo veloz.
          </div>
        </div>
      </div>

      {/* 2. Flujo Editorial: Saltos de Texto vs. Autonomía Modular */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* A. Autonomía de Plana */}
        <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-cyan-100 text-cyan-800 rounded-lg">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="font-bitter font-bold text-neutral-900 text-base">
              Principio de Plana Autoconclusiva
            </h4>
          </div>
          <p className="text-xs font-fago text-neutral-700 leading-relaxed">
            A diferencia de los diarios clásicos de principios del siglo XX que dispersaban historias con notas incompletas enviadas a páginas interiores, <strong>El Tribuno implementa una estricta política de autonomía modular:</strong>
          </p>
          <ul className="text-xs font-fago text-neutral-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 font-bold">•</span>
              <span><strong>Cero saltos internos largos:</strong> Más del 95% de los artículos empiezan y concluyen en la misma plana.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-600 font-bold">•</span>
              <span><strong>Despiece satélite (Sidebar):</strong> Si una noticia es muy extensa, no se continúa en otra página; se divide en un artículo principal y recuadros temáticos secundarios ('Waze para el monitoreo', 'Controles a motociclistas', 'Salud mental').</span>
            </li>
          </ul>
        </div>

        {/* B. Remisiones desde Portada */}
        <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 space-y-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
              <CornerDownRight className="w-4 h-4" />
            </div>
            <h4 className="font-bitter font-bold text-neutral-900 text-base">
              Remisiones de Portada (Jump Callouts)
            </h4>
          </div>
          <p className="text-xs font-fago text-neutral-700 leading-relaxed">
            En la Portada (Página 1), cada bloque de noticia secundaria incluye su etiqueta de remisión explícita en caja alta compacta:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono-code font-bold">
            <div className="p-2 bg-white rounded border border-neutral-200 text-cyan-700">
              SALTA: 2
            </div>
            <div className="p-2 bg-white rounded border border-neutral-200 text-red-600">
              DEPORTES: 33
            </div>
            <div className="p-2 bg-white rounded border border-neutral-200 text-sky-800">
              POLICIAL: 13
            </div>
            <div className="p-2 bg-white rounded border border-neutral-200 text-cyan-700">
              SALTA: 3
            </div>
          </div>
          <p className="text-[11px] font-fago text-neutral-500">
            Formato: <code>[SECCIÓN]: [PÁGINA]</code> en Fago No Bold, tamaño 9–10 pt, con espaciado entre caracteres expandido (+0.05em).
          </p>
        </div>

      </div>

    </section>
  );
};
