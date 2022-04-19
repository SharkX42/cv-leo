import avatar from "./images/avatar.png"
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGitlab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Home(){
    return(
        <div className={"flexLine"} id={"home"}>
            <div id={"picture"}>
                <img src={avatar} alt="me"/>
            </div>
            <div id={"me"}>
                <p>
                    <span id={"first"}>
                      Léo
                    </span>
                    <span id={"second"}>
                      Delabre
                    </span>
                </p>
                <div id={"desc"}>
                    Ingénieur en informatique - Alternant développeur Java chez CGI
                </div>

                <div id={"separation"}>

                </div>

                <div id={"icons"}>
                    <FontAwesomeIcon icon={faGithub}  />
                    <FontAwesomeIcon icon={faLinkedinIn}  />
                    <FontAwesomeIcon icon={faPhone} />
                </div>
            </div>
        </div>
    );
}

export default Home;