import { useState } from 'react';
import { ExternalLink, Microscope, CheckCircle2, X, ChevronRight, Award } from 'lucide-react';
import { RESEARCH_PROJECTS, ResearchProject } from '../data/scientificData';

export function ResearchSection() {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Genetics', 'Cellular', 'Biomedical', 'Molecular', 'Biotech', 'Environmental'];

  const filteredProjects = activeCategoryFilter === 'All'
    ? RESEARCH_PROJECTS
    : RESEARCH_PROJECTS.filter((p) => p.badge.toLowerCase() === activeCategoryFilter.toLowerCase());

  return (
    <section id="research" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <Microscope className="w-3.5 h-3.5 text-cyan-400" />
            <span>FRONTIER SCIENTIFIC INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research Beyond Boundaries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Investigating foundational life-science challenges across genetic medicine, cryo-EM structural biochemistry, targeted nano-delivery, and deep biospheres.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategoryFilter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Research Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 hover:bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300 uppercase">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-slate-800/80 text-center">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="p-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                        <div className="text-xs font-mono font-bold text-cyan-400">{m.value}</div>
                        <div className="text-[9px] text-slate-400 truncate mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified academic citation & read more */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-800">
                  <span className="flex items-center gap-1 text-[11px] font-mono text-teal-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Peer-Reviewed</span>
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer"
                  >
                    <span>Read Summary</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Project */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-800/70 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-300">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3 leading-snug">
              {selectedProject.title}
            </h3>

            <div className="my-6 rounded-xl overflow-hidden h-48 border border-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">
                  Scientific Objective & Summary:
                </h4>
                <p>{selectedProject.summary}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 mb-1">
                  Experimental Methodology:
                </h4>
                <p>{selectedProject.methodology}</p>
              </div>

              {/* Verified Journal Citation Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-cyan-900/60 text-xs">
                <div className="flex items-center gap-1.5 text-teal-400 font-mono font-semibold mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Published Academic Source</span>
                </div>
                <div className="text-white font-medium">
                  {selectedProject.verifiedReference.journal} ({selectedProject.verifiedReference.year})
                </div>
                <div className="text-slate-400 font-mono mt-1">
                  DOI: {selectedProject.verifiedReference.doi}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
              >
                Close Summary
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
