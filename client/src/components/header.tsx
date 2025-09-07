import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-4'
      } border-b border-slate-200/20`}
      data-testid="header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-slate-900 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            data-testid="logo-link"
          >
            Hudson Healthcare Solutions
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
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
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium relative group focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <Button
                asChild
                variant="ghost"
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent"
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
            className="lg:hidden text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-50">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <ul className="flex flex-col items-center space-y-6">
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
                      className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent rounded px-4 py-2"
                      data-testid={`mobile-nav-link-${item.id}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              <Button
                asChild
                variant="ghost"
                className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-lg px-8 py-3 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-transparent"
                data-testid="mobile-call-button"
              >
                <a href="tel:+15518003255" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: 551-800-3255
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
