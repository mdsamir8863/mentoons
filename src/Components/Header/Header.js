import React from "react";
import "./Header.css";
import main_logo from "../../assets/logo.png";

import Button from "react-bootstrap/Button";
import doll_right from "../../assets/doll-right.png";
import doll_left from "../../assets/doll-left.png";
const Header = () => {
  return (
    <div  className="bbbb">
      <div className="firstdiv">
        {" "}
        <header className="Header">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={main_logo} alt="" className="main_logo" />
                {/* <h3 className="animate-charcter">MENTOONS</h3>
              <p className="animate-charcter">mentoring through cartoon </p> */}
                <Button variant="primary">Sign Up</Button>{" "}
              </div>
            </div>
          </div>
        </header>
        <div className="about">
          <div className="about-1">
            {" "}
            <img src={doll_right} alt="" />
            <img src={doll_left} alt="" />
          </div>
          <p>
            We at Mentoons are here to mentor through cartoons! Focusing on
            concepts such as social human development, social media
            de-addiction, we use psychology-based modules and cartoons to
            influence and change maladaptive behaviour in your child. Mentoons
            has got your back, whether you’re a parent looking for a holistic
            yet fun growth environment for your 6-year-old or even if you’re a
            20 year old looking for career guidance!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
