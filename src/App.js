import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import MyCareer from "./MyCareer";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <div>
        <Header/>
        <div id={"main"}>
            <Home/>
            <About/>
            <MyCareer/>
            <Contact />
            <Footer />
        </div>
    </div>
  );
}

export default App;