import NeuralBackground from "./NeuralBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px] animate-float-delayed" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6 animate-kinetic opacity-0">
            VLTA AI Technology AB
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            <span className="block animate-kinetic opacity-0">Architecting</span>
            <span className="block animate-kinetic-delayed opacity-0">the <span className="gradient-text">Agentic</span></span>
            <span className="block animate-kinetic-delayed-2 opacity-0">Future</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
            We design and build autonomous AI systems that transform how businesses operate, decide, and scale.
          </p>
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 glass-hover glow-border font-display text-sm tracking-wider uppercase text-primary-foreground bg-primary/90 hover:bg-primary transition-colors rounded-full"
            >
              Start Your AI Journey
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
