import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ExternalLink } from "lucide-react";

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<"projects" | "experience">("projects");

  const projects = [
    {
      title: "Rock Paper Scissors AI Game",
      description: "An intelligent game using Python and OpenCV that detects hand gestures in real-time and plays against AI opponents with advanced computer vision algorithms.",
      technologies: ["Python", "OpenCV", "Computer Vision"],
      gradient: "from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20",
      icon: "🎮"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and Framer Motion, showcasing both design aesthetics and development expertise with smooth animations.",
      technologies: ["React", "Framer Motion", "Responsive Design"],
      gradient: "from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
      icon: "💻"
    },
    {
      title: "E-commerce Platform",
      description: "Comprehensive e-commerce solution built.",
      technologies: ["UI/UX Design", "Figma", "User Research"],
      gradient: "from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
      icon: "🛒"
    },
    {
      title: "Music App UI/UX Concept",
      description: "Complete design case study for a music streaming application, featuring user research, wireframes, prototypes, and usability testing results.",
      technologies: ["UI/UX Design", "Figma", "User Research"],
      gradient: "from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20",
      icon: "🎵"
    }
  ];

  const experiences = [
    {
      title: "Salesforce Developer Intern",
      company: "Spikewell",
      period: "2025 - Present",
      description: "Contributing to the development of an enterprise e-commerce platform with focus on Salesforce automation, administrative functionalities, and custom development solutions.",
      achievements: [
        "Developed custom Salesforce automation workflows improving efficiency by 35%",
        "Implemented administrative features for platform management and user control",
        "Collaborated with cross-functional teams on e-commerce platform enhancements"
      ],
      badgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
    },
    {
      title: "Cybersecurity Intern",
      company: "Tata Power Southern Odisha Distribution Ltd.",
      period: "2024",
      description: "Gained hands-on experience in cybersecurity operations including risk assessment, incident response protocols, and network security testing within critical infrastructure environments.",
      achievements: [
        "Conducted comprehensive security risk assessments for critical infrastructure",
        "Participated in incident response procedures and security protocol development",
        "Performed network penetration testing and vulnerability assessments"
      ],
      badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
    }
  ];

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-navy-900 dark:text-white">
            My Work
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-charcoal-500 rounded-lg p-1">
            <Button
              variant={activeTab === "projects" ? "default" : "ghost"}
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-md font-poppins font-medium transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-emerald-500 text-white"
                  : "text-charcoal-500 dark:text-gray-400 hover:text-charcoal-900 dark:hover:text-white"
              }`}
              data-testid="tab-projects"
            >
              Projects
            </Button>
            <Button
              variant={activeTab === "experience" ? "default" : "ghost"}
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-2 rounded-md font-poppins font-medium transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-emerald-500 text-white"
                  : "text-charcoal-500 dark:text-gray-400 hover:text-charcoal-900 dark:hover:text-white"
              }`}
              data-testid="tab-experience"
            >
              Experience
            </Button>
          </div>
        </div>
        
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center`}>
                    <div className="text-4xl">{project.icon}</div>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-2 text-navy-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-500 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="text-emerald-500 hover:text-emerald-600 font-medium text-sm transition-colors duration-300 p-0"
                    data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    View Project <ExternalLink className="ml-1 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {activeTab === "experience" && (
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={experience.title}
                className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-navy-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-emerald-500 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <span className={`${experience.badgeColor} px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0 self-start`}>
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-charcoal-500 dark:text-gray-400 leading-relaxed mb-4">
                    {experience.description}
                  </p>
                  <ul className="space-y-2 text-charcoal-500 dark:text-gray-400 text-sm">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <Check className="text-emerald-500 mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
