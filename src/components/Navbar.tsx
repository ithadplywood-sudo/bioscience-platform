import { useState, useEffect } from 'react';
import { 
  Dna, 
  Search, 
  Menu, 
  X, 
  FlaskConical, 
  Layers, 
  BookOpen, 
  Sparkles, 
  Compass, 
  PhoneCall 
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export function Navbar({ onOpenSearch, onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'discover', label: 'Discover' },
    { id: 'interactive', label: 'Interactive Hub' },
    { id: 'divisions', label: 'Scientific Divisions' },
    { id: 'research', label: 'Research' },
    { id: 'innovations', label: 'Innovations' },
    { id: 'knowledge', label: 'Knowledge Center' },
    { id: 'publications', label: 'Publications' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/92 backdrop-blur-md border-b border-cyan-900/40 shadow-lg shadow-cyan-950/20 py-3'
          : 'bg-gradient-to-b from-[#030712]/95 via-[#030712]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="BioScience Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-500/20">
              <Dna className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                BioScience
              </div>
              <div className="text-[10px] tracking-wider uppercase font-mono text-cyan-400/80 -mt-1">
                Life Sciences Platform
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 shadow-inner" aria-label="Main Navigation">
            {navItems.slice(0, 8).map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-mono transition-all hover:shadow-sm hover:shadow-cyan-500/20"
              aria-label="Open Universal Scientific Search"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Search Science...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-slate-800 border border-slate-700 rounded text-slate-400 font-sans">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => handleLinkClick('divisions')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold tracking-wide shadow-md shadow-cyan-900/40 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Explore Science</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 px-4 pb-6 pt-2 bg-[#030712]/98 border-b border-cyan-900/50 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                  activeSection === item.id
                    ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 rounded-lg bg-slate-900 border border-cyan-900/60 text-cyan-300 text-xs flex items-center justify-center gap-2"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Open Global Search</span>
            </button>
            <button
              onClick={() => handleLinkClick('divisions')}
              className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Scientific Divisions</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
