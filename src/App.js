import './App.css';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div>
        <Header/>
        <div id={"main"}>
            <Home/>
        </div>
    </div>
  );
}

export default App;