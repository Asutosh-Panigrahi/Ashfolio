import { GraduationCap, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    "UI/UX Design",
    "React.js",
    "Salesforce",
    "Python",
    "Figma",
    "Framer Motion"
  ];

  const highlights = [
    "Focus on Human-Computer Interaction",
    "Active in Technology Communities",
    "Cybersecurity Research Experience"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-charcoal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-navy-900 dark:text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-charcoal-500 dark:text-gray-400 leading-relaxed mb-6">
              I like to think of myself to be fluent in two languages: The Art of Design and The Logic of Code.

              As a UI/UX Designer and Salesforce & Frontend Developer, I shape ideas into experiences that are both intuitive and impactful. My canvas isn’t just pixels, It’s the systems and workflows that turn concepts into reality.
            </p>
            <p className="text-charcoal-500 dark:text-gray-400 leading-relaxed mb-6">
              For me, design is never decoration—it’s communication. Every layout, color, and interaction is a chance to guide, delight, and respect the user. Development gives those ideas a backbone, ensuring they don’t just look good in theory but thrive in practice.
              
              I’ve found my sweet spot in the space between creativity and technology. Some days I’m sketching wireframes that spark joy; other days I’m building them into working solutions. That balance—human needs on one side, technical precision on the other—is what drives me.
            </p>
            <p className="text-charcoal-500 dark:text-gray-400 leading-relaxed mb-6">
              At the end of the day, my goal is simple: design with empathy, build with clarity, and deliver experiences that feel effortless.
            </p>
            <div className="mb-6">
              <h4 className="font-poppins font-semibold mb-3 text-navy-900 dark:text-white">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-poppins font-semibold mb-6 text-navy-900 dark:text-white flex items-center">
                  <GraduationCap className="text-emerald-500 mr-3 w-6 h-6" />
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-poppins font-semibold text-navy-900 dark:text-white">
                      Bachelor of Technology
                    </h4>
                    <p className="text-emerald-500 font-medium">
                      Computer Science & Engineering
                    </p>
                    <p className="text-charcoal-500 dark:text-gray-400 text-sm">
                      NIST Berhampur
                    </p>
                    <p className="text-charcoal-500 dark:text-gray-400 text-sm">
                      2021 - 2025
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-charcoal-500">
                  <h4 className="font-poppins font-semibold mb-3 text-navy-900 dark:text-white">
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-charcoal-500 dark:text-gray-400 text-sm">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center">
                        <Check className="text-emerald-500 mr-2 w-4 h-4" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
