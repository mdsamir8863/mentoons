import React from "react";
import './App.css'
// import main_logo from "../../assets/logo.png"
import Navbar2 from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Strory from './Components/Murder_mystry/Story'
import Comic from "./Components/Comics/Comic";
import Workshop from "./Components/Workshop/Workshop";
import Download from "./Components/Downloads/Download";
const App = () => {
  return (
    <div className="all_file">
      <Navbar2 />
      <Header />
      <Comic />
      <Workshop />
      <Strory/>
      <Download/>
    </div>
  );
};

export default App;
