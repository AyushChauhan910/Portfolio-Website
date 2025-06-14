import { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const projects = [
  {
    title: "Music Recommendation System",
    description: "A machine learning project that recommends songs to users based on their listening history and preferences. Features data cleaning, feature engineering, and both content-based and collaborative filtering algorithms.",
    tech: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "matplotlib"],
    image: "https://via.placeholder.com/300x180?text=Weather+App",
    demo: "https://nbviewer.org/github/AyushChauhan910/ML_Project---Music_Recommendation_System/blob/main/Music_recommendation_system.ipynb",
    code: "https://github.com/AyushChauhan910/ML_Project---Music_Recommendation_System"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience as a developer. Built with React and SCSS, featuring responsive design and animated UI",
    tech: ["React", "JavaScript", "SCSS", "HTML5", "Responsive Design"],
    image: "https://via.placeholder.com/300x180?text=Portfolio+Site",
    demo: "#",
    code: "#"
  },
  {
    title: "Chat App",
    description: "A real-time chat application using Socket.IO.",
    tech: ["React", "Node.js", "Socket.IO"],
    image: "https://via.placeholder.com/300x180?text=Chat+App",
    demo: "#",
    code: "#"
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Portfolio".split("")}
          idx={15}
        />
      </h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
