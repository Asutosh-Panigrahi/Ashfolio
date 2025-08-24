import { Home, User, Briefcase, FileText, Mail } from "lucide-react";

const navigationItems = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#work", icon: Briefcase, label: "Work" },
  { href: "#resume", icon: FileText, label: "Resume" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export function Navbar() {
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/20 dark:bg-charcoal-900/20 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border-2 border-white/30 dark:border-charcoal-500/30">
      <ul className="flex space-x-6">
        {navigationItems.map(({ href, icon: Icon, label }) => (
          <li key={href}>
            <button
              onClick={() => scrollToSection(href)}
              className="text-charcoal-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors duration-300"
              title={label}
              data-testid={`nav-${label.toLowerCase()}`}
            >
              <Icon className="w-5 h-5" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
