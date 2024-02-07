import "./Music.css";
import { NavBar } from "../Elements/NavBar/Nav";
import { LocationName } from "../Elements/Location/Location";
import { Image } from "../Elements/Image/Image";
import { Player } from "./Player/Player";
import { NextUp } from "./NextUp/NextUp";

export function Music() {
  let nextUpElements = [];
  const location = "location1";
  for (let i = 1; i < 4; i++) {
    nextUpElements.push(<NextUp key={i} number={i} location={location} />);
  }

  return (
    <>
      <div className="cinetrail-container">
        <NavBar></NavBar>
        <LocationName location={location}></LocationName>
        <Image location={location}></Image>
        <Player location={location}></Player>
        {nextUpElements}
      </div>
    </>
  );
}