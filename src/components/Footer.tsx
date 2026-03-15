const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-sm">
          <span className="text-foreground">VLTA</span>
          <span className="text-primary ml-1">AI</span>
          <span className="text-muted-foreground ml-2">Technology AB</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VLTA AI Technology AB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
