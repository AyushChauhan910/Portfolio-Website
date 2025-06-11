import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import { useEffect } from "react";


const About = () => {

    const [letterClass , setLetterClass] = useState('text-animate')
    useEffect(() => {
            const timeoutId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
            return () => clearTimeout(timeoutId);
        }, []);
    
    return (
        <div className = "container about-page">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', '\u00A0', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am Ayush Chauhan, a BITS Hyderabad Computer Science student with a passion for technology and innovation. 
                    I have a keen interest in Full Stack Development and Machine Learning, 
                    and I am always eager to learn new skills and technologies.
                </p>
                <p>
                    I have experience in building web applications using various technologies, 
                    and I enjoy working on projects that challenge me to think creatively and solve complex problems.
                </p>
                <p>
                    In my free time, I like to explore new technologies, work on personal projects, 
                    and contribute to open-source projects. I am also an avid reader and enjoy learning about new advancements in the tech industry.
                </p>

            </div>
        </div>
    )
}

export default About;
