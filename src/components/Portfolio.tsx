import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  ExternalLink, 
  Award, 
  Zap, 
  Brain, 
  Database,
  Video,
  Leaf
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Generative AI Video Pipeline",
      description: "End-to-end pipeline for generating high-quality videos using advanced AI models with optimized rendering and processing.",
      image: "🎬",
      icon: Video,
      technologies: ["Python", "PyTorch", "FastAPI", "Redis", "Docker"],
      metrics: ["40% faster processing", "5GB+ video handling", "Real-time preview"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Machine Learning",
      color: "primary"
    },
    {
      id: 2,
      title: "DeepWeed Detection System",
      description: "Computer vision system for agricultural weed detection using deep learning with 95%+ accuracy for precision farming.",
      image: "🌱",
      icon: Leaf,
      technologies: ["TensorFlow", "OpenCV", "Python", "Flask", "SQLite"],
      metrics: ["95%+ accuracy", "Real-time detection", "Mobile compatible"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Computer Vision",
      color: "accent"
    },
    {
      id: 3,
      title: "RadRG Radiology Report Generator",
      description: "AI-powered system for automated radiology report generation from medical images with clinical accuracy validation.",
      image: "🏥",
      icon: Brain,
      technologies: ["Hugging Face", "PyTorch", "FastAPI", "PostgreSQL", "React"],
      metrics: ["Clinical accuracy", "60% time saved", "HIPAA compliant"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Healthcare AI",
      color: "primary"
    },
    {
      id: 4,
      title: "ISRO Lunar Mapping Challenge",
      description: "3rd place national winner - Advanced lunar terrain mapping system using satellite imagery and machine learning algorithms.",
      image: "🌙",
      icon: Award,
      technologies: ["Python", "Satellite Imagery", "ML", "GIS", "NumPy"],
      metrics: ["3rd place nationally", "Terrain classification", "High precision"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Space Tech",
      color: "accent",
      award: true
    },
    {
      id: 5,
      title: "Aggregate Query Optimization Engine",
      description: "High-performance database query optimizer reducing execution time by 70% for complex aggregate operations.",
      image: "⚡",
      icon: Database,
      technologies: ["C++", "SQL", "Algorithm Design", "Performance Tuning"],
      metrics: ["70% faster queries", "Memory efficient", "Scalable design"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Database Systems",
      color: "primary"
    },
    {
      id: 6,
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization with support for millions of data points and low-latency updates.",
      image: "📊",
      icon: Zap,
      technologies: ["React", "Node.js", "WebSocket", "D3.js", "MongoDB"],
      metrics: ["<100ms latency", "1M+ data points", "Real-time updates"],
      github: "https://github.com/BhargavShekokar3425",
      demo: "#",
      category: "Data Visualization",
      color: "accent"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions spanning AI, systems optimization, and real-time applications
          </p>
        </div>

        <div className="grid-portfolio">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="card-hover overflow-hidden h-full flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl text-2xl bg-gradient-to-br ${
                      project.color === 'primary' 
                        ? 'from-primary/20 to-primary/10' 
                        : 'from-accent/20 to-accent/10'
                    }`}>
                      <project.icon className={`w-6 h-6 ${
                        project.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        {project.award && (
                          <Award className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-3xl">{project.image}</div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} />
                      <span className="text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                  >
                    <a 
                      href={project.github} 
                      className="flex items-center justify-center gap-2 w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 group ${
                      project.color === 'primary' ? 'btn-hero' : 'bg-accent hover:bg-accent/90'
                    }`}
                  >
                    <a 
                      href={project.demo} 
                      className="flex items-center justify-center gap-2 w-full"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border inline-block">
            <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Follow my GitHub for the latest updates.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline">
                <a 
                  href="https://github.com/BhargavShekokar3425" 
                  className="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  View All Projects
                </a>
              </Button>
              <Button className="btn-hero">
                <a href="#contact" className="flex items-center gap-2">
                  Collaborate With Me
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;