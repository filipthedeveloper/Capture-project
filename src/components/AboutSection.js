import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
            <p>
              Contact us for any photagraphy or videography ideas that you have.
              we have proffesionals with amazing skills
            </p>
            <button>Contact us</button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt="Camera" />
      </div>
    </div>
  );
};

export default AboutSection;
