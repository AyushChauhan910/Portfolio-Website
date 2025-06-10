import { useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';

const Home = () => {
    const [letterClass , setLetterClass] = useState('text-animate')
    const nameArray = ['y', 'u', 's', 'h'];
    const jobArray = ['C', 'S', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']; 

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []);


    return(
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>
                
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I </span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
                </h1>

                <h2>
                at BITS Hyderabad
                <br /> <br /> <br/> <br />
                Full Stack Developer / ML Enthusiast</h2>
                <br />
                <Link to="/contact" className = 'flat-button'> CONTACT ME</Link>
            </div>

        </div>
    )

}


export default Home;