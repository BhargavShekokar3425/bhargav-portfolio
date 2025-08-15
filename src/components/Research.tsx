import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Video, Leaf, ExternalLink, CheckCircle } from "lucide-react";

const researchExperiences = [
	{
		title: "Research Intern, Generative AI & Computer Vision",
		intro: "Architected a high-performance video processing pipeline to automate ingestion, transformation, and export of 300+ driving videos leveraging Conditional Diffusers and ControlNet architecture.",
		highlights: [
			"Modular pipeline for scalability and reusability",
			"Concurrent frame-processing and caching strategies cut runtime by 35%",
			"Deterministic, reproducible outputs across environments",
			"Automated pre/post-processing, logging, and error recovery with Python and OpenCV"
		],
		supervisor: "Prof. C. Krishna Mohan",
		location: "IIT Hyderabad",
		period: "May 2025 – Jul 2025",
		technologies: [
			"Python", "Conditional Diffusers", "ControlNet", "OpenCV"
		],
		icon: Video,
		color: "primary",
		certificate: "https://drive.google.com/file/d/1bIPEhTL3jLKOHUmzvemN6rqqhsernVU4/view?usp=drive_link"
	},
	{
		title: "High Resolution Lunar Elemental Mapping",
		intro: "Prototyped a mission-critical, event-driven pipeline for ISRO, automating data ingestion and powering a deep learning upscaler and real-time subpixel viewer.",
		highlights: [
			"10× deep learning upscaler and 12× resolution enhancement",
			"Python/MySQL backend reduced data latency by 33%",
			"Digital Twin prototype simulates future mapping results for optimized data collection"
		],
		event: "Inter IIT Tech Meet 13.0",
		location: "IIT Bombay",
		period: "Oct 2024 – Dec 2024",
		technologies: [
			"Python", "MySQL", "Deep Learning", "Digital Twin", "Data Analysis","Kriging Interpolation", "Data Visualisation", "Big Data Handling"
		],
		icon: Brain,
		color: "accent",
		certificate: "https://drive.google.com/file/d/1vvgY_YN0x0wU9crUdYp4kTOUYiDyApcp/view?usp=sharing"
	},
	{
		title: "Summer Research Intern",
		intro: "Crafted and streamlined a real-time sensor data acquisition and mapping pipeline, integrating diverse hardware feeds into a unified, timestamp-synchronized data stream.",
		highlights: [
			"Embedded hardware–software interface modules in Python and C++",
			"Custom input filters and calibration routines",
			"Managed data serialization for long-term storage"
		],
		supervisor: "Prof. Surya Durbha",
		location: "IIT Bombay",
		period: "May 2024 – Jul 2024",
		technologies: [
			"Python", "C++", "Sensor Data", "Calibration"
		],
		icon: Leaf,
		color: "primary",
		certificate: "https://drive.google.com/file/d/1LOH6F23j2RD4C_gD1i0qEkro3NohRCLE/view?usp=sharing"
	}
];

const Research = () => (
	<section id="research" className="py-20 bg-secondary/30">
		<div className="container mx-auto px-4">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold mb-4 text-gradient">Research Experience</h2>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
					Projects and collaborations under academic supervision.
				</p>
			</div>
			<div className="grid-portfolio">
				{researchExperiences.map((exp, idx) => (
					<Card
						key={exp.title}
						className="card-hover overflow-hidden h-full flex flex-col animate-scale-in"
						style={{ animationDelay: `${idx * 0.1}s` }}
					>
						{/* Header */}
						<div className="p-6 pb-4">
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-3">
									<div className={`p-3 rounded-xl text-2xl bg-gradient-to-br ${
										exp.color === 'primary'
											? 'from-primary/20 to-primary/10'
											: 'from-accent/20 to-accent/10'
									}`}>
										<exp.icon className={`w-6 h-6 ${
											exp.color === 'primary' ? 'text-primary' : 'text-accent'
										}`} />
									</div>
									<div>
										<h3 className="text-lg font-semibold">{exp.title}</h3>
										<Badge variant="secondary" className="text-xs mt-1">
											{exp.period}
										</Badge>
									</div>
								</div>
								<Button
									asChild
									size="icon"
									variant="ghost"
									className="rounded-full"
									title="View Certificate"
								>
									<a
										href={exp.certificate}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="w-5 h-5 text-accent" />
									</a>
								</Button>
							</div>
							<div className="mb-2 text-muted-foreground text-sm">
								{exp.event ? (
									<span className="font-medium">Event:</span>
								) : (
									<span className="font-medium">Supervisor:</span>
								)} {exp.event || exp.supervisor}
							</div>
							<div className="mb-2 text-muted-foreground text-sm">
								<span className="font-medium">Location:</span> {exp.location}
							</div>
							{/* Intro */}
							<p className="text-muted-foreground text-sm leading-relaxed mb-4">
								{exp.intro}
							</p>
							{/* Highlights */}
							<div className="mb-4">
								<h4 className="font-semibold text-sm mb-2 text-foreground">Key Highlights</h4>
								<ul className="space-y-2">
									{exp.highlights.map((point, idx2) => (
										<li key={idx2} className="flex items-start gap-2 text-xs text-muted-foreground">
											<CheckCircle className={`w-4 h-4 mt-0.5 ${exp.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* Technologies */}
						<div className="px-6 pb-4 flex-grow">
							<div className="flex flex-wrap gap-2">
								{exp.technologies.map((tech, idx3) => (
									<Badge
										key={tech}
										variant="outline"
										className="text-xs px-2 py-1"
									>
										{tech}
									</Badge>
								))}
							</div>
						</div>
						{/* Certificate Button (for mobile/fallback) */}
						<div className="p-6 pt-0 mt-auto block md:hidden">
							<Button
								asChild
								size="sm"
								variant="outline"
								className="w-full"
							>
								<a
									href={exp.certificate}
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="w-4 h-4 mr-2" />
									View Certificate
								</a>
							</Button>
						</div>
					</Card>
				))}
			</div>
		</div>
	</section>
);

export default Research;