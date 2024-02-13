import MapKidQuest from "./Map/MapKidQuest.jsx";
import PopupKidQuest from "./PopUpLayer/PopupKidQuest.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const KidQuest = () => {
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMissionName, setPopupMissionName] = useState("");

  const handleMarkerClick = (feature) => {
    setPopupTitle("Neuer Popup-Titel");
    setPopupMissionName(feature.properties.mission);
  };

  return (
    <div className="parent-container">
      <MapKidQuest geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && (
        <PopupKidQuest title={popupTitle} mission={popupMissionName} />
      )}
    </div>
  );
};

export default KidQuest;
