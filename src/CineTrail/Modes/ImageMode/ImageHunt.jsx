import "./ImageHunt.css";
import { NavBar } from "../Elements/NavBar/Nav";
import { LocationName } from "../Elements/Location/Location";
import { Image } from "../Elements/Image/Image";
import { ImageNumber } from "./ImageNumber/ImageNumber";
import { Instructions } from "./Instructions/Instructions";
import { Clue } from "./Clue/Clue";

export function ImageHunt() {
  return (
    <>
      <div className="cinetrail-container">
        <NavBar page="image"></NavBar>
        <LocationName location="location1"></LocationName>
        <Image location="location1"></Image>
        <ImageNumber></ImageNumber>
        <Instructions></Instructions>
        <Clue></Clue>
      </div>
    </>
  );
}
