import React from "react";
import "./Comic.css";
import Comic_t from "../../assets/comics-title.png";
import Comic1 from "../../assets/comic1.jpg";
import Comic2 from "../../assets/comic2.jpg";
import Comic3 from "../../assets/comic3.jpg";
import Comic4 from "../../assets/comic4.jpg";
import Comic5 from "../../assets/comic5.jpg";
import Comic6 from "../../assets/comic6.jpg";
import Button from "react-bootstrap/Button";
const Comic = () => {
  return (
    <div>
      <div className="w-main">
        <img src={Comic_t} alt="" className="tittle" />
        <p>
          Engaging stories and fun characters that your kids will love! We make
          reading & learning FUN! Downloads Gain Access to exclusive content and
          freebies to help you as you teach, reach, and love those around you.
          PDF Books, Requires printing, cutting & Binding For best results..
        </p>
        <div className="W1">
          <img src={Comic1} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
        <div className="W2">
          <img src={Comic2} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
        <div className="W3">
          <img src={Comic3} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
        <div className="W4">
          <img src={Comic4} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
        <div className="W5">
          <img src={Comic5} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
        <div className="W6">
          <img src={Comic6} alt="" />
          <Button variant="outline-success">Buy now</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Comic;
