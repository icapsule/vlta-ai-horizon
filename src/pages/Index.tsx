import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IntelligencePulse from "@/components/IntelligencePulse";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VLTA AI Technology AB",
  url: "https://vlta.ai",
  description: "We design and build autonomous AI systems that transform how businesses operate, decide, and scale.",
  foundingDate: "2024",
  areaServed: "Global",
  knowsAbout: ["Artificial Intelligence", "Machine Learning", "AI Agents", "Large Language Models", "Generative AI"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Consulting",
          description: "Strategy and roadmap development for AI-driven transformation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Coaching",
          description: "Empowering teams with Generative AI skills through hands-on workshops.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development",
          description: "Custom LLM and full-stack AI solutions for production environments.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agent Building",
          description: "Designing autonomous, tool-using AI agents for complex workflows.",
        },
      },
    ],
  },
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>VLTA AI Technology — Architecting the Agentic Future</title>
        <meta name="description" content="VLTA AI Technology AB builds autonomous AI systems, custom LLMs, and agentic solutions. AI consulting, coaching, development, and agent building for enterprises." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vlta.ai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <IntelligencePulse />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
