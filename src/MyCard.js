import React from 'react';
import Element from "./Element";
import "./MyCard.css"


function MyCard({name, content}) {

    const htmlElements = content.map((element, index) =>
        <Element
            key={`${element}-${index}`}
            title={element.title}
            picture={element.picture}
            dateFirst={element.dateFirst}
            dateEnd={element.dateEnd}
            details={element.details}
        />
    )

    return (
        <div className={"myCard"}>
            <div className={"topicName"}>
                <span className={"spanName"}>{name}</span>
            </div>
            {htmlElements}
        </div>
    )
}

export default MyCard;