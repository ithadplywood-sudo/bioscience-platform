import { useState } from 'react';
import { BookOpen, Clock, Calendar, ChevronRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { KNOWLEDGE_ARTICLES, Article } from '../data/scientificData';

export function KnowledgeCenter() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Molecular Biology', 'Biotechnology', 'Cell Biology', 'Neuroscience'];

  const filteredArticles = KNOWLEDGE_ARTICLES.filter((art) => {
    const matchCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchQuery = !searchTerm ||
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.body.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCat && matchQuery;
  });

  return (
    <section id="knowledge" className="py-24 bg-[#030712] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-300 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN SCIENTIFIC CURRICULUM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Knowledge That Moves Science Forward
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Rigorous peer-level educational articles explaining molecular mechanics, cellular energetic accounting, and neurochemical synapses.
          </p>

          {/* Search and Categories Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search knowledge articles..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-slate-900/50 hover:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.publishDate}</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {article.abstract}
                </p>

                {/* Key Takeaways preview */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase text-slate-400">Key Educational Takeaways:</div>
                  {article.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  By {article.author}
                </span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 hover:underline cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-cyan-800/80 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.publishDate}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mt-3">
              {selectedArticle.title}
            </h3>

            <div className="text-xs text-slate-400 font-mono mt-1 mb-6">
              Published by {selectedArticle.author}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-900/50 mb-8">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-1">Abstract</div>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                {selectedArticle.abstract}
              </p>
            </div>

            {/* Article Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {selectedArticle.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-8 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-900/60">
              <h4 className="text-sm font-bold text-cyan-300 font-mono uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Core Scientific Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {selectedArticle.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
