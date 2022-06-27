import React from 'react';
import "./Element.css"
import {faCalendarDays, faLocationDot, faCircleArrowRight, faLink, faCode, faFutbol, faPersonBiking, faPersonRunning} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const myIcons = {
    faFutbol : faFutbol,
    faPersonBiking: faPersonBiking,
    faPersonRunning: faPersonRunning
}

function Element({title, picture, location, link, linkGit, dateFirst, dateEnd, description, details, technos, color, list, index, length}) {

    let usedTechnos;
    if(technos !== undefined) {
        usedTechnos = technos.map((element, index) =>
            <div key={`${element}-${index}`} id={"techno"} style={{backgroundColor : color, border: "solid 1px" + color}}>{element}</div>
        );
    }

    let listObject;
    if(list !== undefined) {
        listObject = list.map((element, index) =>
            <li key={`${element}-${index}`} id={"list"}>
                {
                    title === 'Sport' &&
                    <FontAwesomeIcon icon={myIcons[element.key]}/>
                }
                {
                    title !== 'Sport' &&
                    <span id={"keySpan"}>{element.key}</span>
                }
                <span>{element.value}</span>
            </li>
        );
    }

    return (
        <div>
            <div id={"element"}>
                <div id={"pictureElem"}>
                    <img src={images[picture]} alt={picture}/>
                </div>
                <div id={"contentElem"}>
                    <div id={"titleElem"}>{title}</div>
                    <div>
                        <div className={"flex"}>
                            {(dateEnd !== undefined) &&
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                {dateEnd !== undefined && dateFirst !== undefined && <div>{dateFirst} - {dateEnd}</div>}
                                {dateEnd !== undefined && dateFirst === undefined && <div>{dateEnd}</div>}

                            </div>
                            }
                            {location !== undefined &&
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faLocationDot}/>
                                <div>{location}</div>
                            </div>
                            }
                            {link !== undefined &&
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faLink}/>
                                <a href={link} target={"_blank"}>{link}</a>
                            </div>
                            }
                            {linkGit !== undefined &&
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faGithub}/>
                                <a href={linkGit} target={"_blank"}>{linkGit}</a>
                            </div>
                            }
                        </div>
                        <div id={"descriptionElem"}>{description}</div>
                        {details !== undefined &&
                        <div id={"flexDetails"}>
                            <div>
                                <FontAwesomeIcon icon={faCircleArrowRight} />
                            </div>
                            <div>{details}</div>
                        </div>
                        }
                        {technos !== undefined &&
                            <div className={"flexTech"}>
                                <FontAwesomeIcon icon={faCode}/>
                                {usedTechnos}
                            </div>
                        }
                        {list !== undefined &&
                            <ul>
                                {listObject}
                            </ul>
                        }
                    </div>
                </div>
            </div>
            {index !== length - 1 &&
            <div id={"separationElement"}></div>}
        </div>
    )
}

export default Element;