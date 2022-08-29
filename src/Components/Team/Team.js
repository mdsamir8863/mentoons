import React from "react";
import "./Team.css";
// import teamVideo from '../../assets/VID-20220815-WA0079.mp4'
const Team = () => {
  return (
    <div>
      <div className="team">
        <span>Meet our team</span>{" "}
        <iframe width="100%" height="200px" src="https://www.youtube.com/embed/_9ibEA3AqDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Team;
