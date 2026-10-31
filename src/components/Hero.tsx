import { useEffect, useRef } from 'react';
import { ArrowRight, Dna, Sparkles, Database, Microscope, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreDivisions: () => void;
  onExploreResearch: () => void;
}

export function Hero({ onExploreDivisions, onExploreResearch }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated futuristic scientific molecular particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 750);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing molecular network
    const particleCount = Math.min(55, Math.floor(width / 24));
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseColor: string;
      phase: number;
    }[] = [];

    const colors = ['#06b6d4', '#38bdf8', '#3b82f6', '#14b8a6', '#6366f1'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.2 + 1.2,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Render rotating stylized double-helix wave in the center-right background
      const helixCenterX = width > 768 ? width * 0.72 : width * 0.5;
      const helixLength = height * 0.85;
      const step = 14;
      const helixAmp = Math.min(75, width * 0.12);

      for (let y = height * 0.1; y < helixLength; y += step) {
        const angle = y * 0.02 + time;
        const x1 = helixCenterX + Math.sin(angle) * helixAmp;
        const x2 = helixCenterX - Math.sin(angle) * helixAmp;
        const depth = Math.cos(angle); // -1 to 1

        // Base-pair rung
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + (depth + 1) * 0.08})`;
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();

        // Strand 1 node
        ctx.beginPath();
        ctx.arc(x1, y, 2.8 + depth * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = depth > 0 ? '#38bdf8' : '#0284c7';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = depth > 0 ? 8 : 2;
        ctx.fill();

        // Strand 2 node
        ctx.beginPath();
        ctx.arc(x2, y, 2.8 - depth * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = depth <= 0 ? '#06b6d4' : '#0e7490';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = depth <= 0 ? 8 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connect nearby particles to simulate molecular lattices
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.baseColor;
        ctx.shadowColor = p.baseColor;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#030712]">
      {/* Background radial lighting */}
      <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Interactive molecular / DNA canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Typography, Badges, CTAs, and Metrics */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Institutional Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide mb-6 shadow-sm shadow-cyan-900/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>GLOBAL BIOTECHNOLOGY & SCIENTIFIC DISCOVERY PLATFORM</span>
            </div>

            {/* Master Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Exploring Life.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Engineering Tomorrow.
              </span>
            </h1>

            {/* Master Supporting Description */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Discover the extraordinary science of life through biotechnology, genetics, molecular biology, medical innovation, and advanced scientific research.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onExploreDivisions}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-900/50 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Explore Scientific Divisions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreResearch}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-800/60 hover:border-cyan-400/80 font-medium text-sm transition-all flex items-center justify-center gap-2.5 shadow-md shadow-slate-950/50 cursor-pointer"
              >
                <Microscope className="w-4 h-4 text-cyan-400" />
                <span>Discover Our Research</span>
              </button>
            </div>

            {/* Real Scientific Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">08</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Scientific Divisions</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-teal-400">200M+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Protein Structures</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">100+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Curated Concepts</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-indigo-400">100%</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Open Science Access</div>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic High-Resolution 3D Scientific Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-75 animate-pulse" />

            {/* Frame container */}
            <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-900/70 backdrop-blur-xl shadow-2xl shadow-cyan-950/60 group">
              {/* Cinematic 3D Render Image */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full overflow-hidden">
                <img
                  src="/images/hero/hero_dna_helix.jpg"
                  alt="Realistic 3D DNA Double Helix and Molecular Structure Visualization"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Blue Overlay Gradients for Readability and Seamless Blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/40 via-transparent to-[#030712]/20" />

                {/* Top Holographic Telemetry Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-lg bg-[#030712]/80 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>3D BIOMACROMOLECULE MODEL</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-slate-300">
                    2.1 Å CRYO-EM
                  </div>
                </div>

                {/* Floating Bio-Metric Callout Cards */}
                <div className="absolute bottom-4 left-4 right-4 space-y-2 pointer-events-none">
                  <div className="p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-xs shadow-xl">
                    <div className="flex items-center justify-between text-cyan-300 font-mono text-[11px] mb-1">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Dna className="w-3.5 h-3.5 text-cyan-400" />
                        B-DNA HELIX DYNAMICS
                      </span>
                      <span className="text-emerald-400">10.5 bp / turn</span>
                    </div>
                    <div className="text-[11px] text-slate-300 line-clamp-2">
                      Right-handed double helix stabilized by Watson-Crick hydrogen bonding & base stacking interactions.
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">AT / GC Pairs</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">Major Groove: 22Å</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">Minor Groove: 12Å</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
