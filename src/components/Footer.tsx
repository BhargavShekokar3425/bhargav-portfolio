import { Github, Linkedin, Mail, Code, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/BhargavShekokar3425",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/bhargav-shekokar",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:b23cs1008@iitj.ac.in",
      label: "Email"
    },
    {
      icon: Code,
      href: "https://leetcode.com/BhargavShekokar",
      label: "LeetCode"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gradient">Bhargav Shekokar</h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Computer Science & Engineering student at IIT Jodhpur, passionate about 
              building fast, reliable, and scalable systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>IIT Jodhpur, Rajasthan</p>
              <p>Available for remote work</p>
              <a 
                href="mailto:b23cs1008@iitj.ac.in"
                className="block hover:text-accent transition-colors duration-300"
              >
                b23cs1008@iitj.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Bhargav Shekokar. Made with
              <Heart size={14} className="text-primary" fill="currentColor" />
              using React & TypeScript
            </p>
            
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>Building the future, one line at a time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;