import React from "react";
import "./Film.css";
import Button from "react-bootstrap/Button";
// import Video from "../../assets/VID-20220815-WA0079.mp4";
const Film = () => {
  return (
    <div>
      <div className="film">
        <h1>Short Films by <span>MENTOONS</span></h1>
        {/* <video>
          <source src={Video} type="video/mp4" />
        </video> */}
      <iframe width="100%" height="200px" src="https://www.youtube.com/embed/_b6jm4o8pT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Film;
