import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-light-bg to-gray-100 border-t border-border-color">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="text-center lg:text-left">
            <p 
              className="text-text-secondary mb-2"
              data-testid="footer-copyright"
            >
              © {currentYear} Hudson Healthcare Solutions
            </p>
            <p 
              className="text-text-secondary"
              data-testid="footer-contact"
            >
              551-800-3255 • Hoboken, NJ
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <span 
              className="bg-primary-orange/10 text-text-muted px-4 py-2 rounded-full text-sm border border-primary-orange/20"
              data-testid="footer-chip-case-studies"
            >
              Case Studies (coming soon)
            </span>
            <span 
              className="bg-primary-orange/10 text-text-muted px-4 py-2 rounded-full text-sm border border-primary-orange/20"
              data-testid="footer-chip-blog"
            >
              Blog / Insights (coming soon)
            </span>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-border-color">
          <p 
            className="text-text-muted"
            data-testid="footer-tagline"
          >
            Empowering healthcare through innovative technology solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
