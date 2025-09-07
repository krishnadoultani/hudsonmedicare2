import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    title: "Electronic Health Record (EHR) Systems",
    description: "Comprehensive digital patient records that streamline clinical workflows and improve care coordination across your entire healthcare network."
  },
  {
    title: "Practice Management Software", 
    description: "Integrated solutions for scheduling, billing, and administrative tasks that optimize your practice's operational efficiency and financial performance."
  },
  {
    title: "Telehealth Platforms",
    description: "Secure, user-friendly virtual care solutions that expand access to healthcare services and improve patient engagement."
  },
  {
    title: "Patient Portals & Engagement Tools",
    description: "Interactive platforms that empower patients to actively participate in their healthcare journey and improve communication with providers."
  },
  {
    title: "Billing & Revenue Cycle Management",
    description: "Automated billing systems that reduce administrative burden, accelerate reimbursements, and improve financial outcomes."
  },
  {
    title: "AI-Driven Analytics for Healthcare",
    description: "Advanced analytics and machine learning solutions that provide actionable insights to improve clinical decisions and operational performance."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-gradient-to-br from-dark-bg to-accent/10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-primary"
            data-testid="solutions-title"
          >
            Our Healthcare Solutions
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto"
            data-testid="solutions-subtitle"
          >
            Comprehensive software solutions designed specifically for modern healthcare environments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="bg-card-bg border-primary-orange/20 shadow-glow backdrop-blur-glass transition-smooth hover:-translate-y-2 hover:shadow-glow-hover hover:border-primary-orange/40 group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`solution-card-${index}`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-orange to-primary-orange/60" />
              <CardHeader className="pb-4">
                <CardTitle 
                  className="text-xl font-semibold text-text-primary group-hover:text-primary-orange transition-smooth"
                  data-testid={`solution-title-${index}`}
                >
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p 
                  className="text-text-secondary leading-relaxed"
                  data-testid={`solution-description-${index}`}
                >
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
