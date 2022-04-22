import React from 'react';
import avatar from "./images/avatar.png"
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faDownload } from '@fortawesome/free-solid-svg-icons'

function download(){
    fetch('https://cdn.radiofrance.fr/s3/cruiser-production/2022/01/860bbad7-73da-43a8-897d-cfbe8951b40d/870x489_logo2022_transparent.jpg')
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want
            a.download = 'CV_DELABRE_LEO';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Erreur'));
}

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

                <button onClick={download}>
                    <FontAwesomeIcon icon={faDownload}  />
                    <div>Télécharger mon CV</div>
                </button>


                <div id={"separation"}></div>

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