import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-glass' 
          : 'gradient-header'
      } border-b border-primary-orange/20`}
      data-testid="header"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-smooth"
            data-testid="logo-link"
          >
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
                  className="text-text-secondary hover:text-primary-orange transition-smooth font-medium relative group"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
            <li>
              <Button
                asChild
                className="bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold px-6 py-2 rounded-xl shadow-orange hover:shadow-orange-hover transition-smooth hover:-translate-y-0.5"
                data-testid="call-button"
              >
                <a href="tel:+15518003255">Call: 551-800-3255</a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary"
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-color animate-slide-in">
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
                    className="text-text-secondary hover:text-primary-orange transition-smooth font-medium block w-full text-left"
                    data-testid={`mobile-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  asChild
                  className="bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold px-6 py-2 rounded-xl w-full"
                  data-testid="mobile-call-button"
                >
                  <a href="tel:+15518003255">Call: 551-800-3255</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
