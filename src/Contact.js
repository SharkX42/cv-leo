import React from 'react';
import './Contact.css';
import {faEnvelope, faPhone, faAddressCard, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div id={"contact"} className={"elementBody"}>
            <div className={"elementBodyPadding"}>
                <h1>
                    <span>
                        Me contacter
                    </span>
                    <FontAwesomeIcon icon={faAddressCard} />
                </h1>
                <div id={"flexContact"}>
                    <div className={"flexLineContact"}>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} />
                            Par mail :
                        </div>
                        <a href={"mailto:leodelabre@gmail.com"}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            leodelabre@gmail.com
                        </a>
                    </div>
                    <div className={"flexLineContact"}>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} />
                            Par téléphone :
                        </div>
                        <a href={"tel:0785629700"}>
                            <FontAwesomeIcon icon={faPhone} />
                            07 85 62 97 00
                        </a>
                    </div>
                    <div className={"flexLineContact"}>
                        <div>
                            <FontAwesomeIcon icon={faArrowRight} />
                            Sur LinkedIn :
                        </div>
                        <a href={"https://fr.linkedin.com/in/l%C3%A9o-delabre-4535911ba"}>
                            <FontAwesomeIcon icon={faLinkedinIn}  />
                            Léo Delabre
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;