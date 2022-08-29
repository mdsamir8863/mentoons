import React from "react";
// import { IconName } from "react-icons/fa";
import './App.css'
// import main_logo from "../../assets/logo.png"
// import Navbar2 from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Strory from './Components/Murder_mystry/Story'
import Comic from "./Components/Comics/Comic";
import Workshop from "./Components/Workshop/Workshop";
import Download from "./Components/Downloads/Download";
import ShortFilms from "./Components/Short_films/Film"
import Phyco from "./Components/Phycologist_page/Phyco"
import Team from "./Components/Team/Team"
import Footer from "./Components/Footer/Footer"
const App = () => {
  return (
    <div className="all_file">
      {/* <Navbar2 /> */}
      <Header />
      <Comic />
      <Workshop />
      <Strory/>
      <ShortFilms/>
      <Download/>
      <Phyco/>
      <Team/>
      <Footer/>
     
    </div>
  );
};

export default App;





































// import {useState} from 'react';

// const App = () => {
//   const [isHovering, setIsHovering] = useState(false);

//   const handleMouseOver = () => {
//     setIsHovering(true);
//   };

//   const handleMouseOut = () => {
//     setIsHovering(false);
//   };

//   return ( 
//     <div>
//       <div>
//         <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
//           Hover over me
//         </div>

//         {isHovering && (
//           <div>
//             <h2>Only visible when hovering div</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;
