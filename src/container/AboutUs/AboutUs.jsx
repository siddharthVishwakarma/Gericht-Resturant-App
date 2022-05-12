import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* Background Image */}
    <div className="app__aboutus-overlay flex-center">
      <img src={images.G} alt="G" />
    </div>
    <div className="app__aboutus-content flex__center">
      {/* Left content */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="aboutus_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button" type="button">
          Know more
        </button>
      </div>
      {/* Right content */}
      <div className="app__aboutus-content_knife flex-center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content flex-center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="aboutus_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button" type="button">
            Know more
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
