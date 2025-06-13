import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef() 

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_k50trvm',
                'template_tmo7566',
                refForm.current,
                'gPk957girgEoDKDfo'

            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message , try again.')
                }
            )

    }
    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm always excited to connect with fellow developers, collaborators, and anyone who shares a passion for
                    technology and innovation. Whether you have an opportunity, a question, a project idea, or just want to say
                    hello — feel free to reach out! I'm open to internships, freelance projects, and tech discussions related to
                    web development, machine learning, or anything that sparks creativity. You can use the form below or drop me
                    a message via email or LinkedIn. Looking forward to hearing from you!
                </p>
                <div className="contact-form">
                    <form ref = {refForm} onSubmit ={sendEmail} >
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className = "info-map">
                Ayush Chauhan,
                <br />
                India,
                <br />
                D1/86 , Janakpuri - 110058 <br />
                New Delhi<br />
                <span>talktoayushchauhan@gmail.com</span>
            </div>
            <div className = "map-wrap">

            </div>
        </div>
    );
};

export default Contact;
