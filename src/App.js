import React from "react";
import './App.css'
import Navbar2 from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Strory from './Components/Murder_mystry/Story'
import Comic from "./Components/Comics/Comic";
import Workshop from "./Components/Workshop/Workshop";
const App = () => {
  return (
    <div>
      <Navbar2 />
      <Header />
      <Strory/>
      <Comic />
      <Workshop />
    </div>
  );
};

export default App;
