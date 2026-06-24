import { useEffect, useState, useRef } from "react";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const media = [
    ...project.images.map((img) => ({ type: "image", src: img })),
    ...(project.video ? [{ type: "video", src: project.video }] : []),
  ];

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the card is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Image Slider Logic
  useEffect(() => {
    if (media.length > 0 && media[current]?.type === "image") {
      const timer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % media.length);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [current, media]);

  return (
    <div 
      ref={cardRef} 
      className={`project-card ${isVisible ? "reveal" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }} // Staggers the animation
    >
      <div className="project-media">
        {media.length > 0 && (
          media[current].type === "image" ? (
            <img src={media[current].src} alt={project.title} />
          ) : (
            <video src={media[current].src} autoPlay muted playsInline onEnded={() => setCurrent(0)} />
          )
        )}
      </div>

      <div className="project-content">
        <span className="tech-badge">{project.tech}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Smart Bill Hub",
      description: "A centralized billing system developed using Python and SQL. It automates bill generation, invoice management, payment tracking, and reporting.",
      tech: "Python • SQL",
      images: ["/projects/smart-bill/1.png", "/projects/smart-bill/2.jpeg"],
      video: null,
    },
    {
      title: "Data Analysis System",
      description: "A large-scale dataset aggregation and cleaning pipeline that processes over 3 lakh records, featuring a visual workflow implementation.",
      tech: "Python • Pandas • NumPy",
      images: ["/projects/data-analysis/1.png"],
      video: null,
    },
    {
      title: "World Atlas Web Application",
      description: "A dynamic web dashboard featuring reusable components and integrated data structures to display global metrics and geographical information.",
      tech: "React.js • JavaScript",
      images: ["/projects/world-atlas/1.png"],
      video: null,
    },
    {
      title: "UtilityHub",
      description: "A multi-module utility application featuring a responsive grid interface containing various calculation and unit conversion tools.",
      tech: "React.js • CSS",
      images: ["/projects/utility-hub/1.png"],
      video: null,
    },
    {
      title: "IoT Bootcamp",
      description: "Arduino-based IoT projects including LED Control, Traffic Signal System, Servo Motor Control and Ultrasonic Distance Measurement.",
      tech: "Arduino • IoT",
      images: ["/projects/iot/1.png", "/projects/iot/2.png", "/projects/iot/3.png"],
      video: "/projects/iot/video.mp4",
    },
  ];

  return (
    <section className="projects-section container" id="projects">
      <div className="projects-header">
        <h2>Portfolio</h2>
        <p>A collection of my recent academic and personal projects.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;