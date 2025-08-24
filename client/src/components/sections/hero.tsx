import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-emerald-500/10 dark:from-charcoal-900 dark:to-navy-900 opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in pt-20">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-navy-500/20 dark:from-emerald-500/30 dark:to-navy-500/30 rounded-full blur-lg"></div>
            <img
              src="https://drive.google.com/file/d/1hUeqjPpXkIorZfc_5iwDyFA9sF01LjPS/view?usp=sharing"
              alt="Asutosh Panigrahi - Profile Photo"
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-charcoal-900 relative z-10"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4 bg-gradient-to-r from-navy-900 to-emerald-500 dark:from-white dark:to-emerald-500 bg-clip-text text-transparent">
            Asutosh Panigrahi
          </h1>
          
          <p className="text-xl md:text-2xl text-charcoal-500 dark:text-gray-400 mb-6 font-poppins font-medium">
            UI/UX Designer • Salesforce Developer • Frontend Explorer
          </p>
          
          <p className="text-lg text-charcoal-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Blending colors and code to build things people actually enjoy using.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("#work")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500 hover:!text-white px-8 py-3 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-charcoal-500 dark:text-gray-400 w-8 h-8" />
      </div>
    </section>
  );
}
