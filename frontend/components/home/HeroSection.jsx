"use client";
import { useEffect } from "react";

const HeroGraphicPlaceholder = () => (
  <div className="w-full h-80 md:h-full rounded-lg flex items-center justify-center">
    <img
      src="/Hero_Section_BG_Transparent.png"
      alt="CompetiQuest Illustration"
      width={600}
      height={500}
    />
  </div>
);

const AuroraBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Larger, primary red blob */}
    <div
      className="absolute h-[40rem] w-[40rem] animate-[aurora_20s_linear_infinite] rounded-full opacity-50"
      style={{
        background: "radial-gradient(circle, oklch(from var(--accent) l c h / 0.3) 0%, transparent 70%)",
        top: '50%',
        left: '50%',
        '--start-x': '-50%', '--start-y': '-50%',
        '--end-x': '-30%', '--end-y': '-80%',
      }}
    />
    {/* Blue/Purple blob */}
    <div
      className="absolute h-[45rem] w-[45rem] animate-[aurora_25s_linear_infinite] rounded-full opacity-50"
      style={{
        background: "radial-gradient(circle, oklch(0.6 0.15 260 / 0.2) 0%, transparent 70%)",
        top: '50%',
        left: '50%',
        '--start-x': '50%', '--start-y': '20%',
        '--end-x': '30%', '--end-y': '-10%',
        animationDelay: '6s'
      }}
    />
    {/* Smaller, secondary red blob */}
     <div
      className="absolute h-[30rem] w-[30rem] animate-[aurora_18s_linear_infinite] rounded-full opacity-40"
      style={{
        background: "radial-gradient(circle, oklch(from var(--accent) l c h / 0.2) 0%, transparent 70%)",
        top: '50%',
        left: '50%',
        '--start-x': '20%', '--start-y': '60%',
        '--end-x': '40%', '--end-y': '40%',
        animationDelay: '12s'
      }}
    />
    {/* New, vibrant cyan blob */}
    <div
      className="absolute h-[25rem] w-[25rem] animate-[aurora_22s_linear_infinite] rounded-full opacity-40"
      style={{
        background: "radial-gradient(circle, oklch(0.6 0.15 220 / 0.2) 0%, transparent 70%)",
        top: '50%', left: '50%',
        '--start-x': '80%', '--start-y': '-10%',
        '--end-x': '100%', '--end-y': '0%',
        animationDelay: '8s'
      }}
    />
    {/* New, very large background blob */}
     <div
      className="absolute h-[60rem] w-[60rem] animate-[aurora_28s_linear_infinite] rounded-full opacity-30"
      style={{
        background: "radial-gradient(circle, oklch(from var(--accent) l c h / 0.15) 0%, transparent 70%)",
        top: '50%', left: '55%',
        '--start-x': '-10%', '--start-y': '100%',
        '--end-x': '-20%', '--end-y': '120%',
        animationDelay: '4s'
      }}
    />
  </div>
);

export default function HeroSection() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const computedStyle = getComputedStyle(document.documentElement);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative main-bg min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <AuroraBackground />
      <div className="scanline-bg" />
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-24 md:pt-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground !leading-tight">
              Level Up <br /> Your{" "}
              <span className="text-accent">Competitive</span> Skills
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
              Join CompetiQuest – the ultimate hub for competition enthusiasts. 
              Explore challenges, sharpen your skills, and connect with like-minded 
              achievers.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="#"
                className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 w-full">
            <HeroGraphicPlaceholder />
          </div>
        </div>
      </div>
    </main>
  );
}