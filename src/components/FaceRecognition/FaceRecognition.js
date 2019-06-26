import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  //console.log(imageUrl);
  const {topRow, rightCol, bottomRow, leftCol} = box;
  return (
    <div className="center-flex ma">
      <div className="absolute mt2">
        <img
          src={imageUrl}
          id="inputimage"
          alt="Face Recognition"
          width="500px"
          height="auto"
        />
        <div className="bounding-box" style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
