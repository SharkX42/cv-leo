import React from 'react';
import Element from "./Element";
import "./MyCard.css"


function MyCard({name, content}) {

    const htmlElements = content.map((element, index) =>
        <Element
            key={`${element}-${index}`}
            title={element.title}
            picture={element.picture}
        />
    )

    return (
        <div className={"myCard"}>
            <div className={"topicName"}>{name}</div>
            {htmlElements}
        </div>
    )
}

export default MyCard;