import React from 'react';
import "./Element.css"

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Element({title, picture}) {
    return (
        <div id={"element"}>
            <div id={"pictureElem"}>
                <img src={images[picture]} alt={picture}/>
            </div>
            <div>{title}</div>
        </div>
    )
}

export default Element;