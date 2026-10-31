import { ArrowRight, Dna, Network, Cpu, Microscope, Activity, FlaskConical, Brain, Globe } from 'lucide-react';
import { SCIENTIFIC_DIVISIONS, ScientificDivision } from '../data/scientificData';

interface ScientificDiscoveryProps {
  onSelectDivision: (division: ScientificDivision) => void;
}

export function ScientificDiscovery({ onSelectDivision }: ScientificDiscoveryProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return <Dna className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Microscope': return <Microscope className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Dna className="w-5 h-5" />;
    }
  };

  return (
    <section id="discover" className="py-24 bg-[#030712] relative border-t border-slate-900">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono mb-3">
            <span>FOUNDATIONAL SCIENTIFIC DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Discover the Science of Life
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Explore the fundamental sciences that explain living systems, biological processes, and the future of scientific discovery.
          </p>
        </div>

        {/* 8 Scientific Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCIENTIFIC_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="group flex flex-col justify-between bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-cyan-950/30 hover:-translate-y-1"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={division.image}
                  alt={division.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                  DIV {division.number}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
                  {getIcon(division.iconName)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {division.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {division.shortDesc}
                  </p>
                </div>

                {/* Explore Button */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    {division.disciplines.length} Disciplines
                  </span>
                  <button
                    onClick={() => onSelectDivision(division)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 hover:underline cursor-pointer"
                    aria-label={`Explore ${division.name}`}
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
