import React from 'react';
import './MyCareer.css';
import data from './data.json'
import MyCard from "./MyCard";

function MyCareer() {

    const topics = data.content;

    const htmlCards = topics.map((topic, index) =>
        <MyCard
            key={`${topic}-${index}`}
            name={topic.name}
            content={topic.content}
        />
    );

    return (
        <div id={"myCareer"}>
            <h1>Mon parcours</h1>
            {htmlCards}
        </div>
    )
}

export default MyCareer;