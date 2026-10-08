import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { GridSystemSection } from './components/GridSystemSection';
import { TypometrySection } from './components/TypometrySection';
import { SectionsArchitecture } from './components/SectionsArchitecture';
import { GraphicElementsSection } from './components/GraphicElementsSection';
import { EditorialFlowSection } from './components/EditorialFlowSection';
import { InteractiveSpreadViewer } from './components/InteractiveSpreadViewer';
import { TechnicalDocumentView } from './components/TechnicalDocumentView';
import { BRAND_IDENTITY } from './data/editorialGuidelines';
import { ElTribunoLogo } from './components/ElTribunoLogo';
import { BookOpen, FileCheck, Layers, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('grid');
  const pdfExportFnRef = useRef<(() => void) | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTriggerPdfExport = () => {
    scrollToSection('doc');
    // Allow smooth scroll before triggering canvas render
    setTimeout(() => {
      if (pdfExportFnRef.current) {
        pdfExportFnRef.current();
      }
    }, 350);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA]/60 text-neutral-900 font-fago selection:bg-cyan-500 selection:text-white">
      {/* Header Fijo */}
      <Header
        activeSection={activeSection}
        onSelectSection={(id) => scrollToSection(id)}
        onOpenDoc={() => scrollToSection('doc')}
        onExportPdf={handleTriggerPdfExport}
      />

      {/* Hero / Presentación de la Dirección de Arte */}
      <section className="bg-white border-b border-neutral-200/90 py-10 px-4 sm:px-6 no-print">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300/80 text-neutral-800 text-xs font-fago font-bold uppercase rounded-full">
                <FileCheck className="w-3.5 h-3.5 text-cyan-700" />
                Informe Técnico Pericial • Dirección de Arte & UX/UI Editorial
              </div>
              <h1 className="text-3xl sm:text-5xl font-bitter font-black text-neutral-900 tracking-tight leading-tight">
                Manual de Estilo y Diagramación: <br className="hidden sm:inline" />
                <span className="text-[#002D62]">El Tribuno de Salta</span>
              </h1>
              <p className="text-sm sm:text-base font-fago text-neutral-600 leading-relaxed">
                Ingeniería inversa rigurosa basada en el ejemplar del <strong>28 de noviembre de 2025</strong> (40 páginas analizadas) y las familias maestras confirmadas: <strong>Bitter</strong> (Slab Serif para titulares y texto corrido) y <strong>Fago No</strong> (Grotesque Sans para copetes y destacados).
              </p>
            </div>

            {/* Ficha Rápida del Sistema */}
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-neutral-300 shadow-xs lg:w-80 shrink-0 space-y-3">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2">
                <span className="text-[10px] font-fago font-bold uppercase tracking-wider text-neutral-500">
                  Parámetros Clave
                </span>
                <span className="text-[10px] font-mono-code text-cyan-700 font-bold">
                  280 × 400 mm
                </span>
              </div>
              <div className="space-y-2 text-xs font-fago">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Retícula Base:</span>
                  <strong className="text-cyan-700 font-mono-code font-bold">6 Columnas (38 mm)</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Medianil (Gutter):</span>
                  <strong className="text-neutral-900 font-mono-code">5 mm (14 px)</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Lomo vs. Exterior:</span>
                  <strong className="text-neutral-900 font-mono-code">11 mm / 14 mm</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Tipografía Titular:</span>
                  <strong className="text-[#002D62] font-bitter font-bold">Bitter Bold</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-500">Tipografía Copetes:</span>
                  <strong className="text-neutral-900 font-fago font-bold">Fago No Medium</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenedor Principal de Secciones */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        
        {/* Sección 1: Retícula */}
        <div id="grid">
          <GridSystemSection />
        </div>

        {/* Sección 2: Tipometría */}
        <div id="typo">
          <TypometrySection />
        </div>

        {/* Sección 3: Arquitectura por Secciones */}
        <div id="sections">
          <SectionsArchitecture />
        </div>

        {/* Sección 4: Elementos Gráficos & Fotos */}
        <div id="graphics">
          <GraphicElementsSection />
        </div>

        {/* Sección 5: Flujo Editorial & Foliación */}
        <div id="flow">
          <EditorialFlowSection />
        </div>

        {/* Sección 6: Simulador Front-End de Plana */}
        <div id="simulator">
          <InteractiveSpreadViewer />
        </div>

        {/* Sección 7: Documento Formal Técnico Completo */}
        <div id="doc">
          <TechnicalDocumentView
            registerPdfExport={(fn) => {
              pdfExportFnRef.current = fn;
            }}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white mt-16 py-12 px-4 sm:px-6 border-t border-neutral-800 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ElTribunoLogo variant="white" showSubtitle={true} />
          </div>

          <p className="text-xs font-fago text-neutral-400 text-center sm:text-right">
            Manual de Estilo y Diagramación elaborado bajo directrices de Dirección de Arte Editorial y UX/UI.<br />
            Tipografías del sistema: Bitter (Sol Matas) & Fago No (Ole Schäfer).
          </p>
        </div>
      </footer>
    </div>
  );
}
