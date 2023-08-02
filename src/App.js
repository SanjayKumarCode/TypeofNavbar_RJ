// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";


function App() {
  return (
    <div className="App">
    <Router>  
        <Navbar/>
          <Routes>
           
             <Route path="/" element={<Home/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/Search" element={<Contact/>} />
          </Routes>           
     </Router>
    </div>
  );
}

export default App;
