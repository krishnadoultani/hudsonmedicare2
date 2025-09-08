import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Solutions from "@/components/solutions";
import WhyHudson from "@/components/why-hudson";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set up smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Set up scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', overflowX: 'hidden' }}>
      <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>
        <h1>Test - If you can see this, React is working!</h1>
        <p>This is a test to see if the basic setup is working.</p>
      </div>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Solutions />
        <WhyHudson />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
