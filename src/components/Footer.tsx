import { Dna, ArrowUp, Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                <Dna className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  BioScience
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-mono text-cyan-400/80">
                  Scientific Discovery Platform
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An advanced international scientific knowledge, biotechnology, genetics, molecular science, and life-sciences platform exploring the frontiers of biological discovery.
            </p>

            <div className="pt-2 text-xs font-mono text-cyan-400">
              "Exploring Life. Engineering Tomorrow."
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('divisions')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Scientific Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Research Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('innovations')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Scientific Innovations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interactive')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Interactive Science Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('publications')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Publications & Repositories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('interactive')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Scientific Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('knowledge')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Knowledge Center
                </button>
              </li>
              <li>
                <a
                  href="https://alphafold.ebi.ac.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  <span>AlphaFold Database</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  About BioScience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <span className="text-slate-500">Open Science Initiative</span>
              </li>
              <li>
                <span className="text-slate-500">Scientific Integrity Policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 BioScience. All rights reserved. Open scientific knowledge platform.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
