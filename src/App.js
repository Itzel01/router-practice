import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import './App.css';
import MainPage from "./Components/MainPage";
import AboutPage from "./Components/AboutPage";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
