import "../Cultuvate/Cultuvate.css"
import MapCultuvate from "./Map/MapCultuvate.jsx";
import PopupCultuvate from "./Popuplayer/PopupCultuvate.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";



const Cultuvate= () => {

  const [popupImage, setPopupImage] = useState("")
  const [popQuestName, setPopupQuestName] = useState ("");
  const [popupTask, setPopupTask] = useState("");
  const [popupQuestTitle, setPopupQuestTitle] = useState ("");
  const [popupProgressBar, setPopupProgressBar] = useState ("");
  //const [, setIsPopupOpen] = useState(false);

  const handleMarkerClick = (feature) => {
    setPopupImage(feature.properties.imagequest);
    setPopupQuestName(feature.properties.quest);
    setPopupTask(feature.properties.task);
    setPopupQuestTitle(feature.properties.questtitle);
    setPopupProgressBar(feature.properties.progressbar);
    //setIsPopupOpen(true);
  };

  const closePopup = () => {
    setPopupQuestName("");
  };

  return (
    <div className="parent-container">
      <MapCultuvate geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popQuestName && (
      <PopupCultuvate
      onClose={closePopup}
      quest={popQuestName}
      imagequest={popupImage}
      task={popupTask}
      questtitle={popupQuestTitle}
      progressbar={popupProgressBar}
      />)}
    </div>
  );
};

export default Cultuvate;