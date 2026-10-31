import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScientificDiscovery } from './components/ScientificDiscovery';
import { ScientificDivisionsSection } from './components/ScientificDivisionsSection';
import { DivisionDetailView } from './components/DivisionDetailView';
import { InteractiveScienceHub } from './components/InteractiveScienceHub';
import { ResearchSection } from './components/ResearchSection';
import { InnovationsSection } from './components/InnovationsSection';
import { GallerySection } from './components/GallerySection';
import { KnowledgeCenter } from './components/KnowledgeCenter';
import { PublicationsSection } from './components/PublicationsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { ScientificDivision } from './data/scientificData';

export default function App() {
  const [selectedDivision, setSelectedDivision] = useState<ScientificDivision | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Universal Navigation Handler
  const handleNavigate = (sectionId: string) => {
    if (selectedDivision) {
      setSelectedDivision(null);
    }
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('hero');
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 50);
  };

  const handleSelectDivision = (division: ScientificDivision) => {
    setSelectedDivision(division);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDivisions = () => {
    setSelectedDivision(null);
    setTimeout(() => {
      const el = document.getElementById('divisions');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Listen for global Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setSearchModalOpen(true)}
        onNavigate={handleNavigate}
        activeSection={selectedDivision ? 'divisions' : activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedDivision ? (
          <DivisionDetailView
            division={selectedDivision}
            onBack={handleBackToDivisions}
            onSelectDivision={handleSelectDivision}
          />
        ) : (
          <>
            {/* Cinematic Hero */}
            <Hero
              onExploreDivisions={() => handleNavigate('divisions')}
              onExploreResearch={() => handleNavigate('research')}
            />

            {/* Scientific Discovery Section (8 Foundational Disciplines) */}
            <ScientificDiscovery onSelectDivision={handleSelectDivision} />

            {/* Interactive Science Lab & AlphaFold Workbench */}
            <InteractiveScienceHub />

            {/* Complete Scientific Divisions Research Hub */}
            <ScientificDivisionsSection onSelectDivision={handleSelectDivision} />

            {/* Research Beyond Boundaries */}
            <ResearchSection />

            {/* Scientific Innovations */}
            <InnovationsSection />

            {/* High-Tech Scientific Image Gallery */}
            <GallerySection />

            {/* Scientific Knowledge Center */}
            <KnowledgeCenter />

            {/* Publications & Authoritative Repositories */}
            <PublicationsSection />

            {/* About BioScience */}
            <AboutSection />

            {/* Contact Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectDivision={handleSelectDivision}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
