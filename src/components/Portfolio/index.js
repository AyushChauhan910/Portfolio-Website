import { useState , useEffect} from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";




const Portfolio = () => {
    
    const [letterClass , setLetterClass] = useState('text-animate')
        useEffect(() => {
                const timeoutId = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
                return () => clearTimeout(timeoutId);
            }, []);

    return (
      
        <div className = "container portfolio-page">
            <h1 className = "page-title"> 
                <AnimatedLetters
                  letterClass = {letterClass}
                  strArray = {"Portfolio".split("")}
                  idx={5}
                />
            </h1>

        </div>
        
    )

}

export default Portfolio;