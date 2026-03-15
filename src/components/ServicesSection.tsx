import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "AI Consulting",
    description: "Strategy and roadmap development for AI-driven transformation. We map your business landscape to identify high-impact AI opportunities.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M16 28l4-8 4 6 4-10 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "AI Coaching",
    description: "Empowering teams with Generative AI skills. Hands-on workshops and training programs tailored to your organization's maturity level.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 18l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI Development",
    description: "Custom LLM and full-stack AI solutions. From fine-tuned models to production-ready APIs, we build the intelligence layer your product needs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
        <path d="M16 22l4 4-4 4M26 30h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Agent Building",
    description: "Designing autonomous, tool-using AI agents that reason, plan, and execute complex workflows with minimal human intervention.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="38" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="24" cy="38" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        <path d="M24 13v7M24 28v7M27 24h8M13 24h7" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass-hover p-8 group cursor-default transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Intelligence, <span className="gradient-text">Engineered</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
