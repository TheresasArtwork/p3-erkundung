import "../PopUpLayer/PopupCineTrail.css";
import { Music } from "../Modes/MusicMode/Music";
import { ImageHunt } from "../Modes/ImageMode/ImageHunt";

const PopupCineTrail = () => {
  const location = "location2";

  return (
    <>
      <div className="popup-cinetrail">
        <ImageHunt location={location}></ImageHunt>
      </div>
    </>
  );
};

export default PopupCineTrail;
