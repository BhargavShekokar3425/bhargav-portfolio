import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-bhargav-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-accent font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-gradient">Bhargav</span>
                <br />
                Shekokar
              </h1>
              <p className="text-xl text-muted-foreground">
                Computer Science & Engineering Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Building systems that are fast, reliable, and built to last. 
              Passionate about software engineering, machine learning, and 
              high-performance system design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="btn-hero">
                <a href="#portfolio" className="flex items-center gap-2">
                  View My Work
                  <ExternalLink size={16} />
                </a>
              </Button>
              <Button variant="outline" className="btn-ghost">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/BhargavShekokar3425" 
                className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/bhargav-shekokar" 
                className="p-3 bg-secondary rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:b23cs1008@iitj.ac.in" 
                className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-glow"></div>
              <div className="relative bg-card p-2 rounded-full">
                <img
                  src={profileImage}
                  alt="Bhargav Shekokar"
                  className="w-80 h-80 rounded-full object-cover border-4 border-border"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;