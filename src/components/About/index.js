import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import { useState } from "react";
import { useEffect } from "react";
import { faCss3, faGithub, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import './index.scss'


const About = () => {

    const [letterClass , setLetterClass] = useState('text-animate')
    useEffect(() => {
            const timeoutId = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
            return () => clearTimeout(timeoutId);
        }, []);
    
    return (
        <>
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
                    I have a keen interest in Full Stack Development, Artificial Intelligence and Machine Learning, 
                    and I am always eager to learn new skills and technologies.
                </p>
                <p>
                    I have experience in building web applications using various technologies, 
                    and I enjoy working on projects that challenge me to think creatively and solve complex problems.
                </p>
                <p>
                    In my free time, I like to explore new technologies and work on personal projects
                    . I am also an avid reader and enjoy learning about new advancements in the tech industry.
                </p>

            </div>

            <div className = "stage-cube-cont">
                <div className = "cubespinner">
                    <div className = "face1" >
                        <FontAwesomeIcon icon={faPython} color = "#ffd700" />

                    </div>

                    <div className = "face2" >
                        <FontAwesomeIcon icon={faHtml5} color = "#DD0031" />

                    </div>

                    <div className = "face3" >
                        <FontAwesomeIcon icon={faCss3} color = "#28A4D9" />

                    </div>

                    <div className = "face4" >
                        <FontAwesomeIcon icon={faReact} color = "#5ED4F4" />

                    </div>

                    <div className = "face5" >
                        <FontAwesomeIcon icon={faJsSquare} color = "#EFD81D" />

                    </div>

                    <div className = "face6" >
                        <FontAwesomeIcon icon={faGithub} color = "#000" />

                    </div>
                </div>
            </div>
            </div>
       </>
    )   
}

export default About;
