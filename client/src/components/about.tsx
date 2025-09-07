import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-text-primary"
          data-testid="about-title"
        >
          About Hudson Healthcare Solutions
        </h2>
        
        <Card className="bg-card-bg border-primary-orange/20 shadow-glow backdrop-blur-glass animate-fade-in">
          <CardContent className="p-8 sm:p-12 lg:p-16">
            <div className="space-y-8">
              <p 
                className="text-lg sm:text-xl text-text-secondary leading-relaxed"
                data-testid="about-mission"
              >
                Our mission is to revolutionize healthcare delivery and operational efficiency through cutting-edge technology solutions. We specialize in developing and implementing comprehensive software systems that empower healthcare providers to deliver exceptional patient care while optimizing their practice management.
              </p>
              
              <p 
                className="text-lg sm:text-xl text-text-secondary leading-relaxed"
                data-testid="about-description"
              >
                With a deep understanding of the unique challenges facing healthcare organizations, we provide tailored solutions that enhance workflow efficiency, ensure regulatory compliance, and improve patient outcomes across the entire care continuum.
              </p>
              
              <div className="flex items-center text-primary-orange font-semibold text-lg">
                <MapPin className="mr-3 h-6 w-6" />
                <span data-testid="address">
                  221 River Street, Suite 9, Hoboken, NJ 07030
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
