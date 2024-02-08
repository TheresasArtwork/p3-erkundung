import "./ImageHunt.css";
import { NavBar } from "../Elements/NavBar/Nav";
import { LocationName } from "../Elements/Location/Location";
import { Image } from "../Elements/Image/Image";
import { ImageNumber } from "./ImageNumber/ImageNumber";
import { Instructions } from "./Instructions/Instructions";
import { Clue } from "./Clue/Clue";

export function ImageHunt({ location }) {
  return (
    <>
      <div className="cinetrail-container">
        <NavBar page="image"></NavBar>
        <LocationName location={location}></LocationName>
        <Image location={location}></Image>
        <ImageNumber></ImageNumber>
        <Instructions></Instructions>
        <Clue></Clue>
      </div>
    </>
  );
}
