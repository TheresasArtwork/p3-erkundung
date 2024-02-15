import MapKidQuest from "./Map/MapKidQuest.jsx";
import PopupKidQuest from "./PopUpLayer/PopupKidQuest.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const KidQuest = () => {
  const [popupProgressBar, setPopupProgressBar] = useState("");
  const [popupMissionName, setPopupMissionName] = useState("");
  const [popupMissionType, setPopupMissionType] = useState("");
  const [popupImage, setPopupImage] = useState("");

  const handleMarkerClick = (feature) => {
    setPopupProgressBar(feature.properties.progress);
    setPopupMissionName(feature.properties.mission);
    setPopupMissionType(feature.properties.taskTitle);
    setPopupImage(feature.properties.missionImage);
  };

  return (
    <div className="parent-container">
      <MapKidQuest geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupMissionName && (
        <PopupKidQuest
          progress={popupProgressBar}
          mission={popupMissionName}
          taskTitle={popupMissionType}
          missionImage={popupImage}
        />
      )}
    </div>
  );
};

export default KidQuest;
