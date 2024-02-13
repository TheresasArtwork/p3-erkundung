import MapKidQuest from "./Map/MapKidQuest.jsx";
import PopupKidQuest from "./PopUpLayer/PopupKidQuest.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const KidQuest = () => {
  const [popupTitle, setPopupTitle] = useState("");
  const [popupTaskName, setPopupTaskName] = useState("");

  const handleMarkerClick = (feature) => {
    setPopupTitle("Neuer Popup-Titel");
    setPopupTaskName(feature.properties.task);
  };

  return (
    <div className="parent-container">
      <MapKidQuest geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && <PopupKidQuest title={popupTitle} task={popupTaskName} />}
    </div>
  );
};

export default KidQuest;
