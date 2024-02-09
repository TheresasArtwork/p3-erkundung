import MapCineTrail from "./Map/MapCineTrail.jsx";
import PopupCineTrail from "./PopUpLayer/PopupCineTrail.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const CineTrail = () => {
  const [popupTitle, setPopupTitle] = useState("");

  const handleMarkerClick = () => {
    setPopupTitle("Neuer Popup-Titel");
  };

  return (
    <div className="parent-container">
      <MapCineTrail geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && <PopupCineTrail title={popupTitle} />}
    </div>
  );
};

export default CineTrail;

/*import { Music } from "./Modes/MusicMode/Music";
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
}*/
