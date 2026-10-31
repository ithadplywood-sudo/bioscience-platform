import { useState, useId } from 'react';
import { 
  Dna, 
  Activity, 
  BookA, 
  FlaskConical, 
  ExternalLink, 
  RotateCw, 
  Zap, 
  Info, 
  Search, 
  Sparkles,
  ChevronRight,
  Database,
  Award
} from 'lucide-react';
import { 
  CELL_ORGANELLES, 
  CellOrganelleInfo, 
  GLOSSARY_TERMS, 
  WORKBENCH_TARGETS, 
  BiomolecularWorkbenchTarget 
} from '../data/scientificData';
import { 
  getComplementaryStrand, 
  transcribeDnaToMrna, 
  translateMrna, 
  getPlddtClassification,
  calculateRespirationAtpYield,
  filterGlossaryTerms 
} from '../utils/scienceLogic';

export function InteractiveScienceHub() {
  const [activeTab, setActiveTab] = useState<'dna' | 'cell' | 'workbench' | 'glossary'>('dna');

  // DNA Explorer State
  const [dnaInput, setDnaInput] = useState('ATGGCCATTTAA');
  const [selectedBaseIndex, setSelectedBaseIndex] = useState<number | null>(0);

  // Cell Explorer State
  const [selectedOrganelle, setSelectedOrganelle] = useState<CellOrganelleInfo>(CELL_ORGANELLES[1]); // Mitochondria default
  const [glucoseInput, setGlucoseInput] = useState<number>(1);

  // Biomolecular Workbench State
  const [selectedTarget, setSelectedTarget] = useState<BiomolecularWorkbenchTarget>(WORKBENCH_TARGETS[0]); // TP53
  const [workbenchViewMode, setWorkbenchViewMode] = useState<'domains' | 'variants' | 'plddt'>('domains');

  // Glossary State
  const [glossarySearch, setGlossarySearch] = useState('');
  const [glossaryCategory, setGlossaryCategory] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState('All');

  // Clean DNA sequence
  const cleanDna = dnaInput.toUpperCase().replace(/[^ATCG]/g, '');
  const complementaryDna = getComplementaryStrand(cleanDna);
  const mrnaStrand = transcribeDnaToMrna(cleanDna);
  const translation = translateMrna(mrnaStrand);

  // Alphabet list for Glossary
  const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredGlossary = filterGlossaryTerms(
    GLOSSARY_TERMS,
    glossarySearch,
    glossaryCategory
  ).filter((item) => {
    if (selectedLetter === 'All') return true;
    return item.term.toUpperCase().startsWith(selectedLetter);
  });

  // Respiration ATP calculation
  const atpMetrics = calculateRespirationAtpYield(glucoseInput);

  return (
    <section id="interactive" className="py-24 bg-[#030712] relative border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SCIENCE LAB & WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive Science Features
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 font-normal">
            Directly test molecular transcription, eukaryotic cell structures, the AlphaFold protein database, and our comprehensive scientific glossary.
          </p>

          {/* Navigation Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 w-fit mx-auto shadow-inner">
            <button
              onClick={() => setActiveTab('dna')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'dna'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Dna className="w-4 h-4 text-cyan-400" />
              <span>DNA Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('cell')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'cell'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>Cell Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab('workbench')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'workbench'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Protein & AlphaFold Workbench</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'glossary'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <BookA className="w-4 h-4 text-cyan-400" />
              <span>Biology Glossary</span>
            </button>
          </div>
        </div>

        {/* TAB A: DNA EXPLORER */}
        {activeTab === 'dna' && (
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: DNA Sequence Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Dna className="w-5 h-5 text-cyan-400" />
                    <span>Double-Stranded DNA Model</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Examine antiparallel 5' to 3' Watson-Crick base pairing with hydrogen bond thermodynamics, transcription to mRNA, and ribosomal peptide translation.
                  </p>
                </div>

                {/* Preset sequences */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Pre-loaded Genetic Motifs:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Start-Ile-Stop', seq: 'ATGGCCATTTAA' },
                      { label: 'TATA Core Motif', seq: 'TATAAAAGCGCC' },
                      { label: 'Insulin Exon Fragment', seq: 'ATGGCCCTGTGG' },
                      { label: 'GFP Chromophore Precursor', seq: 'ATGAGCAAAGGA' },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => {
                          setDnaInput(preset.seq);
                          setSelectedBaseIndex(0);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all ${
                          dnaInput === preset.seq
                            ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300'
                            : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Sequence Input */}
                <div>
                  <label htmlFor="dna-seq-input" className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Coding Strand DNA Sequence (5' → 3'):
                  </label>
                  <input
                    id="dna-seq-input"
                    type="text"
                    value={dnaInput}
                    onChange={(e) => setDnaInput(e.target.value.toUpperCase().replace(/[^ATCG]/g, '').slice(0, 24))}
                    placeholder="Enter ATCG sequence (max 24 nt)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-cyan-300 font-mono tracking-widest text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                    <span>Valid bases: A, T, C, G</span>
                    <span>{cleanDna.length} / 24 nucleotides</span>
                  </div>
                </div>

                {/* Base Pair Inspection Box */}
                {selectedBaseIndex !== null && cleanDna[selectedBaseIndex] && (
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/60 text-xs space-y-2">
                    <div className="font-semibold text-white flex items-center justify-between">
                      <span className="text-cyan-400 font-mono">
                        Base Position #{selectedBaseIndex + 1}:
                      </span>
                      <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-[10px] font-mono text-cyan-300">
                        {cleanDna[selectedBaseIndex]} - {complementaryDna[selectedBaseIndex]} Pair
                      </span>
                    </div>
                    <div className="text-slate-300 leading-relaxed">
                      {cleanDna[selectedBaseIndex] === 'A' || cleanDna[selectedBaseIndex] === 'T' ? (
                        <>
                          <strong className="text-cyan-300">Adenine-Thymine (A-T): </strong>
                          Connected by <span className="text-amber-400 font-bold">2 hydrogen bonds</span> (N1-H3 and C6-amino to C4-carbonyl). Requires less thermal energy to denature than G-C pairs.
                        </>
                      ) : (
                        <>
                          <strong className="text-cyan-300">Guanine-Cytosine (G-C): </strong>
                          Connected by <span className="text-emerald-400 font-bold">3 hydrogen bonds</span> (C6-carbonyl to C4-amino, N1-H3, C2-amino to C2-carbonyl). High GC content raises DNA duplex melting temperature (Tm).
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual DNA Ladder & Transcription/Translation flow */}
              <div className="lg:col-span-7 space-y-6">
                {/* Visual Ladder */}
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 overflow-x-auto">
                  <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
                    <span>5' SENSE CODING STRAND</span>
                    <span className="text-cyan-400">Click a base pair to inspect thermodynamics</span>
                  </div>

                  {/* Nucleotide rungs */}
                  <div className="flex gap-2 min-w-max pb-2">
                    {cleanDna.split('').map((base, idx) => {
                      const comp = complementaryDna[idx];
                      const isGC = base === 'G' || base === 'C';
                      const isSelected = selectedBaseIndex === idx;

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedBaseIndex(idx)}
                          className={`flex flex-col items-center p-2 rounded-xl transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-cyan-950/90 border-2 border-cyan-400 shadow-md shadow-cyan-500/30'
                              : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {/* Top Base (Sense) */}
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                              base === 'A'
                                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                                : base === 'T'
                                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                                : base === 'G'
                                ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                                : 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                            }`}
                          >
                            {base}
                          </div>

                          {/* Hydrogen Bond indicator */}
                          <div className="my-1.5 flex flex-col items-center gap-0.5 text-[9px] font-mono text-slate-500">
                            {isGC ? (
                              <span className="text-emerald-400 font-bold tracking-tighter">≡≡≡</span>
                            ) : (
                              <span className="text-amber-400 font-bold tracking-tighter">==</span>
                            )}
                          </div>

                          {/* Bottom Base (Antisense) */}
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
                              comp === 'A'
                                ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                                : comp === 'T'
                                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                                : comp === 'G'
                                ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                                : 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                            }`}
                          >
                            {comp}
                          </div>

                          <div className="mt-1 text-[10px] font-mono text-slate-400">
                            {idx + 1}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="text-xs font-mono text-slate-400 mt-3 text-right">
                    3' ANTISENSE TEMPLATE STRAND
                  </div>
                </div>

                {/* Transcription and Translation Pipeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* mRNA Transcription */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Transcribed mRNA (T → U)</span>
                    </div>
                    <div className="font-mono text-sm text-cyan-200 tracking-wider break-all bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      {mrnaStrand || 'N/A'}
                    </div>
                    <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                      Synthesized by RNA Polymerase II copying the template strand.
                    </p>
                  </div>

                  {/* Peptide Translation */}
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Synthesized Polypeptide Chain</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 min-h-[44px]">
                      {translation.peptides.length > 0 ? (
                        translation.peptides.map((pep, i) => (
                          <span
                            key={i}
                            className={`px-2 py-0.5 rounded text-xs font-mono font-semibold ${
                              pep === '[STOP]'
                                ? 'bg-red-950/80 text-red-400 border border-red-800/60'
                                : pep.includes('Met')
                                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                                : 'bg-slate-800 text-cyan-300 border border-slate-700'
                            }`}
                          >
                            {pep}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">Incomplete codon triplet</span>
                      )}
                    </div>
                    <p className="mt-2 text-[11px] text-slate-400 leading-snug">
                      Decoded by ribosomes reading trinucleotide codon triplets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB B: CELL EXPLORER */}
        {activeTab === 'cell' && (
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Organelle Selectors & Interactive Cell Diagram */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="w-5 h-5 text-cyan-400" />
                    <span>Eukaryotic Cell Compartments</span>
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Select any cellular organelle to inspect its metabolic function, proton gradients, bioenergetics, and disease implications.
                  </p>
                </div>

                {/* Organelle Buttons List */}
                <div className="space-y-2">
                  {CELL_ORGANELLES.map((org) => {
                    const isSelected = selectedOrganelle.id === org.id;
                    return (
                      <button
                        key={org.id}
                        onClick={() => setSelectedOrganelle(org)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-950/80 border-cyan-400 shadow-md shadow-cyan-950/40 text-white'
                            : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                            style={{ backgroundColor: `${org.colorAccent}20`, color: org.colorAccent }}
                          >
                            {org.symbol}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-white">{org.name}</div>
                            <div className="text-[11px] text-slate-400 line-clamp-1">{org.primaryRole}</div>
                          </div>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Organelle Deep-Dive View & Respiration Calculator */}
              <div className="lg:col-span-7 space-y-6">
                {/* Active Organelle Spec Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-cyan-900/60 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: selectedOrganelle.colorAccent }}
                      />
                      <h4 className="text-2xl font-extrabold text-white">
                        {selectedOrganelle.name}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800/80 text-xs font-mono text-cyan-300">
                      Compartment: {selectedOrganelle.symbol}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {selectedOrganelle.detailedFunction}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                        Bioenergetic / ATP Contribution
                      </div>
                      <div className="text-xs text-cyan-200 font-medium leading-relaxed">
                        {selectedOrganelle.energyContribution}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                        Associated Pathologies
                      </div>
                      <div className="text-xs text-amber-200/90 font-medium leading-relaxed">
                        {selectedOrganelle.associatedPathologies}
                      </div>
                    </div>
                  </div>

                  {/* Molecular Markers */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                      Experimental Molecular Markers (Antibody / Proteomic):
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedOrganelle.molecularMarkers.map((m, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-xs font-mono text-cyan-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Cellular Respiration & ATP Yield Calculator */}
                <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                        Aerobic Respiration Energetics Calculator
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      Peter Mitchell Chemiosmosis
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <label htmlFor="glucose-input" className="text-xs text-slate-300 font-mono">
                      Glucose input (moles):
                    </label>
                    <input
                      id="glucose-input"
                      type="number"
                      min="1"
                      max="100"
                      value={glucoseInput}
                      onChange={(e) => setGlucoseInput(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-24 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 font-mono text-cyan-300 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-base sm:text-xl font-bold font-mono text-cyan-400">
                        {atpMetrics.glycolysisAtp} ATP
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Cytosolic Glycolysis</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-base sm:text-xl font-bold font-mono text-teal-400">
                        {atpMetrics.tcaCycleAtp} ATP
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Mitochondrial TCA</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                      <div className="text-base sm:text-xl font-bold font-mono text-amber-400">
                        {atpMetrics.totalAtpMin}-{atpMetrics.totalAtpMax} ATP
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Net Respiration Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB C: BIOMOLECULAR & ALPHAFOLD WORKBENCH (SCIENCE SKILL POWERED) */}
        {activeTab === 'workbench' && (
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            {/* Top Pre-Loaded Target Chips (mandated by science skill) */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Select Protein Target (AlphaFold DB & RCSB PDB):
                </span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <Database className="w-3.5 h-3.5" />
                  <span>Authoritative Verified Accessions</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {WORKBENCH_TARGETS.map((target) => (
                  <button
                    key={target.id}
                    onClick={() => setSelectedTarget(target)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                      selectedTarget.id === target.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span>{target.geneSymbol}</span>
                    <span className="text-[10px] text-slate-500">({target.uniprotAccession})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Split Dual-Pane Structural Workbench Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Pane: Structure Card & Canonical pLDDT Scale */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-slate-950/90 border border-cyan-900/60 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-[10px] font-mono text-blue-300">
                        UniProt: {selectedTarget.uniprotAccession}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2">
                        {selectedTarget.name}
                      </h3>
                      <div className="text-xs text-cyan-400/90 font-mono mt-0.5">
                        {selectedTarget.organism} • PDB: {selectedTarget.pdbId}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedTarget.biologicalFunction}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-800">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">Residues</div>
                      <div className="text-sm font-mono font-bold text-cyan-400">
                        {selectedTarget.residuesCount} AA
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400">Molecular Mass</div>
                      <div className="text-sm font-mono font-bold text-teal-400">
                        {selectedTarget.molecularWeight}
                      </div>
                    </div>
                  </div>

                  {/* Canonical 4-Band AlphaFold pLDDT Legend (Science Skill requirement) */}
                  <div className="mt-6 pt-5 border-t border-slate-800">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-2 flex items-center justify-between">
                      <span>AlphaFold pLDDT Confidence</span>
                      <span className="text-cyan-400 font-bold">Avg {selectedTarget.plddtScoreAvg} / 100</span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono mt-2">
                      <div className="p-1.5 rounded bg-[#0053D6]/20 border border-[#0053D6]/60 text-[#65CBF3]">
                        <div className="font-bold">&gt;90</div>
                        <div className="text-[9px] text-slate-400">Very High</div>
                      </div>
                      <div className="p-1.5 rounded bg-[#65CBF3]/20 border border-[#65CBF3]/60 text-[#65CBF3]">
                        <div className="font-bold">70-90</div>
                        <div className="text-[9px] text-slate-400">Confident</div>
                      </div>
                      <div className="p-1.5 rounded bg-[#FFDB13]/20 border border-[#FFDB13]/60 text-[#FFDB13]">
                        <div className="font-bold">50-70</div>
                        <div className="text-[9px] text-slate-400">Low</div>
                      </div>
                      <div className="p-1.5 rounded bg-[#FF7D45]/20 border border-[#FF7D45]/60 text-[#FF7D45]">
                        <div className="font-bold">&lt;50</div>
                        <div className="text-[9px] text-slate-400">Disordered</div>
                      </div>
                    </div>

                    {/* Progress bar showing distribution */}
                    <div className="w-full h-2 rounded-full flex overflow-hidden mt-3 bg-slate-800">
                      <div style={{ width: `${selectedTarget.plddtDistribution.veryHigh}%`, backgroundColor: '#0053D6' }} title="Very High" />
                      <div style={{ width: `${selectedTarget.plddtDistribution.confident}%`, backgroundColor: '#65CBF3' }} title="Confident" />
                      <div style={{ width: `${selectedTarget.plddtDistribution.low}%`, backgroundColor: '#FFDB13' }} title="Low" />
                      <div style={{ width: `${selectedTarget.plddtDistribution.veryLow}%`, backgroundColor: '#FF7D45' }} title="Disordered" />
                    </div>
                  </div>

                  {/* Outbound Authoritative Database Badges */}
                  <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-2">
                    <a
                      href={selectedTarget.alphafoldUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-800/60 hover:border-cyan-400 text-cyan-300 text-xs font-mono transition-colors"
                    >
                      <span>AlphaFold DB</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={selectedTarget.rcsbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 text-xs font-mono transition-colors"
                    >
                      <span>RCSB PDB ({selectedTarget.pdbId})</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={selectedTarget.uniprotUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 text-xs font-mono transition-colors"
                    >
                      <span>UniProtKB</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Pane: Domains, ClinVar Variants & Verified Citations */}
              <div className="lg:col-span-7 space-y-6">
                {/* View Mode Toggle */}
                <div className="flex gap-2 p-1 rounded-xl bg-slate-950 border border-slate-800 w-fit">
                  <button
                    onClick={() => setWorkbenchViewMode('domains')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      workbenchViewMode === 'domains'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Domain Architecture ({selectedTarget.domains.length})
                  </button>
                  <button
                    onClick={() => setWorkbenchViewMode('variants')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      workbenchViewMode === 'variants'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ClinVar Variants ({selectedTarget.keyVariants.length})
                  </button>
                </div>

                {/* DOMAINS VIEW */}
                {workbenchViewMode === 'domains' && (
                  <div className="space-y-3">
                    {selectedTarget.domains.map((dom, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-white text-sm">
                            {dom.name}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-cyan-950 text-[11px] font-mono text-cyan-300 border border-cyan-800/60">
                            Residues {dom.range}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">
                          {dom.role}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* VARIANTS VIEW */}
                {workbenchViewMode === 'variants' && (
                  <div className="space-y-3">
                    {selectedTarget.keyVariants.map((varItem, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono font-bold text-sm text-cyan-300">
                              {varItem.variant}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                                varItem.classification === 'Pathogenic'
                                  ? 'bg-red-950/80 text-red-400 border border-red-800'
                                  : 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                              }`}
                            >
                              {varItem.classification}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300">
                            {varItem.condition}
                          </p>
                        </div>
                        <a
                          href={`https://www.ncbi.nlm.nih.gov/clinvar/?term=${selectedTarget.geneSymbol}+${varItem.variant}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[11px] font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500 flex items-center gap-1 flex-shrink-0"
                        >
                          <span>ClinVar</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* Verified Literature Citation Card (Science Skill mandatory citation) */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
                  <div className="text-[10px] font-mono uppercase text-teal-400 mb-1 flex items-center gap-1.5">
                    <Award className="w-3 h-3" />
                    <span>Verified Primary Structure Publication (PubMed)</span>
                  </div>
                  <div className="font-semibold text-white mt-1">
                    "{selectedTarget.pubMedReference.title}"
                  </div>
                  <div className="text-slate-400 font-mono text-[11px] mt-1">
                    {selectedTarget.pubMedReference.year} • PMID: {selectedTarget.pubMedReference.pmid}
                  </div>
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${selectedTarget.pubMedReference.pmid}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono text-[11px] mt-2"
                  >
                    <span>View PubMed Citation Record</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB D: BIOLOGY GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="bg-slate-900/60 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            {/* Search and Filters */}
            <div className="space-y-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder="Search terminology, etymology, or biological definitions..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                  />
                </div>

                {/* Category Dropdown */}
                <select
                  value={glossaryCategory}
                  onChange={(e) => setGlossaryCategory(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-cyan-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="All">All Scientific Categories</option>
                  <option value="Molecular Biology">Molecular Biology</option>
                  <option value="Genetics">Genetics</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Microbiology">Microbiology</option>
                  <option value="Cell Biology">Cell Biology</option>
                  <option value="Biochemistry">Biochemistry</option>
                  <option value="Neuroscience">Neuroscience</option>
                  <option value="Ecology">Ecology</option>
                </select>
              </div>

              {/* Alphabet quick-filter */}
              <div className="flex flex-wrap gap-1 pt-2">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`w-7 h-7 rounded text-[11px] font-mono font-semibold transition-all ${
                      selectedLetter === letter
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms Count */}
            <div className="text-xs font-mono text-slate-400 mb-6">
              Showing {filteredGlossary.length} verified scientific terms
            </div>

            {/* Glossary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item) => (
                <div
                  key={item.term}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {item.term}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/60 text-[10px] font-mono text-cyan-300">
                        {item.category}
                      </span>
                    </div>

                    {item.pronunciation && (
                      <div className="text-[11px] font-mono text-slate-400 mb-1">
                        Pronunciation: <span className="text-cyan-400/90">{item.pronunciation}</span>
                      </div>
                    )}

                    {item.etymology && (
                      <div className="text-[11px] text-slate-400 italic mb-3">
                        Etymology: {item.etymology}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.definition}
                    </p>
                  </div>

                  {item.exampleOrNote && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-cyan-200/80 font-mono">
                      <span className="text-cyan-400 font-bold">Scientific Note: </span>
                      {item.exampleOrNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
