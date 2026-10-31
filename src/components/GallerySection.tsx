import { useState } from 'react';
import { Camera, X, Maximize2, Tag, Compass } from 'lucide-react';
import { SCIENTIFIC_GALLERY, GalleryItem } from '../data/scientificData';

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Molecular Visualization', 'Cellular Imaging', 'Structural Biology', 'Neuroscience', 'Biotechnology Infrastructure'];

  const filteredItems = activeCategory === 'All'
    ? SCIENTIFIC_GALLERY
    : SCIENTIFIC_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>VISUAL ATLAS & HIGH-TECH IMAGERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Scientific Image Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            High-resolution microscopy, synchrotron X-ray diffraction, cryo-EM isosurfaces, and molecular dynamics models.
          </p>

          {/* Categories */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 relative flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#030712]/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-cyan-400/90 font-mono mt-0.5">
                    {item.imagingMethod}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950/70 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Mag: {item.magnification}</span>
                <span className="text-cyan-400 group-hover:underline">Inspect Spec &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Modal Viewer */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-800/80 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-96 w-full">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-md bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-300">
                  {selectedItem.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Magnification: {selectedItem.magnification}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {selectedItem.title}
              </h3>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                <span className="text-slate-400">Imaging Modality: </span>
                {selectedItem.imagingMethod}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-900/50 text-xs text-cyan-200 leading-relaxed">
                <span className="text-cyan-400 font-bold">Scientific Context: </span>
                {selectedItem.scientificContext}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono"
                  >
                    <Tag className="w-3 h-3 text-cyan-400" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
