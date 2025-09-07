import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if form action still has placeholder
    const formAction = "https://formspree.io/f/your_form_id";
    if (formAction.includes('your_form_id')) {
      toast({
        title: "Configuration Required",
        description: "Please replace 'your_form_id' in the form action with your actual Formspree form ID.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Sorry, there was an error sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-accent/10 to-dark-bg">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-primary"
            data-testid="contact-title"
          >
            Get in Touch
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto"
            data-testid="contact-subtitle"
          >
            Ready to transform your healthcare operations? Let's discuss your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <Card className="bg-card-bg border-primary-orange/20 shadow-glow backdrop-blur-glass animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-text-primary">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary-orange mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-orange mb-2">Phone</h4>
                  <a 
                    href="tel:+15518003255"
                    className="text-text-secondary hover:text-primary-orange transition-smooth text-lg"
                    data-testid="contact-phone"
                  >
                    551-800-3255
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-orange mt-1" />
                <div>
                  <h4 className="font-semibold text-primary-orange mb-2">Address</h4>
                  <a 
                    href="https://maps.google.com/?q=221+River+Street,+Suite+9,+Hoboken,+NJ+07030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary-orange transition-smooth"
                    data-testid="contact-address"
                  >
                    221 River Street, Suite 9<br />
                    Hoboken, NJ 07030
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-card-bg border-primary-orange/20 shadow-glow backdrop-blur-glass animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-text-primary">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="text-text-primary font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 bg-dark-bg border-border-color text-text-primary focus:border-primary-orange transition-smooth"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-text-primary font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-dark-bg border-border-color text-text-primary focus:border-primary-orange transition-smooth"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-dark-bg border-border-color text-text-primary focus:border-primary-orange transition-smooth min-h-[120px] resize-y"
                    data-testid="textarea-message"
                  />
                  <p className="text-sm text-text-muted mt-2">
                    Please do not include personal medical information or PHI in this form.
                  </p>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold py-3 rounded-xl transition-smooth hover:-translate-y-1 disabled:transform-none disabled:opacity-60"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
