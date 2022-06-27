import React from 'react';
import './About.css';

function About() {
    return (
        <div id={"about"} className={"elementBody"}>
            <div id={"cont"} className={"elementBodyPadding"}>
                <h1>A propos de moi</h1>
                <div className={"justifyText"}>Diplômé en septembre 2022 de l'<strong>école d'ingénieur en informatique ISIMA</strong> - Institut Supérieur d'Informatique, de Modélisation et de leurs Applications, spécialité <strong>Génie Logiciel et Système d'information</strong>, je recherche un emploi dans le domaine du <strong>développement d'applications web ou mobiles</strong> à partir de <strong>janvier 2023</strong>. </div>
            </div>
        </div>
    )
}

export default About;