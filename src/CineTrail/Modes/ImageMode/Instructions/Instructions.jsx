import "./Instructions.css";
import {
  SeeInInstruction,
  TurnHorizontalIcon,
  TimerIcon,
} from "../../../Icons";

export function Instructions() {
  return (
    <>
      <div className="instructions cinetrail-padding">
        <div className="instruction-container">
          <SeeInInstruction></SeeInInstruction>
          <p className="instruction-text">Tap on the eye to see the scene.</p>
        </div>
        <div className="instruction-container">
          <TurnHorizontalIcon></TurnHorizontalIcon>
          <p className="instruction-text">
            Rotate your phone to see the horizontal scene.
          </p>
        </div>
        <div className="instruction-container">
          <TimerIcon></TimerIcon>
          <p className="instruction-text">
            You wil only get to see the image for 5 seconds.
          </p>
        </div>
      </div>
    </>
  );
}
