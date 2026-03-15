import { useEffect, useRef, useState } from "react";

const pulseItems = [
  {
    category: "Research",
    title: "Multi-Agent Orchestration Reaches New Benchmarks",
    summary: "Latest findings show autonomous agent swarms outperforming single-model approaches by 340% on complex reasoning tasks.",
    date: "Mar 2026",
  },
  {
    category: "Trends",
    title: "Enterprise Agentic AI Adoption Accelerates",
    summary: "Fortune 500 companies are deploying tool-using AI agents at unprecedented scale, driven by measurable ROI in operations.",
    date: "Mar 2026",
  },
  {
    category: "News",
    title: "Open-Source LLMs Close the Gap on Proprietary Models",
    summary: "Community-driven foundation models now rival commercial alternatives across key benchmarks, democratizing AI capabilities.",
    date: "Feb 2026",
  },
  {
    category: "Research",
    title: "Retrieval-Augmented Generation 2.0: Beyond Simple RAG",
    summary: "New architectures combining graph-based retrieval with iterative reasoning push the boundaries of knowledge-grounded AI.",
    date: "Feb 2026",
  },
  {
    category: "Trends",
    title: "AI Safety Frameworks Become Industry Standard",
    summary: "Regulatory alignment and responsible AI governance are now table stakes for enterprise deployments worldwide.",
    date: "Jan 2026",
  },
  {
    category: "News",
    title: "Multimodal Agents: Seeing, Hearing, Acting",
    summary: "Next-generation agents process video, audio, and text simultaneously to navigate real-world digital environments.",
    date: "Jan 2026",
  },
];

const categoryColors: Record<string, string> = {
  Research: "text-accent border-accent/30 bg-accent/5",
  Trends: "text-primary border-primary/30 bg-primary/5",
  News: "text-foreground border-foreground/20 bg-foreground/5",
};

const PulseCard = ({ item, index }: { item: typeof pulseItems[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-hover p-6 group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full border ${categoryColors[item.category]}`}>
          {item.category}
        </span>
        <span className="text-xs text-muted-foreground">{item.date}</span>
      </div>
      <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {item.summary}
      </p>
    </div>
  );
};

const IntelligencePulse = () => {
  return (
    <section id="pulse" className="relative py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-primary/3 blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">Intelligence Pulse</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            The AI <span className="gradient-text">Frontier</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Curated breakthroughs, trends, and insights from the cutting edge of artificial intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pulseItems.map((item, i) => (
            <PulseCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligencePulse;
