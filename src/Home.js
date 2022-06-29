import React from 'react';
import avatar from "./images/avatar.png"
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faDownload } from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap";

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

                <Button id={"buttonDownload"} href={"./files/CV_DELABRE_LEO.pdf"} download target={"_blank"}>
                        <FontAwesomeIcon icon={faDownload}  className={"fa-bounce"}/>
                        <div>Télécharger mon CV (.pdf)</div>
                </Button>


                <div id={"separation"}></div>

                <div id={"icons"}>
                    <a href={"https://github.com/SharkX42"} target={"_blank"}>
                        <FontAwesomeIcon icon={faGithub}  />
                    </a>
                    <a href={"https://fr.linkedin.com/in/l%C3%A9o-delabre-4535911ba"}>
                        <FontAwesomeIcon icon={faLinkedinIn}  />
                    </a>
                    <a href={"tel:0785629700"}>
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;