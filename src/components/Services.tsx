import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Brain, 
  Workflow, 
  BarChart3, 
  Zap,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Algorithm & Backend Architecture",
      description: "Design and implement scalable backend systems with optimized algorithms for high-performance applications.",
      features: [
        "Custom algorithm development",
        "System architecture design",
        "Performance optimization",
        "Scalability planning"
      ],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Real-time Data Processing",
      description: "Build robust pipelines for processing large-scale data streams with low-latency requirements.",
      features: [
        "Stream processing systems",
        "Real-time analytics",
        "Event-driven architecture",
        "Performance monitoring"
      ],
      color: "accent"
    },
    {
      icon: Brain,
      title: "ML Pipeline Development",
      description: "End-to-end machine learning solutions from data preprocessing to model deployment in production.",
      features: [
        "Model development & training",
        "Pipeline automation",
        "Model deployment",
        "Performance monitoring"
      ],
      color: "primary"
    },
    {
      icon: Workflow,
      title: "API & Microservice Development",
      description: "Create robust, scalable APIs and microservices with comprehensive documentation and testing.",
      features: [
        "RESTful API design",
        "Microservice architecture",
        "API documentation",
        "Testing & validation"
      ],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboard Creation",
      description: "Build dynamic, responsive dashboards for data visualization and real-time monitoring.",
      features: [
        "Custom visualization",
        "Real-time updates",
        "Interactive components",
        "Mobile responsiveness"
      ],
      color: "primary"
    },
    {
      icon: Database,
      title: "Database Optimization",
      description: "Optimize database performance through query optimization, indexing strategies, and architectural improvements.",
      features: [
        "Query optimization",
        "Index design",
        "Performance tuning",
        "Schema optimization"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">My Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for your software engineering and machine learning needs
          </p>
        </div>

        <div className="grid-portfolio">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-hover p-8 h-full flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-grow">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${
                    service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                      }`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className={`w-full group ${
                  service.color === 'primary' 
                    ? 'hover:bg-primary hover:text-primary-foreground' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <a href="#contact" className="flex items-center justify-center gap-2 w-full">
                  Get Started
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-4">Have a Custom Project in Mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              I love tackling unique challenges and building custom solutions. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <Button className="btn-hero">
              <a href="#contact" className="flex items-center gap-2">
                Let's Discuss Your Project
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;