import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Loader } from "@/components/ui/loader";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { ResumeSection } from "@/components/sections/resume";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Asutosh Panigrahi - UI/UX Designer • Salesforce Developer • Frontend Explorer</title>
        <meta 
          name="description" 
          content="Portfolio of Asutosh Panigrahi - UI/UX Designer, Salesforce Developer, and Frontend Explorer designing functional, scalable, and human-centered solutions." 
        />
        <meta property="og:title" content="Asutosh Panigrahi - UI/UX Designer • Salesforce Developer • Frontend Explorer" />
        <meta property="og:description" content="Portfolio showcasing design and development projects by Asutosh Panigrahi" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="UI/UX Designer, Salesforce Developer, Frontend Developer, React, Portfolio" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-white transition-colors duration-500">
        <Loader />
        <Navbar />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ResumeSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
