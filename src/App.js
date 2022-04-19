import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
        <Header/>
        <div id={"main"}>
            <Home/>
            <About/>
        </div>
    </div>
  );
}

export default App;