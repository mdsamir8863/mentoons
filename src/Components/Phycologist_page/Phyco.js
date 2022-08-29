import React from "react";
import "./Phyco.css";
import Rupashi from "../../assets/img11.png";
import Button from "react-bootstrap/Button";

const Phyco = () => {
  return (
    <>
      <div className="pshycho">
        <span>phychologist rupashi </span>
        <div className="rupashi">
          <img src={Rupashi} alt="" />
          <p>
          RUPASHI is a licensed psychologist who specializes in areas of interpersonal process, identity development and exploration, anxiety and stress management, self-compassion, depression, and adjustment/life changes
          </p>
        </div>
        <h3>To fix your oppointment</h3>
        <Button variant="outline-success">Click here</Button>{" "}
        Or
        <div><p> what's app - (+919036033300) </p></div>
      </div>
    </>
  );
};

export default Phyco;
