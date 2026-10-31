import { Cpu, CheckCircle2, Sparkles, Layers, Sliders } from 'lucide-react';
import { SCIENTIFIC_INNOVATIONS } from '../data/scientificData';

export function InnovationsSection() {
  return (
    <section id="innovations" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TECHNOLOGICAL BREAKTHROUGHS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technology Transforming Life Sciences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Next-generation molecular instruments, machine learning protein folds, and robotic automation accelerating fundamental biology.
          </p>
        </div>

        {/* Innovations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCIENTIFIC_INNOVATIONS.map((tech) => (
            <div
              key={tech.id}
              className="bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border ${tech.badgeColor}`}>
                    {tech.tag}
                  </span>
                  <Sliders className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {tech.summary}
                </p>

                {/* Scientific Significance */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-cyan-200/90 leading-relaxed">
                  <span className="text-cyan-400 font-bold font-mono">Significance: </span>
                  {tech.significance}
                </div>

                {/* Practical Application */}
                <div className="mt-3 text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-300 font-semibold">Practical Application: </span>
                  {tech.practicalApplication}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="text-[10px] font-mono uppercase text-slate-400 mb-2">
                  Technical Benchmarks
                </div>
                <div className="space-y-1.5">
                  {tech.keySpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">{spec.label}:</span>
                      <span className="font-mono text-cyan-300 font-medium">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
