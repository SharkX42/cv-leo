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
    const heightWindow = $(window).outerHeight();
    if(height > 0)
    {
        $("#main").css("margin-top", height);
        $("#home").css("height", heightWindow - height);
    }
}

$(window).on( "orientationchange", start());

$(document).ready(function() {
    start();
});