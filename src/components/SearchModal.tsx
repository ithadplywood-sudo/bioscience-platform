import { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Dna, Microscope, Cpu, BookOpen, BookA } from 'lucide-react';
import { 
  SCIENTIFIC_DIVISIONS, 
  ScientificDivision, 
  RESEARCH_PROJECTS, 
  SCIENTIFIC_INNOVATIONS, 
  KNOWLEDGE_ARTICLES, 
  GLOSSARY_TERMS 
} from '../data/scientificData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDivision: (division: ScientificDivision) => void;
  onNavigate: (sectionId: string) => void;
}

export function SearchModal({ isOpen, onClose, onSelectDivision, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on Escape, Open on Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  // Search results
  const matchedDivisions = q
    ? SCIENTIFIC_DIVISIONS.filter((d) =>
        d.name.toLowerCase().includes(q) ||
        d.overview.toLowerCase().includes(q) ||
        d.disciplines.some((disc) => disc.toLowerCase().includes(q))
      )
    : [];

  const matchedResearch = q
    ? RESEARCH_PROJECTS.filter((r) =>
        r.title.toLowerCase().includes(r.category.toLowerCase()) ||
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q)
      )
    : [];

  const matchedInnovations = q
    ? SCIENTIFIC_INNOVATIONS.filter((i) =>
        i.name.toLowerCase().includes(q) ||
        i.summary.toLowerCase().includes(q)
      )
    : [];

  const matchedArticles = q
    ? KNOWLEDGE_ARTICLES.filter((a) =>
        a.title.toLowerCase().includes(q) ||
        a.abstract.toLowerCase().includes(q)
      )
    : [];

  const matchedGlossary = q
    ? GLOSSARY_TERMS.filter((g) =>
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q)
      ).slice(0, 5)
    : [];

  const hasResults =
    matchedDivisions.length > 0 ||
    matchedResearch.length > 0 ||
    matchedInnovations.length > 0 ||
    matchedArticles.length > 0 ||
    matchedGlossary.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-800/80 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search divisions, CRISPR, proteins, ATP respiration, organelles..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            aria-label="Close search"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {!q && (
            <div className="text-center py-8 text-slate-400 text-xs sm:text-sm">
              <div className="flex justify-center gap-2 mb-3">
                {['Molecular Biology', 'CRISPR', 'Mitochondria', 'p53', 'Enzymes'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300 font-mono text-xs hover:bg-slate-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
              <p>Type keywords to search across all divisions, research programs, and terms.</p>
            </div>
          )}

          {q && !hasResults && (
            <div className="text-center py-8 text-slate-400 text-sm">
              No direct matches found for "{query}". Try broader terms such as "DNA", "Cell", "Protein", or "Gene".
            </div>
          )}

          {/* Divisions matches */}
          {matchedDivisions.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5" />
                <span>Scientific Divisions ({matchedDivisions.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedDivisions.map((div) => (
                  <button
                    key={div.id}
                    onClick={() => {
                      onSelectDivision(div);
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                        {div.name}
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-1">{div.shortDesc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research matches */}
          {matchedResearch.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
                <Microscope className="w-3.5 h-3.5" />
                <span>Research Initiatives ({matchedResearch.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedResearch.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => {
                      onNavigate('research');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                        {res.title}
                      </span>
                      <span className="block text-xs text-cyan-400/80 font-mono mt-0.5">{res.category}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Innovations matches */}
          {matchedInnovations.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technologies & Innovations ({matchedInnovations.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedInnovations.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => {
                      onNavigate('innovations');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                        {tech.name}
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-1">{tech.summary}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Glossary matches */}
          {matchedGlossary.length > 0 && (
            <div>
              <div className="text-xs font-mono uppercase text-cyan-400 mb-2 flex items-center gap-1.5">
                <BookA className="w-3.5 h-3.5" />
                <span>Glossary Definitions ({matchedGlossary.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedGlossary.map((term) => (
                  <button
                    key={term.term}
                    onClick={() => {
                      onNavigate('interactive');
                      onClose();
                    }}
                    className="w-full p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800/80 text-left flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                        {term.term}
                      </span>
                      <p className="text-xs text-slate-400 line-clamp-1">{term.definition}</p>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950">
                      {term.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
