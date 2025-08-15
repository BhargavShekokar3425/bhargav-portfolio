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
      title: "RadRG: Automated Chest X-ray Radiology Report Generation",
      description: "Cloud-ready multimodal system for automated radiology report generation, integrating image ingestion, preprocessing, inference, and formatted data serialization.",
      image: "🏥",
      icon: Brain,
      technologies: ["Python", "Vision Transformer", "Cloud Run", "Containerization", "FastAPI"],
      highlights: [
        "Improved throughput by 60%",
        "Scalable microservice architecture",
        "Reduced latency by 28%",
        "Persistent storage & async job execution"
      ],
      supervisor: "Prof. Bikash Santra",
      period: "Jan 2025 – May 2025",
      github: "#", // Add your report link if available
      demo: "#",
      category: "Healthcare AI",
      color: "primary"
    },
    {
      id: 2,
      title: "MediHelp Healthcare Platform",
      description: "Microservice-based healthcare platform supporting real-time ambulance dispatch, appointment scheduling, and encrypted doctor-patient consultations.",
      image: "💡",
      icon: Database,
      technologies: ["Python", "Microservices", "API", "Cloud", "Security"],
      highlights: [
        "Boosted reliability by 27%",
        "Cut emergency response time by 18%",
        "Optimized data modeling",
        "Encrypted consultations"
      ],
      supervisor: "Prof. Romi Banerjee",
      period: "Feb 2025 – Apr 2025",
      github: "https://github.com/BhargavShekokar3425/medihelppvt", // Add your GitHub link
      demo: "#",
      category: "Healthcare Platform",
      color: "accent"
    },
    {
      id: 3,
      title: "AlgoViz: Interactive ML Visualization Platform",
      description: "Interactive visual analytics tool supporting 10+ algorithms with dynamic parameter tuning and live classroom demonstration.",
      image: "📊",
      icon: Zap,
      technologies: ["Python", "Google Cloud", "Firestore", "React"],
      highlights: [
        "Supports 10+ ML algorithms",
        "Dynamic parameter tuning",
        "Live demo for IITJ faculty",
        "Cloud backend with Firestore"
      ],
      supervisor: "Prof. Anand Mishra",
      period: "Feb 2025 – Apr 2025",
      github: "https://github.com/BhargavShekokar3425/AlgoViz", // Add your GitHub link
      demo: "#",   // Add your live demo link
      category: "ML Visualization",
      color: "primary"
    },
    {
      id: 4,
      title: "Optimizing Aggregate Queries via Segment Trees",
      description: "Modular SQL-like engine enabling rapid aggregate queries using Segment Trees and lazy propagation for range updates.",
      image: "⚡",
      icon: Database,
      technologies: ["Python", "SQL", "Segment Trees", "Algorithm Design"],
      highlights: [
        "Rapid SUM, AVG, XOR queries",
        "Lazy propagation for range updates",
        "Cut query latency by 80% on large datasets"
      ],
      supervisor: "Prof. Dip Sankar Banerjee",
      period: "Oct 2024 – Dec 2024",
      github: "https://github.com/BhargavShekokar3425/Group2-G4", // Add your GitHub link
      demo: "#",
      category: "Database Systems",
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

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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