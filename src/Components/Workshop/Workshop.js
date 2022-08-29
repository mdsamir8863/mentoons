import React from "react";
import "./Workshop.css";
import Button from "react-bootstrap/Button";
import friend_img from '../../assets/friends.png'
import Workshop_tittle_img from "../../assets/workshop-title.png";
import buddy_tittle_img from "../../assets/buddy.png";
import famaly_tittle_img from "../../assets/family.png";
import teen_tittle_img from "../../assets/teen.png";

const Workshop = () => {
  return (
    <div>
      <div className="workshop">
        <img src={Workshop_tittle_img} alt="" className="w-tittle-img" />
        <h2>Developed by <span>psychologists</span> </h2>
        <p>
          Based on the “9 Human Intelligence Theory", our workshops are designed
          and delivered by psychologists. Our fun sessions will help children
          learn about thoughts, interactions, reactions, making friends,
          self-awareness and more!
        </p>
        <div className="teen-camp">
          <img src={teen_tittle_img} alt="" className="w-img" />
          <div>
            <p>
              Dealing with teenage years can be difficult. Our teen camp focuses
              on;
            </p>
            <p>🌎 Growth Mindset- How to improve your skills with hard work.</p>
            <p>
              🌎 Guide them on concepts like good-touch, bad-touch, social
              media, and cell phone de-addiction.
            </p>
            <p>
              🌎 Journal writing to help keeping a track of your daily routine.
            </p>
            <p>🌎 Building healthy relationships with parents.</p>
            <p>🌎 Dealing with body and hormonal change.</p>
          </div>
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
        <div className="buddy-camp">
          <img src={buddy_tittle_img} alt="" className="w-img" />
          <div>
            <p>
              A fun camp for your kids where they can learn, enjoy and make
              friends!
            </p>
            <p>
              🌎 Interactive sessions helps with building connections with your
              peers.
            </p>
            <p>
              🌎 Journal writing to help keep a track of your daily routine.
            </p>
            <p>
              🌎 Books, games and videos helps build their drive for
              participation.
            </p>
            <p>🌎 Helps your child engage and mingle with their friends.</p>
          </div>
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
        <div className="famaly-camp">
          <img src={famaly_tittle_img} alt="" className="w-img" />
          <div>
            <p>
              We aim to have a positive impact on children by first positively
              impacting their parents;
            </p>
            <p>
              🌎 Our workshops create a fun learning environment for parents.
            </p>
            <p>
              🌎 Exciting activities are designed which will help in
              parent-child interaction.
            </p>
            <p>
              🌎 Great opportunities where parents can refresh their skills.
            </p>
            <p>🌎 Understand how to manage areas like pampering kids.</p>
          </div>
          <Button variant="outline-success">Download now</Button>{" "}
        </div>
        <img src={friend_img} alt="" className="w-img"/>
        <p>Through our workshops, you discover an environment that is best for your child where they can explore their curiosity, grow and enjoy while having fun!</p>
      </div>
    </div>
  );
};

export default Workshop;
