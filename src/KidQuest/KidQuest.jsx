import MapKidQuest from "./Map/MapKidQuest.jsx";
// import PopupKidQuest from "./PopUpLayer/PopupKidQuest.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const KidQuest = () => {
  const [popupTitle, setPopupTitle] = useState("");

  const handleMarkerClick = () => {
    setPopupTitle("Neuer Popup-Titel");
  };

  return (
    <div className="parent-container">
      <MapKidQuest geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {/* {popupTitle && <PopupKidQuest title={popupTitle} />} */}
    </div>
  );
};

export default KidQuest;
