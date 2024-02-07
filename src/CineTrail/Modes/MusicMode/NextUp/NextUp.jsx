import "./NextUp.css";
import { songData } from "../../../data/songdata";

export function NextUp({ location, number }) {
  return (
    <>
      <div className="upcoming-song cinetrail-padding">
        <div className="song-title">{songData[location][number].title}</div>
        <div className="song-desc">
          {songData[location][number].description}
        </div>
      </div>
    </>
  );
}
