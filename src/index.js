import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

let initialHeightWindow = 0;

function start(){
    const height = $("#navigation").outerHeight();
    const heightWindow = window.innerHeight;
    if(Math.abs(initialHeightWindow - heightWindow) > 100)
    {
        initialHeightWindow = heightWindow;
        if(height > 0)
        {
            $("#home").css("padding-top", height*2);
            $("#home").css("padding-bottom", height);
            $("#about").css("padding-top", height);
            $("#about").css("padding-bottom", height);
            $("#myCareer").css("padding-top", height);
            $("#myCareer").css("padding-bottom", height);
            $("#home").css("height", heightWindow);
            $("#default").addClass("active");
            $(".fa-download").addClass("fa-bounce");
        }
    }
}

window.onload = function () {
    window.scrollTo(0, 0);
}

window.addEventListener('resize', start);

$(document).ready(function() {
    start();
    initialHeightWindow = window.innerHeight;
});