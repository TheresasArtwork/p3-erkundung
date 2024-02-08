import { Music } from "./Modes/MusicMode/Music";
import { ImageHunt } from "./Modes/ImageMode/ImageHunt";
import "./CineTrail.css";

export function CineTrail() {
  const location = "location2";

  return (
    <>
      <Music location={location}></Music>
      <ImageHunt location={location}></ImageHunt>
    </>
  );
}
