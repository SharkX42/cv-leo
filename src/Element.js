import React from 'react';
import "./Element.css"

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Element({title, picture, dateFirst, dateEnd, details, index, length}) {
    return (
        <div>
            <div id={"element"}>
                <div id={"pictureElem"}>
                    <img src={images[picture]} alt={picture}/>
                </div>
                <div id={"contentElem"}>
                    <div>{title}</div>
                    <div>{dateFirst} - {dateEnd}</div>
                    <div>{details}</div>
                </div>
            </div>
            {index != length - 1 &&
            <div id={"separationElement"}></div>}
        </div>
    )
}

export default Element;