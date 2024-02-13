import MapKidQuest from "./Map/MapKidQuest.jsx";
import PopupKidQuest from "./PopUpLayer/PopupKidQuest.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const KidQuest = () => {
  const [popupMissionName, setPopupMissionName] = useState("");

  const handleMarkerClick = (feature) => {
    setPopupMissionName(feature.properties.mission);
  };

  return (
    <div className="parent-container">
      <MapKidQuest geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupMissionName && <PopupKidQuest mission={popupMissionName} />}
    </div>
  );
};

export default KidQuest;
