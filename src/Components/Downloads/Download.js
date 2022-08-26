import React from "react";
import "./Download.css";
import Button from "react-bootstrap/Button";
import download from "../../assets/freeDownload.png";
import download1 from "../../assets/Download1.jpg";
import download2 from "../../assets/1.png";
import download3 from "../../assets/Download3.jpg";
const Download = () => {
  return (
    <div>
      <div className="download-main">
        <img src={download} alt="" className="w-tittle-img" />
        <div className="download">
          <img src={download1} alt="" className="" />
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
        <div className="download">
          <img src={download2} alt="" className="" />
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
        <div className="download">
          <img src={download3} alt="" className="" />
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Download;
