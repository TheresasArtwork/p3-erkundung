import "./Clue.css";
import { songData } from "../../../data/songdata";
import { ClueIcon } from "../../../Icons";

export function Clue() {
  return (
    <>
      <div className="clue cinetrail-padding">
        <div className="clue-description">
          Hard time finding the right spot but don’t want to look at the image
          again? Get a textual clue:
        </div>
        <div className="clues-container">
          <div className="clue-container">
            <ClueIcon></ClueIcon>
            <div className="clue-hider"></div>
          </div>
          <div className="clue-container">
            <ClueIcon></ClueIcon>
            <div className="clue-hider"></div>
          </div>
        </div>
      </div>
    </>
  );
}
