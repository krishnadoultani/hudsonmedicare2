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

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <main className="pt-20">
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
