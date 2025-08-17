import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-violet-primary flex items-center justify-center">
            <span className="text-white font-display text-lg font-semibold">V</span>
          </div>
          <span className="font-display text-xl font-semibold" style={{ color: 'var(--neutral-dark)' }}>
            Verdant
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-body text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--neutral-dark)' }}>
            Home
          </a>
          <a href="#menu" className="font-body text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--neutral-dark)' }}>
            Menu
          </a>
          <a href="#services" className="font-body text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--neutral-dark)' }}>
            Services
          </a>
          <a href="#about" className="font-body text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--neutral-dark)' }}>
            About
          </a>
          <a href="#contact" className="font-body text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--neutral-dark)' }}>
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button className="gradient-button-green text-white font-body text-sm font-medium px-6 py-2 rounded-full border-0 hover:opacity-90 transition-opacity">
          Reserve Table
        </Button>
      </nav>
    </header>
  );
}