import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return(
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>Hi, <br /> I am 
                <img src={LogoTitle} alt="developer" />
                yush Chauhan
                <br />
                </h1>
                <h2>
                CS Student
                at BITS Hyderabad
                </h2>
                <h2>Full Stack Developer / ML Enthusiast</h2>
                <br />
                <Link to="/contact" className = 'flat-button'> CONTACT ME</Link>
            </div>

        </div>
    )

}


export default Home;