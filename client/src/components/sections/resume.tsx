import { useState } from "react";
import { Code, Palette, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"developer" | "design">("developer");

  const handleDownload = (type: "developer" | "design") => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = `/resumes/${type}-resume.pdf`;
    link.download = `Asutosh_Panigrahi_${type === "developer" ? "Developer" : "Design"}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-charcoal-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-navy-900 dark:text-white">
            Resume
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-charcoal-500 rounded-lg p-1">
            <Button
              variant={activeTab === "developer" ? "default" : "ghost"}
              onClick={() => setActiveTab("developer")}
              className={`px-6 py-2 rounded-md font-poppins font-medium transition-all duration-300 ${
                activeTab === "developer"
                  ? "bg-emerald-500 text-white"
                  : "text-charcoal-500 dark:text-gray-400 hover:text-charcoal-900 dark:hover:text-white"
              }`}
              data-testid="tab-developer"
            >
              <Code className="mr-2 w-4 h-4" />
              Developer Resume
            </Button>
            <Button
              variant={activeTab === "design" ? "default" : "ghost"}
              onClick={() => setActiveTab("design")}
              className={`px-6 py-2 rounded-md font-poppins font-medium transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-emerald-500 text-white"
                  : "text-charcoal-500 dark:text-gray-400 hover:text-charcoal-900 dark:hover:text-white"
              }`}
              data-testid="tab-design"
            >
              <Palette className="mr-2 w-4 h-4" />
              Design Resume
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {activeTab === "developer" && (
            <Card className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500 overflow-hidden animate-slide-up">
              <div className="p-6 border-b border-gray-200 dark:border-charcoal-500">
                <h3 className="text-xl font-poppins font-semibold text-navy-900 dark:text-white flex items-center">
                  <Code className="text-emerald-500 mr-3 w-6 h-6" />
                  Developer Resume
                </h3>
                <p className="text-charcoal-500 dark:text-gray-400 text-sm mt-1">
                  Technical skills and development experience
                </p>
              </div>
              
              <div className="h-96 bg-gray-50 dark:bg-charcoal-900 p-6 overflow-y-auto">
                <div className="bg-white dark:bg-charcoal-500 rounded-lg p-6 text-xs leading-relaxed shadow-inner">
                  <div className="text-center mb-4 pb-4 border-b border-gray-200 dark:border-charcoal-500">
                    <h4 className="font-poppins font-bold text-lg text-navy-900 dark:text-white">
                      ASUTOSH PANIGRAHI
                    </h4>
                    <p className="text-emerald-500 font-medium">
                      Salesforce Developer • Frontend Engineer
                    </p>
                    <p className="text-charcoal-500 dark:text-gray-400">
                      asutosh.panigrahi@email.com | +91-XXXXX-XXXXX
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      TECHNICAL SKILLS
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p><strong>Languages:</strong> Python, JavaScript, HTML, CSS, SQL</p>
                      <p><strong>Frameworks:</strong> React.js, Node.js, Framer Motion</p>
                      <p><strong>Platforms:</strong> Salesforce, AWS, Git, Docker</p>
                      <p><strong>Databases:</strong> MySQL, MongoDB, Salesforce CRM</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      EXPERIENCE
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p><strong>Salesforce Developer Intern</strong> - Spikewell (2024-Present)</p>
                      <p className="text-xs">• E-commerce platform development and automation</p>
                      <p className="text-xs">• Custom Salesforce solutions and integrations</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      PROJECTS
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p><strong>Rock Paper Scissors AI</strong> - Python, OpenCV</p>
                      <p><strong>Portfolio Website</strong> - React, Framer Motion</p>
                      <p><strong>E-commerce Platform</strong> - Salesforce, Automation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-charcoal-900">
                <Button
                  onClick={() => handleDownload("developer")}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  data-testid="download-developer-resume"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Developer Resume
                </Button>
              </div>
            </Card>
          )}
          
          {activeTab === "design" && (
            <Card className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500 overflow-hidden animate-slide-up">
              <div className="p-6 border-b border-gray-200 dark:border-charcoal-500">
                <h3 className="text-xl font-poppins font-semibold text-navy-900 dark:text-white flex items-center">
                  <Palette className="text-emerald-500 mr-3 w-6 h-6" />
                  Design Resume
                </h3>
                <p className="text-charcoal-500 dark:text-gray-400 text-sm mt-1">
                  Creative portfolio and design experience
                </p>
              </div>
              
              <div className="h-96 bg-gray-50 dark:bg-charcoal-900 p-6 overflow-y-auto">
                <div className="bg-white dark:bg-charcoal-500 rounded-lg p-6 text-xs leading-relaxed shadow-inner">
                  <div className="text-center mb-4 pb-4 border-b border-gray-200 dark:border-charcoal-500">
                    <h4 className="font-poppins font-bold text-lg text-navy-900 dark:text-white">
                      ASUTOSH PANIGRAHI
                    </h4>
                    <p className="text-emerald-500 font-medium">
                      UI/UX Designer • Creative Technologist
                    </p>
                    <p className="text-charcoal-500 dark:text-gray-400">
                      asutosh.panigrahi@email.com | Portfolio: asutosh.design
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      DESIGN SKILLS
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p><strong>Design Tools:</strong> Figma, Adobe XD, Sketch, Photoshop</p>
                      <p><strong>Prototyping:</strong> Framer, InVision, Principle</p>
                      <p><strong>Specialties:</strong> User Research, Information Architecture</p>
                      <p><strong>Frontend:</strong> HTML, CSS, React, Animation Libraries</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      DESIGN PROJECTS
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p><strong>Music App UI/UX</strong> - Complete case study with user research</p>
                      <p className="text-xs">• User interviews, wireframes, high-fidelity prototypes</p>
                      <p><strong>E-commerce Platform</strong> - Enterprise UX design</p>
                      <p className="text-xs">• Information architecture and usability testing</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-poppins font-semibold text-navy-900 dark:text-white mb-2">
                      DESIGN PHILOSOPHY
                    </h5>
                    <div className="text-charcoal-500 dark:text-gray-400">
                      <p className="text-xs">
                        Human-centered design approach with focus on accessibility, usability, and aesthetic excellence. Passionate about creating meaningful digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-charcoal-900">
                <Button
                  onClick={() => handleDownload("design")}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  data-testid="download-design-resume"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Design Resume
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
