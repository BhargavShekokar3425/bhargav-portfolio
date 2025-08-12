import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";
import profileImage from "@/assets/profile-bhargav.jpg";

const About = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "IIT Jodhpur",
      period: "2023 – Present",
      grade: "CGPA 8.01",
      icon: GraduationCap,
    },
    {
      degree: "Senior Secondary (CBSE)",
      institution: "New Bombay City School",
      period: "2023",
      grade: "94%",
      icon: Award,
    },
    {
      degree: "Secondary (ICSE)",
      institution: "Podar International School",
      period: "2021",
      grade: "97%",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a hands-on approach to learning and building
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science and Engineering undergraduate at IIT Jodhpur with a strong 
                foundation in software engineering, machine learning, and high-performance system design. 
                My approach is hands-on and iterative — learning by building, refining for scalability, 
                and focusing on robustness and low-latency design.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                From developing generative AI pipelines to optimizing database query engines, 
                I thrive on creating systems that not only work but work efficiently at scale. 
                My experience spans across Python, C++, machine learning frameworks, and cloud platforms, 
                with a particular interest in real-time data processing and system optimization.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving deep into research papers on distributed systems and AI architectures.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8.01</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3rd</div>
                <div className="text-sm text-muted-foreground">ISRO Challenge</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            
            {education.map((item, index) => (
              <Card key={index} className="card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.degree}</h4>
                    <p className="text-muted-foreground mb-2">{item.institution}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} />
                        {item.period}
                      </div>
                      <div className="font-medium text-accent">{item.grade}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Image */}
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Bhargav at work"
                  className="w-40 h-40 rounded-2xl object-cover border-2 border-border"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;