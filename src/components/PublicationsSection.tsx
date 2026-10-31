import { BookOpen, ExternalLink, FileText, Database, ShieldCheck, Bookmark } from 'lucide-react';

export function PublicationsSection() {
  const academicResources = [
    {
      name: 'PubMed / NCBI Entrez',
      category: 'Biomedical Literature',
      description: 'Over 36 million citations and abstracts for biomedical and life sciences literature.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
      badge: 'National Library of Medicine'
    },
    {
      name: 'AlphaFold Protein Structure Database',
      category: 'Structural Predictions',
      description: 'Open-access database containing over 200 million predicted protein structures by Google DeepMind and EMBL-EBI.',
      url: 'https://alphafold.ebi.ac.uk/',
      badge: 'DeepMind / EMBL-EBI'
    },
    {
      name: 'RCSB Protein Data Bank (PDB)',
      category: 'Experimental 3D Macromolecules',
      description: 'The worldwide repository of experimentally determined atomic coordinates of proteins, nucleic acids, and complexes.',
      url: 'https://www.rcsb.org/',
      badge: 'wwPDB Archive'
    },
    {
      name: 'UniProt Knowledgebase (UniProtKB)',
      category: 'Protein Sequence & Annotation',
      description: 'The comprehensive catalog of protein sequence, functional domain architecture, and disease variant annotations.',
      url: 'https://www.uniprot.org/',
      badge: 'UniProt Consortium'
    },
    {
      name: 'bioRxiv & medRxiv Preprints',
      category: 'Open-Access Preprints',
      description: 'Preprint service for the life sciences hosted by Cold Spring Harbor Laboratory.',
      url: 'https://www.biorxiv.org/',
      badge: 'CSHL Preprints'
    },
    {
      name: 'Ensembl Genome Browser',
      category: 'Genomics & Gene Models',
      description: 'Genome databases for vertebrate genomes, supporting comparative genomics, evolution, and variant analysis.',
      url: 'https://www.ensembl.org/',
      badge: 'EMBL-EBI & Sanger'
    }
  ];

  const curriculumMaterials = [
    {
      title: 'Guide to Eukaryotic Transcription Factors & Chromatin Remodeling',
      format: 'Educational Curriculum PDF',
      division: 'Molecular Biology',
      level: 'Advanced Undergraduate / Graduate'
    },
    {
      title: 'CRISPR Cas9 vs Cas12 vs Prime Editing: Comparative Mechanics',
      format: 'Technical Reference Protocol',
      division: 'Biotechnology',
      level: 'Research Laboratory'
    },
    {
      title: 'Mitochondrial Cristae & Chemiosmotic ATP Stoichiometry',
      format: 'Quantitative Bioenergetics Model',
      division: 'Cell Biology',
      level: 'Advanced Biochemistry'
    },
    {
      title: 'Synaptic Plasticity, Long-Term Potentiation & Calcium Influx',
      format: 'Neuroscience Foundations',
      division: 'Neuroscience',
      level: 'Neurobiology Curriculum'
    }
  ];

  return (
    <section id="publications" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>SCHOLARLY REPOSITORIES & OPEN ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Publications and Resources
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Directly connect to authoritative global databases, peer-reviewed biomedical literature, and open scientific curriculum materials.
          </p>
        </div>

        {/* Global Databases & Repositories */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono">
            <Database className="w-5 h-5 text-cyan-400" />
            <span>Authoritative Life Science Repositories</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/50 hover:bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                      {res.category}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-2">
                    {res.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {res.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                  Authority: {res.badge}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* BioScience Curated Learning Guides */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 font-mono">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span>BioScience Educational Reference Guides</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {curriculumMaterials.map((mat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 flex-shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-cyan-400">
                      {mat.division} • {mat.format}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {mat.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono mt-1 block">
                      Target Level: {mat.level}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300 flex-shrink-0">
                  Open Access
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
