import { ArrowRight, Dna, Network, Cpu, Microscope, Activity, FlaskConical, Brain, Globe, BookOpen } from 'lucide-react';
import { SCIENTIFIC_DIVISIONS, ScientificDivision } from '../data/scientificData';

interface ScientificDivisionsSectionProps {
  onSelectDivision: (division: ScientificDivision) => void;
}

export function ScientificDivisionsSection({ onSelectDivision }: ScientificDivisionsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return <Dna className="w-6 h-6" />;
      case 'Network': return <Network className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Microscope': return <Microscope className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Brain': return <Brain className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      default: return <Dna className="w-6 h-6" />;
    }
  };

  return (
    <section id="divisions" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
              <span>RESEARCH ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Scientific Divisions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Eight dedicated scientific departments advancing experimental discovery, structural biology, and translational bio-engineering.
            </p>
          </div>
          <div className="text-xs font-mono text-cyan-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 self-start md:self-auto">
            08 Dedicated Portals • Fully Documented
          </div>
        </div>

        {/* Divisions Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SCIENTIFIC_DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="bg-slate-900/50 hover:bg-slate-900/80 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              {/* Image banner with overlay */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={div.image}
                  alt={div.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300">
                    DIVISION {div.number}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  {getIcon(div.iconName)}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {div.name}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                    {div.heroHeadline}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {div.overview}
                  </p>

                  {/* Research Topics Preview */}
                  <div className="mt-5">
                    <div className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5">
                      Key Research Topics:
                    </div>
                    <ul className="space-y-1.5">
                      {div.researchTopics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          <span className="line-clamp-1">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{div.keyConcepts.length} Educational Concepts</span>
                  </div>

                  <button
                    onClick={() => onSelectDivision(div)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold tracking-wide transition-all cursor-pointer"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
