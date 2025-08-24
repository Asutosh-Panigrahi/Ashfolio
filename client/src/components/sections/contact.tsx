import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asutoshp.000@gmail.com",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      iconColor: "text-emerald-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/asutosh-panigrahi",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-500"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Asutosh-Panigrahi",
      bgColor: "bg-gray-100 dark:bg-gray-900/30",
      iconColor: "text-gray-700 dark:text-gray-400"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", bgColor: "bg-blue-500 hover:bg-blue-600" },
    { icon: Github, href: "#", bgColor: "bg-gray-800 hover:bg-gray-900" },
    { icon: Mail, href: "#", bgColor: "bg-pink-500 hover:bg-pink-600" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 text-navy-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-emerald-500 font-poppins font-semibold">
            Let's Build Something Awesome Together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-navy-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, bgColor, iconColor }) => (
                <div key={title} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}>
                    <Icon className={`${iconColor} w-6 h-6`} />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-navy-900 dark:text-white">
                      {title}
                    </h4>
                    <p className="text-charcoal-500 dark:text-gray-400">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-charcoal-500">
              <h4 className="font-poppins font-semibold mb-4 text-navy-900 dark:text-white">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, bgColor }, index) => (
                  <a
                    key={index}
                    href={href}
                    className={`w-10 h-10 ${bgColor} text-white rounded-lg flex items-center justify-center transition-colors duration-300`}
                    data-testid={`social-link-${index}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-white dark:bg-charcoal-500 rounded-xl shadow-lg border border-gray-200 dark:border-charcoal-500">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-poppins font-medium text-navy-900 dark:text-white mb-2">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal-500 border-2 border-emerald-500 dark:border-emerald-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 text-charcoal-900 dark:text-white"
                      placeholder="Your Name"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-poppins font-medium text-navy-900 dark:text-white mb-2">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal-500 border-2 border-emerald-500 dark:border-emerald-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 text-charcoal-900 dark:text-white"
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-poppins font-medium text-navy-900 dark:text-white mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal-500 border-2 border-emerald-500 dark:border-emerald-500 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300 text-charcoal-900 dark:text-white resize-none"
                      placeholder="Serious inquiries. Silly greetings. I accept both ;)"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-send-message"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
