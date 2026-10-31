import { ArrowLeft, BookOpen, ExternalLink, Dna, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScientificDivision, SCIENTIFIC_DIVISIONS } from '../data/scientificData';

interface DivisionDetailViewProps {
  division: ScientificDivision;
  onBack: () => void;
  onSelectDivision: (division: ScientificDivision) => void;
}

export function DivisionDetailView({ division, onBack, onSelectDivision }: DivisionDetailViewProps) {
  return (
    <article className="min-h-screen bg-[#030712] pt-24 pb-20 text-slate-100 animate-in fade-in duration-300">
      {/* Top Breadcrumb & Back bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 text-xs font-mono transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Scientific Divisions</span>
        </button>
      </div>

      {/* Hero Banner with large relevant scientific image */}
      <div className="relative h-[340px] sm:h-[440px] w-full overflow-hidden border-y border-cyan-900/40">
        <img
          src={division.image}
          alt={division.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-[#030712]/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono w-fit mb-3">
            <span>DIVISION {division.number} OF 08</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {division.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-cyan-200/90 font-medium max-w-3xl">
            {division.heroHeadline}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left 2 Columns: In-depth educational content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Section: Overview & Introduction */}
          <section className="bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-800">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Division Overview</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {division.overview}
            </p>

            {/* Disciplines Chips */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Core Specialization Branches
              </h3>
              <div className="flex flex-wrap gap-2">
                {division.disciplines.map((d, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-300"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Important Scientific Concepts */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Foundational Scientific Concepts</span>
            </h2>

            <div className="space-y-4">
              {division.keyConcepts.map((concept, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-white">
                      {concept.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50">
                      Concept 0{idx + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {concept.description}
                  </p>
                  <div className="mt-4 p-3.5 rounded-lg bg-[#030712]/70 border border-slate-800/90 text-xs font-mono text-cyan-200/90">
                    <span className="text-cyan-400 font-semibold">Molecular Basis: </span>
                    {concept.molecularBasis}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Recent Discoveries */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Recent Milestone Discoveries</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {division.recentDiscoveries.map((disc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-[10px] font-mono text-blue-300">
                        {disc.year} Discovery
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono italic">
                        {disc.journal}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {disc.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {disc.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-teal-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Peer-reviewed publication</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Topics, Related Divisions, References */}
        <div className="space-y-8">
          {/* Active Research Topics */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4">
              Active Research Frontiers
            </h3>
            <ul className="space-y-3">
              {division.researchTopics.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Divisions */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4">
              Related Scientific Divisions
            </h3>
            <div className="space-y-2.5">
              {division.relatedDivisions.map((rel) => {
                const target = SCIENTIFIC_DIVISIONS.find((d) => d.id === rel.id);
                return (
                  <button
                    key={rel.id}
                    onClick={() => target && onSelectDivision(target)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 text-left transition-all group"
                  >
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300">
                      {rel.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Academic References & Further Reading */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-4">
              Verified Academic References
            </h3>
            <div className="space-y-4">
              {division.references.map((ref, idx) => (
                <div key={idx} className="text-xs border-b border-slate-800/80 pb-3 last:border-0 last:pb-0">
                  <div className="font-semibold text-white leading-snug">{ref.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{ref.authors}</div>
                  <div className="text-[11px] font-mono text-cyan-400/90 mt-0.5">{ref.source}</div>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 mt-2 font-mono"
                  >
                    <span>Read Verified Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
