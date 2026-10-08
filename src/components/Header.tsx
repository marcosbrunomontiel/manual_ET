import React from 'react';
import { ElTribunoLogo } from './ElTribunoLogo';
import { FileText, LayoutGrid, Type, Layers, Sparkles, RefreshCw, Eye, BookOpen, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
  onOpenDoc: () => void;
  onExportPdf?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onSelectSection,
  onOpenDoc,
  onExportPdf
}) => {
  const navItems = [
    { id: 'grid', label: '1. Retícula & Grilla', icon: LayoutGrid },
    { id: 'typo', label: '2. Tipometría (Bitter/Fago)', icon: Type },
    { id: 'sections', label: '3. Arquitectura Secciones', icon: Layers },
    { id: 'graphics', label: '4. Elementos & Fotografía', icon: Sparkles },
    { id: 'flow', label: '5. Flujo & Foliación', icon: RefreshCw },
    { id: 'simulator', label: 'Maqueta Front-End', icon: Eye },
    { id: 'doc', label: 'Manual Formal', icon: FileText, highlight: true },
  ];

  const handleHeaderPdfClick = () => {
    if (onExportPdf) {
      onExportPdf();
    } else {
      onOpenDoc();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-2xs no-print">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <ElTribunoLogo showSubtitle={true} />
          <div className="hidden md:flex flex-col pl-4 border-l border-neutral-200 text-left">
            <span className="text-[11px] font-fago font-bold uppercase tracking-wider text-neutral-900">
              Manual de Estilo y Diagramación
            </span>
            <span className="text-[10px] font-mono-code text-cyan-700">
              Brandbook • UX/UI & Dirección de Arte
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-xs font-mono-code border border-neutral-200 hidden sm:inline-block">
            Formato: Tabloide 280×400mm
          </span>
          <button
            onClick={handleHeaderPdfClick}
            className="px-4 py-2 bg-gradient-to-r from-[#002D62] via-[#083369] to-[#0D4080] hover:from-[#001E42] hover:to-[#002D62] text-white rounded-xl text-xs font-fago font-bold transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md ring-2 ring-[#002D62]/25 active:scale-[0.98] cursor-pointer"
            title="Exportar el Manual Técnico completo a archivo PDF con jsPDF"
          >
            <Download className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>Exportar Manual PDF</span>
          </button>
        </div>
      </div>

      {/* Navegación por Pestañas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none text-xs font-fago">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`px-3 py-2 rounded-xl font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : item.highlight
                    ? 'bg-cyan-50 text-cyan-800 border border-cyan-200 hover:bg-cyan-100'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
