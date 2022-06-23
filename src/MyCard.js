import React from 'react';
import Element from "./Element";
import "./MyCard.css"


function MyCard({name, content}) {

    const htmlElements = content.map((element, index) =>
        <Element
            key={`${element}-${index}`}
            title={element.title}
            picture={element.picture}
            location={element.location}
            link={element.link}
            linkGit={element.linkGit}
            dateFirst={element.dateFirst}
            dateEnd={element.dateEnd}
            description={element.description}
            details={element.details}
            technos={element.technos}
            color={element.color}
            list={element.list}
            index={index}
            length={content.length}
        />
    )

    return (
        <div className={"myCard elementBodyPadding"}>
            <div className={"topicName"}>
                <span className={"spanName"}>{name}</span>
            </div>
            {htmlElements}
        </div>
    )
}

export default MyCard;