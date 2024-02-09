import MapCultuvate from "./Map/MapCultuvate.jsx";
//import PopupTrekGo from "./PopUpLayer/PopupTrekGo.jsx";
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
      {popupTitle && <PopupTrekGo title={popupTitle} />}
    </div>
  );
};

export default Cultuvate;