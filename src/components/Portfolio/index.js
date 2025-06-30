import { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import pwebsite from '../../assets/images/pwebsite.png'
import mrs from '../../assets/images/mrs.png'
import nprd from '../../assets/images/nprd.png'
import chatbot from '../../assets/images/chatbot.png'
import food from '../../assets/images/food1.jpg'
import fantasy from '../../assets/images/fantasy.png'

const projects = [
  {
    title: "Football Fantasy App - Ongoing",
    description: "Premier League Fantasy App is an ongoing, full-stack web application that lets users create their own fantasy football teams using real Premier League players, track fixtures, and compete on leaderboards. It features live data integration via the Football-Data.org API, team management within a budget, user authentication, and a responsive UI built with Next.js. The project demonstrates skills in API integration, backend and frontend development, and deployment using free hosting services",
    tech: ["Next.js", "Express.js","PostgreSQL","Node.js","JWT (JSON Web Tokens)","API Integration","Javascript"],
    image: fantasy,
    code: "https://github.com/AyushChauhan910/premier-league-fantasy-app"
  },
  {
    title: "MERN - Food App",
    description: "MERN-FoodApp is a full-stack food delivery web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse menus, manage their cart, and place orders online, while providing an admin panel for restaurant owners to manage menus and orders. Key features include secure user authentication, responsive design, and a clean separation between frontend and backend via RESTful APIs",
    tech: ["MongoDB", "Express.js","React.js","Node.js","JWT (JSON Web Tokens)","TailwindCSS","Javascript"],
    image: food,
    demo: "https://mern-food-app-mu.vercel.app/",
    code: "https://github.com/AyushChauhan910/MERN-FoodApp"
  },
  {
    title: "Financial Analysis Chatbot",
    description: "Financial Analysis Chatbot is a Python-based tool that answers financial questions about Microsoft, Tesla, and Apple using data from their SEC filings. It features both a command-line and web interface, supports six core queries, and demonstrates robust data handling and error management.",
    tech: ["Python", "Flask"],
    image: chatbot,
    code: "https://github.com/AyushChauhan910/Financial_Analysis_Chatbot"
  },

  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience as a developer. Built with React and SCSS, featuring responsive design and animated UI",
    tech: ["React", "JavaScript", "SCSS", "HTML5", "Responsive Design"],
    image: pwebsite,
    demo: "https://portfolio-website-chi-ebon-13.vercel.app/",
    code: "https://github.com/AyushChauhan910/Portfolio-Website"
  },
  {
    title: "Music Recommendation System",
    description: "A machine learning project that recommends songs to users based on their listening history and preferences. Features data cleaning, feature engineering, and both content-based and collaborative filtering algorithms.",
    tech: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "matplotlib"],
    image: mrs,
    demo: "https://nbviewer.org/github/AyushChauhan910/ML_Project---Music_Recommendation_System/blob/main/Music_recommendation_system.ipynb",
    code: "https://github.com/AyushChauhan910/ML_Project---Music_Recommendation_System"
  },

  {
    title: "NOVA Pharmacy Relational Database",
    description: "A comprehensive SQL database project designed for “NOVA”, a chain of pharmacies. The schema models patients, doctors, pharmaceutical companies, drugs, pharmacies, prescriptions, and contracts, supporting complex relationships and real-world pharmacy operations. To see the live demo , click on the button and copy the code from the github repo.",
    tech: ["SQL", "Relational Database Design"],
    image: nprd,
    demo: "https://livesql.oracle.com/next/",
    code: "https://github.com/AyushChauhan910/NOVA-pharmacy-relational-database"
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
      <div className="page-title-wrapper">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Portfolio".split("")}
          idx={15}
        />
      </h1>
      </div>
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
