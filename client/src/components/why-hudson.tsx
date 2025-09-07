import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const whyReasons = [
  {
    title: "Healthcare-Focused Expertise",
    points: [
      "Deep understanding of healthcare workflows and challenges",
      "Specialized knowledge of clinical and administrative processes",
      "Proven track record with healthcare organizations",
      "Continuous innovation in healthcare technology"
    ]
  },
  {
    title: "Compliance & Scalability",
    points: [
      "Full HIPAA compliance and U.S. regulatory adherence",
      "Scalable solutions for clinics, hospitals, and specialty practices",
      "Enterprise-grade security and data protection",
      "Seamless integration with existing healthcare systems"
    ]
  }
];

export default function WhyHudson() {
  return (
    <section id="why" className="py-20 lg:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-primary"
            data-testid="why-title"
          >
            Why Choose Hudson Healthcare Solutions
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto"
            data-testid="why-subtitle"
          >
            Trusted expertise and proven solutions for healthcare organizations of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {whyReasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-card-bg border-primary-orange/20 shadow-glow backdrop-blur-glass animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`why-card-${index}`}
            >
              <CardHeader>
                <CardTitle 
                  className="text-2xl font-semibold text-primary-orange"
                  data-testid={`why-card-title-${index}`}
                >
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {reason.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start text-text-secondary"
                      data-testid={`why-point-${index}-${pointIndex}`}
                    >
                      <Check className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
