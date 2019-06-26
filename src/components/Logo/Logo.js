import React from "react";
import Tilt from "react-tilt";
import Image from "./Logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 center-flex">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img src={Image} alt="AI" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
