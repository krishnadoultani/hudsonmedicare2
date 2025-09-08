import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

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

          {/* Desktop Navigation - Know More Card */}
          <div className="hidden lg:flex items-center">
            <div className="bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-2xl p-3 shadow-premium">
              <div className="flex items-center gap-3">
                <span className="text-text-primary font-medium text-sm">Know More</span>
                <ArrowRight className="h-3 w-3 text-primary-orange" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="h-8 w-8 text-text-primary hover:bg-primary-orange/10 border border-primary-orange/20 rounded-lg transition-spring"
                >
                  {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                </Button>
              </div>
              
              {isMobileMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-xl p-4 shadow-2xl min-w-[200px] z-50">
                  <div className="space-y-2">
                    {[
                      { label: 'Home', id: 'home' },
                      { label: 'About', id: 'about' },
                      { label: 'Solutions', id: 'solutions' },
                      { label: 'Why', id: 'why' },
                      { label: 'Contact', id: 'contact' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left px-3 py-2 text-text-secondary hover:text-primary-orange hover:bg-primary-orange/10 rounded-lg transition-spring text-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
