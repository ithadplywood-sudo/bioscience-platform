import { ShieldCheck, Compass, Target, Eye, Sparkles, Dna } from 'lucide-react';

export function AboutSection() {
  const pillars = [
    {
      icon: <Target className="w-5 h-5 text-cyan-400" />,
      title: 'Our Mission',
      description: 'To elucidate the molecular and cellular principles of living systems and bridge fundamental life-science research with intuitive digital exploration.'
    },
    {
      icon: <Eye className="w-5 h-5 text-teal-400" />,
      title: 'Our Vision',
      description: 'A world where complex biological mechanisms—from atomic protein folds to planetary ecosystems—are universally comprehended and accessible to researchers, educators, and curious minds.'
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      title: 'Our Scientific Approach',
      description: 'Grounding all visualizations and educational curriculums in peer-reviewed structural datasets, canonical physical chemistry, and open bioinformatics archives.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Our Commitment to Accuracy',
      description: 'Every accession number, reaction stoichiometric equation, and biological model reflects verified literature citations (UniProt, PDB, PubMed) without speculative exaggeration.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      title: 'Our Future Goals',
      description: 'Expanding dynamic 3D molecular simulation, interactive multi-scale metabolic pathway modeling, and integrating emerging whole-genome assembly references.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#030712] relative border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono">
              <Dna className="w-3.5 h-3.5 text-cyan-400" />
              <span>INSTITUTIONAL IDENTITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Understanding Life.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Advancing Knowledge.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              BioScience is a scientific knowledge platform dedicated to exploring the complexity of life, understanding biological systems, and making scientific knowledge accessible through modern digital experiences.
            </p>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="text-cyan-400 font-mono font-semibold uppercase">
                Principled Open Science
              </div>
              <p className="leading-relaxed">
                BioScience operates as an independent scientific knowledge hub. We strictly distinguish peer-reviewed experimental findings from predictive computational models (such as AlphaFold predictions) to preserve rigorous epistemic integrity.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all ${
                  idx === 4 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
