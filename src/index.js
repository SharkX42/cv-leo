import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


function start(){
    console.log("start");
    const height = $("#navigation").outerHeight();
    console.log("height nav = " + height);
    const heightWindow = window.innerHeight;
    console.log("height windows inner = " + heightWindow);
    if(height > 0)
    {
        $("#main").css("margin-top", height);
        $("#home").css("height", heightWindow - height);
    }
}

window.addEventListener('resize', start);

$(document).ready(function() {
    start();
});