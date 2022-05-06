import React from 'react';
import "./Element.css"
import {faCalendarDays, faLocationDot, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Element({title, picture, location, dateFirst, dateEnd, description, details, index, length}) {
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
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                {dateEnd !== undefined && dateFirst !== undefined && <div>{dateFirst} - {dateEnd}</div>}
                                {dateEnd !== undefined && dateFirst === undefined && <div>{dateEnd}</div>}

                            </div>
                            <div className={"flex datelocation"}>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <div>{location}</div>
                            </div>
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
                    </div>
                </div>
            </div>
            {index !== length - 1 &&
            <div id={"separationElement"}></div>}
        </div>
    )
}

export default Element;