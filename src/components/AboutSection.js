import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
            <p>
              Contact us for any photagraphy or videography ideas that you have.
              we have proffesionals with amazing skills
            </p>
            <button>Contact us</button>
          </Hide>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="Camera" />
      </Image>
    </About>
  );
};

// Styled component

export default AboutSection;
