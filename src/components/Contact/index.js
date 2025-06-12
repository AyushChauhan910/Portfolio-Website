import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Contact = () => {
    const [letterClass , setLetterClass] = useState('text-animate')
        useEffect(() => {
                const timeoutId = setTimeout(() => {
                    setLetterClass('text-animate-hover');
                }, 3000);
                return () => clearTimeout(timeoutId);
            }, []);

            
    
    return(
        <>
        <div className = "container contact-page">
            <div className = "text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass = {letterClass}
                        strArray = {['C','o','n','t','a','c','t',' ','M','e']}
                        idx = {15}
                    />
                </h1>
                <p>
                   I'm always excited to connect with fellow developers, collaborators, and anyone who shares a passion for technology 
                   and innovation. Whether you have an opportunity, a question, a project idea, or just want to say hello — feel free 
                   to reach out! I'm open to internships, freelance projects, and tech discussions related to web development, 
                   machine learning, or anything that sparks creativity. You can use the form below or drop me a message via email or 
                   LinkedIn. Looking forward to hearing from you!
                </p>
                <div className = "contact-form">
                    <form>
                        <ul>
                            <li className = "half">
                                < input type = "text" name = "name" placeholder = "Name" required />
                            </li>
                            <li className = "half">
                                < input type = "email" name = "email" placeholder = "Email" required />
                            </li>
                            <li>
                                < input type = "text" name = "subject" placeholder = "Subject" required />
                            </li>
                            <li>
                                < input type = "text" name = "message" placeholder = "Message" required />
                            </li>
                            <li>
                                < input type = "submit" className = "flat-button" value = "SEND" required />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;