import "../Cultuvate/Cultuvate.css"
import MapCultuvate from "./Map/MapCultuvate.jsx";
import PopupCultuvate from "./Popuplayer/PopupCultuvate.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";


const Cultuvate= () => {
  const [popupTitle, setPopupTitle] = useState("");

  const handleMarkerClick = () => {
    setPopupTitle("Neuer Popup-Titel");
  };

  return (
    <div className="parent-container">
      <MapCultuvate geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && <PopupCultuvate title={popupTitle} />}
    </div>
  );
};

export default Cultuvate;