import { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import pwebsite from '../../assets/images/pwebsite.png'
import mrs from '../../assets/images/mrs.png'
import nprd from '../../assets/images/nprd.png'
import chatbot from '../../assets/images/chatbot.png'
import food from '../../assets/images/food1.jpg'
import fantasy from '../../assets/images/fantasy.png'
import floorplanner from '../../assets/images/floor-plan-icon.png'

const projects = [
  
  {
    title: "Music Recommendation System",
    description: "MusicFlow is a modern, responsive web application that leverages AI-driven content-based filtering to deliver personalized music recommendations. With a sleek dark-themed interface and smooth animations, users can search songs, artists, and genres in real time; rate and filter recommendations by mood (e.g., happy, sad, energetic); and enjoy an integrated mini music player with playback controls. Built for multilingual support, the platform adapts to English, Hindi, and Punjabi preferences, offering an engaging, mobile-friendly experience that learns from each interaction to suggest tracks perfectly suited to your tastes.",
    tech: ["React 18", "Flask", "Tailwind CSS", "Axios", "Pandas","Scikit-learn","NumPy","TF-IDF vectorization and cosine similarity (content-based filtering)","RESTful Flask endpoints"],
    image: mrs,
    demo: "https://music-recommendation-system-theta.vercel.app",
    code: "https://github.com/AyushChauhan910/Music-Recommendation-System"
  },

  {
    title: "Football Fantasy App",
    description: "Premier League Fantasy App is a full-stack web application that lets users create their own fantasy football teams using real Premier League players, track fixtures, and compete on leaderboards. It features live data integration via the Football-Data.org API, team management within a budget, user authentication, and a responsive UI built with React. The project demonstrates skills in API integration, backend and frontend development, and deployment using free hosting services",
    tech: ["Next.js", "Express.js","PostgreSQL","Node.js","JWT (JSON Web Tokens)","API Integration","Javascript"],
    image: fantasy,
    demo: "https://premier-league-fantasy-app.vercel.app/login",
    code: "https://github.com/AyushChauhan910/premier-league-fantasy-app"
  },

  {
    title: "Pharmacy Management System",
    description: "Pharmacy Management System is a full-stack web application for managing pharmacy operations efficiently. It features a responsive React frontend with Material-UI, secure JWT authentication, role-based access control, and real-time analytics using Chart.js. The Node.js/Express backend connects to MongoDB for data storage, supporting easy management of patients, drugs, doctors, and pharmacies with interactive dashboards and reporting.",
    tech: ["React", "Material UI","Chart.js","Node.js","Express.js","MongoDB","JWT (JSON Web Tokens)"],
    image: nprd,
    demo: "https://pharmacy-management-system-ten.vercel.app",
    code: "https://github.com/AyushChauhan910/Pharmacy-Management-System"
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
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience as a developer. Built with React and SCSS, featuring responsive design and animated UI",
    tech: ["React", "JavaScript", "SCSS", "HTML5", "Responsive Design"],
    image: pwebsite,
    demo: "https://portfolio-website-chi-ebon-13.vercel.app/",
    code: "https://github.com/AyushChauhan910/Portfolio-Website"
  },

  {
    title: "2-D Floor Planner",
    description: "2D Floor Planner is a user-friendly Java application for designing, editing, and visualizing room layouts from a top-down view. It lets users easily add, move, and resize rooms, walls, doors, and windows with intuitive drag-and-drop controls, and supports saving, loading, and exporting floor plans as images. The tool is ideal for quickly sketching out interior spaces for personal or educational use.",
    tech: ["Java", "Java Swing","Maven"],
    image: floorplanner,
    code: "https://github.com/AyushChauhan910/2D-Floor-Planner"
  },

  {
    title: "Financial Analysis Chatbot",
    description: "Financial Analysis Chatbot is a Python-based tool that answers financial questions about Microsoft, Tesla, and Apple using data from their SEC filings. It features both a command-line and web interface, supports six core queries, and demonstrates robust data handling and error management.",
    tech: ["Python", "Flask"],
    image: chatbot,
    code: "https://github.com/AyushChauhan910/Financial_Analysis_Chatbot"
  }
  
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
