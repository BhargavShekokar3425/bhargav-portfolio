import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Cloud, Zap, Globe, Gamepad, Hammer, Cpu } from "lucide-react"; // <-- Added Gamepad
import { useState, useEffect, useRef } from "react";

const BEGINNER = 30;
const INTERMEDIATE = 70;
const EXPERT = 90;

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Software Engineering",
      icon: Hammer, // <-- use Hammer instead of Code
      skills: [
        { name: "Python", level: EXPERT },
        { name: "C/C++", level: EXPERT },
        { name: "Java", level: INTERMEDIATE },
        { name: "JavaScript", level: INTERMEDIATE },
        { name: "TypeScript", level: BEGINNER },
        { name: "Object Oriented Programming", level: EXPERT },
        { name: "Data Structures", level: INTERMEDIATE }
      ],
      color: "primary"
    },
    {
      title: "Machine Learning and Deep Learning",
      icon: Brain,
      skills: [
        { name: "Computer Vision", level: INTERMEDIATE },
        { name: "Natural Language Processing", level: INTERMEDIATE },
        { name: "Reinforcement Learning", level: BEGINNER },
        { name: "Generative AI", level: INTERMEDIATE },
        { name: "Transformers", level: BEGINNER },
        { name: "Hugging Face", level: INTERMEDIATE }
      ],
      color: "accent"
    },
    {
      title: "Libraries and Frameworks",
      icon: Code,
      skills: [
        { name: "NumPy", level: INTERMEDIATE },
        { name: "Pandas", level: INTERMEDIATE },
        { name: "Matplotlib", level: INTERMEDIATE },
        { name: "Seaborn", level: INTERMEDIATE },
        { name: "Scikit-learn", level: INTERMEDIATE },
        { name: "TensorFlow", level: INTERMEDIATE },
        { name: "PyTorch", level: INTERMEDIATE },
        { name: "Langchain", level: BEGINNER },
        { name: "Vector Stores", level: BEGINNER }
      ]

    },
    {
      title: "Database & Systems",
      icon: Database,
      skills: [
        { name: "MySQL", level: INTERMEDIATE },
        { name: "MongoDB", level: INTERMEDIATE },
        { name: "SQLite", level: BEGINNER }
      ],
      color: "primary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Google Cloud", level: BEGINNER },
        { name: "Firebase", level: BEGINNER },
        { name: "API deployment", level: INTERMEDIATE },
        { name: "Version control (Git/GitHub)", level: EXPERT },
        { name: "Containerized services (Docker)", level: BEGINNER }
      ],
      color: "accent"
    },
    {
      title: "Web Development - Languages and Frameworks",
      icon: Gamepad,
      skills: [
        { name: "HTML", level: INTERMEDIATE },
        { name: "CSS", level: INTERMEDIATE },
        { name: "Node.js", level: INTERMEDIATE },
        { name: "RESTful APIs", level: INTERMEDIATE },
        { name: "Json Web Token(JWT)", level: BEGINNER },
        { name: "WebSockets", level: BEGINNER },
        { name: "Gradio", level: BEGINNER },
        { name: "Streamlit", level: BEGINNER }
      ]
    },
    {
      title: "Web Development - Frontend and Backend",
      icon: Globe,
      skills: [
        { name: "React", level: INTERMEDIATE },
        { name: "Express.js", level: INTERMEDIATE },
        { name: "Flask API", level: INTERMEDIATE },
        { name: "Next.js", level: BEGINNER },
        { name: "FastAPI", level: INTERMEDIATE },
        { name: "Django", level: BEGINNER },
        { name: "Next.js", level: BEGINNER },

      ],
      color: "primary"
    },
    {
      title: "Operating Systems",
      icon: Cpu,
      skills: [
        { name: "Linux", level: INTERMEDIATE },
        { name: "Windows", level: INTERMEDIATE },
        { name: "MacOS", level: BEGINNER }
      ],
      color: "accent"
    }
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
            <Card key={category.title} className="card-hover p-6 animate-scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level === EXPERT ? "Expert" : skill.level === INTERMEDIATE ? "Intermediate" : "Beginner"}
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div className={`skill-progress ${category.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/80' : 'bg-gradient-to-r from-accent to-accent/80'}`} style={{
                        width: inView ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1 + skillIndex * 0.05}s`
                      }} />
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
              // Programming Languages
              "C", "C++", "Python", "Java", "JavaScript",
              // Web Development
              "HTML", "CSS", "React.js", "Node.js", "REST APIs", "Streamlit", "Flask", "Gradio",
              // Frameworks & Libraries
              "PyTorch", "TensorFlow", "Hugging Face", "Transformers", "Scikit-learn", "Scipy", "NumPy", "OpenCV", "FAISS",
              // Tools & Services
              "Git", "GitHub", "Google Cloud", "Firebase",
              // Databases
              "MySQL", "MongoDB", "Docker", "Langchain", "VectorDB", "FAISS", "LaTeX", "VS Code", "Figma"
            ].map((tech, index) => (
              <span key={tech} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default animate-fade-in" style={{
                animationDelay: `${index * 0.05}s`
              }}>
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