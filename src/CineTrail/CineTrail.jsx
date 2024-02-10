import MapCineTrail from "./Map/MapCineTrail.jsx";
import PopupCineTrail from "./PopUpLayer/PopupCineTrail.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const CineTrail = () => {
  const [popupTitle, setPopupTitle] = useState("");
  const [location, setLocation] = useState("location1");

  const handleMarkerClick = (feature) => {
    setPopupTitle("CineTrail");

    feature.properties.description === "Cinetrail1"
      ? setLocation("location1")
      : setLocation("location2");
  };

  return (
    <div className="parent-container">
      <MapCineTrail geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && <PopupCineTrail title={popupTitle} location={location} />}
    </div>
  );
};

export default CineTrail;
