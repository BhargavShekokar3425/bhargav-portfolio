import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Cloud, Zap, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Software Engineering",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Algorithm Design", level: 95 },
        { name: "System Architecture", level: 85 },
      ],
      color: "primary",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Hugging Face", level: 80 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP", level: 80 },
        { name: "ML Pipelines", level: 90 },
      ],
      color: "accent",
    },
    {
      title: "Database & Systems",
      icon: Database,
      skills: [
        { name: "SQL Optimization", level: 90 },
        { name: "NoSQL", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "API Design", level: 85 },
        { name: "Performance Tuning", level: 90 },
        { name: "Data Processing", level: 85 },
      ],
      color: "primary",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS/GCP", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Monitoring", level: 70 },
        { name: "Scalability", level: 85 },
        { name: "Load Balancing", level: 75 },
      ],
      color: "accent",
    },
    {
      title: "Frontend & Tools",
      icon: Globe,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Flask/FastAPI", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "Linux/Unix", level: 85 },
        { name: "Testing", level: 80 },
      ],
      color: "primary",
    },
    {
      title: "Performance & Optimization",
      icon: Zap,
      skills: [
        { name: "Low-latency Systems", level: 90 },
        { name: "Memory Management", level: 85 },
        { name: "Parallel Computing", level: 80 },
        { name: "Cache Optimization", level: 85 },
        { name: "Profiling", level: 80 },
        { name: "Benchmarking", level: 85 },
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable, and high-performance systems
          </p>
        </div>

        <div className="grid-skills">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-hover p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${
                  category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                }`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${
                          category.color === 'primary' 
                            ? 'bg-gradient-to-r from-primary to-primary/80' 
                            : 'bg-gradient-to-r from-accent to-accent/80'
                        }`}
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "C++", "JavaScript", "React", "Node.js", "PyTorch", 
              "TensorFlow", "Flask", "FastAPI", "SQL", "MongoDB", "Docker", 
              "AWS", "Git", "Linux", "Redis", "PostgreSQL", "REST APIs"
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;