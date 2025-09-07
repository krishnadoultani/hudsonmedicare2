import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-spring ${
        isScrolled 
          ? 'glass-card shadow-premium border-b border-primary-orange/30' 
          : 'gradient-header border-b border-primary-orange/20'
      }`}
      data-testid="header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gradient-primary hover:opacity-80 transition-spring hover-scale flex items-center gap-2"
            data-testid="logo-link"
          >
            <Sparkles className="h-6 w-6 text-primary-orange animate-pulse-glow" />
            Hudson Healthcare Solutions
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Solutions', id: 'solutions' },
              { label: 'Why', id: 'why' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-text-secondary hover:text-primary-orange transition-spring font-medium relative group px-3 py-2 rounded-lg hover:bg-primary-orange/10"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-primary rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="gradient-primary hover:shadow-glow text-white font-semibold px-6 py-2 rounded-xl transition-spring hover-lift premium-glow"
                data-testid="call-button"
              >
                <a href="tel:+15518003255" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call: 551-800-3255
                </a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary hover:bg-primary-orange/10 transition-spring"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} className="transition-spring" /> : <Menu size={24} className="transition-spring" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-orange/20 animate-slide-in">
            <ul className="flex flex-col space-y-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Solutions', id: 'solutions' },
                { label: 'Why', id: 'why' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-text-secondary hover:text-primary-orange transition-spring font-medium block w-full text-left px-3 py-2 rounded-lg hover:bg-primary-orange/10"
                    data-testid={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  asChild
                  className="gradient-primary hover:shadow-glow text-white font-semibold px-6 py-2 rounded-xl w-full transition-spring hover-lift"
                  data-testid="mobile-call-button"
                >
                  <a href="tel:+15518003255" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call: 551-800-3255
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
