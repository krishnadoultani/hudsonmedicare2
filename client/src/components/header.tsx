import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Shield, Heart, Zap } from "lucide-react";

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gradient-primary hover:opacity-80 transition-spring hover-scale flex items-center gap-2"
            data-testid="logo-link"
          >
            <Sparkles className="h-6 w-6 text-primary-orange animate-pulse-glow" />
            Hudson Healthcare Solutions
          </button>

          {/* Desktop Navigation - Trust Indicators */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Sparkles className="h-4 w-4 text-primary-orange" />
                <span className="text-sm font-medium">Digital Health Innovation</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Heart className="h-4 w-4 text-primary-teal" />
                <span className="text-sm font-medium">Care Coordination</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Zap className="h-4 w-4 text-primary-blue" />
                <span className="text-sm font-medium">Interoperability</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-text-primary hover:bg-primary-orange/10 transition-spring"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} className="transition-spring" /> : <Menu size={24} className="transition-spring" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-orange/20 animate-slide-in">
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
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
