import { useState } from "react";
import "../PopUpLayer/PopupCineTrail.css";
import { NavBar } from "../Modes/Elements/NavBar/Nav";
import { Music } from "../Modes/MusicMode/Music";
import { ImageHunt } from "../Modes/ImageMode/ImageHunt";

const PopupCineTrail = () => {
  const location = "location2";
  const [mode, setMode] = useState("music");

  return (
    <>
      <div className="popup-cinetrail">
        <NavBar mode={mode} setMode={setMode}></NavBar>
        {mode === "music" ? (
          <Music location={location}></Music>
        ) : (
          <ImageHunt location={location}></ImageHunt>
        )}
      </div>
    </>
  );
};

export default PopupCineTrail;
