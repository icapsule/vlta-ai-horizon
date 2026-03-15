const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="text-foreground">VLTA</span>
          <span className="text-primary ml-1">AI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#pulse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Intelligence Pulse</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 text-xs tracking-wider uppercase font-display bg-primary/10 text-primary border border-primary/20 rounded-full hover:bg-primary/20 transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
