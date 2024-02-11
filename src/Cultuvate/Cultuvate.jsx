import "../Cultuvate/Cultuvate.css"
import MapCultuvate from "./Map/MapCultuvate.jsx";
import PopupCultuvate from "./Popuplayer/PopupCultuvate.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";



const Cultuvate= () => {

  const [popupImage, setPopupImage] = useState("")
  const [popQuestName, setPopupQuestName] = useState ("");
  const [popupTask, setPopupTask] = useState("");

  const handleMarkerClick = (feature) => {
    setPopupImage(feature.properties.imagequest);
    setPopupQuestName(feature.properties.quest);
    setPopupTask(feature.properties.task);
  };

  return (
    <div className="parent-container">
      <MapCultuvate geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popQuestName && (
      <PopupCultuvate
      quest={popQuestName}
      imagequest={popupImage}
      task={popupTask}
      />)}
    </div>
  );
};

export default Cultuvate;