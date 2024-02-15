import "./Instructions.css";
import {
  SeeInInstruction,
  TurnHorizontalIcon,
  PlayInInstructions,
} from "../../../Icons";

export function Instructions() {
  return (
    <>
      <div className="instructions cinetrail-padding">
        <div className="instruction-container">
          <SeeInInstruction></SeeInInstruction>
          <p className="instruction-text">
            Start your search for the exact scene location.
          </p>
        </div>
        <div className="instruction-container">
          <TurnHorizontalIcon></TurnHorizontalIcon>
          <p className="instruction-text">
            Rotate your phone to see the scene full screen.
          </p>
        </div>
        <div className="instruction-container">
          <PlayInInstructions></PlayInInstructions>
          <p className="instruction-text">
            Fould it? Click play to make the scene come to life.
          </p>
        </div>
      </div>
    </>
  );
}
