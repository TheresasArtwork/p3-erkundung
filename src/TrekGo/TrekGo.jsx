// import { AddImageButton } from "./buttons/AddImageButton.jsx";
import MapTrekGo from "./Map/MapTrekGo.jsx";
import PopupTrekGo from "./PopUpLayer/PopupTrekGo.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const TrekGo = () => {
  const [popupTitle, setPopupTitle] = useState("");

  const handleMarkerClick = () => {
    setPopupTitle("Neuer Popup-Titel");
  };

  return (
    <div className="parent-container">
      <MapTrekGo geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && <PopupTrekGo title={popupTitle} />}
    </div>
  );
};

export default TrekGo;
