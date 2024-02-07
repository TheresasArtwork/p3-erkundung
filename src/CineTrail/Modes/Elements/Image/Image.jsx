import "./Image.css";
import { imageData } from "../../../data/imagedata";

export function Image({ location }) {
  return (
    <>
      <div>
        <img
          className="location-image"
          src={imageData[location][0].url}
          alt={imageData[location][0].title}
        />
      </div>
    </>
  );
}
