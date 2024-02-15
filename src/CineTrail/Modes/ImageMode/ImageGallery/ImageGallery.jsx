import React, { useState } from "react";
import "./ImageGallery.css";
import { imageData } from "../../../data/imagedata";
import { NextIcon, PreviousIcon, SeeImgIcon } from "../../../Icons";
import { ImageNumber } from "../ImageNumber/ImageNumber";

export function ImageGallery({ location }) {
  const [imageNumber, setImageNumber] = useState(0);
  const totalImages = imageData[location].length;
  const handleClickNext = () => {
    if (imageNumber >= 0 && imageNumber < totalImages - 1) {
      setImageNumber(imageNumber + 1);
    }
  };

  const handleClickPrevious = () => {
    if (imageNumber > 0) {
      setImageNumber(imageNumber - 1);
    }
  };

  return (
    <>
      <div className="gallery-container">
        <div className="img-gallery-controlls">
          <span className="arrow" onClick={handleClickPrevious}>
            <PreviousIcon></PreviousIcon>
          </span>
          <SeeImgIcon></SeeImgIcon>
          <span className="arrow" onClick={handleClickNext}>
            <NextIcon></NextIcon>
          </span>
        </div>
        <img
          className="gallery-image"
          src={imageData[location][imageNumber].url}
          alt={imageData[location][imageNumber].title}
        />
      </div>
      <ImageNumber number={imageNumber} total={totalImages}></ImageNumber>
    </>
  );
}
