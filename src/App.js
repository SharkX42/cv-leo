import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import MyCareer from "./MyCareer";

function App() {
  return (
    <div>
        <Header/>
        <div id={"main"}>
            <Home/>
            <About/>
            <MyCareer/>
        </div>
    </div>
  );
}

export default App;