import React from "react";
import "./story.css";
import Button from "react-bootstrap/Button";
import murder1 from "../../assets/murder1.png";
import murder2 from "../../assets/murder2.png";
import murder3 from "../../assets/murder3.png";
const Story = () => {
  return (
    <div>
      <div className="main-flex">
        <span>Murder mystry stories</span>
        <div className="flex1">
          <img src={murder3} alt="" />
          <Button variant="outline-success">watch now</Button>{" "}
        </div>
        <div className="flex2">
          <img src={murder1} alt="" />
          <Button variant="outline-success">watch now</Button>{" "}
        </div>
        <div className="flex3">
          <img src={murder2} alt="" />
          <Button variant="outline-success">watch now</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Story;
