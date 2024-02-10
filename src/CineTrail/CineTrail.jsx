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

  const handleClosePopup = () => {
    setPopupTitle("");
  };

  return (
    <div className="parent-container">
      <MapCineTrail geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupTitle && (
        <PopupCineTrail
          title={popupTitle}
          location={location}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default CineTrail;

// {popupTitle && ... - if popupTitle is not empty, then && ... can be performed
