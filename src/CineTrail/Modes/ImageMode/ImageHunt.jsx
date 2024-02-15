import "./ImageHunt.css";
import { LocationName } from "../Elements/Location/Location";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Instructions } from "./Instructions/Instructions";
import { Clue } from "./Clue/Clue";

export function ImageHunt({ location }) {
  return (
    <>
      <div>
        <LocationName location={location}></LocationName>
        <ImageGallery location={location}></ImageGallery>
        <Instructions></Instructions>
        <Clue></Clue>
      </div>
    </>
  );
}
