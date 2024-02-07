import "./Player.css";
import { songData } from "../../../data/songdata";
import { PreviousIcon, PlayIcon, NextIcon } from "../../../Icons";

export function Player({ location }) {
  return (
    <>
      <div className="cinetrail-padding">
        <div className="current-song">
          <div className="current-song-title">
            {songData[location][0].title}
          </div>
          <div className="current-song-desc">
            {songData[location][0].description}
          </div>
        </div>
        <div className="progress-bar"></div>
        <div className="controls-container">
          <div className="controls">
            <PreviousIcon></PreviousIcon>
            <PlayIcon></PlayIcon>
            <NextIcon></NextIcon>
          </div>
        </div>
      </div>
    </>
  );
}
