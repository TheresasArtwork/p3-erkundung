// import { AddImageButton } from "./buttons/AddImageButton.jsx";
import "./fonts/Poppins/Poppins-Regular.ttf";
import "./fonts/Poppins/Poppins-SemiBold.ttf";
import "./fonts/Poppins/Poppins-Bold.ttf";
import "../TrekGo/TrekGo.css";
import MapTrekGo from "./Map/MapTrekGo.jsx";
import PopupTrekGo from "./PopUpLayer/PopupTrekGo.jsx";
import geoJson from "../mapbox-marker/GeoJSON.json";

import { useState } from "react";

const TrekGo = () => {
  const [popupImage, setPopupImage] = useState("");
  const [popupUserFirstName, setPopupUserFirstName] = useState("");
  const [popupUserProfilePicture, setPopupUserProfilePicture] = useState("");
  const [popupRecordingDate, setPopupRecordingDate] = useState("");
  const [popupRecordingTime, setPopupRecordingTime] = useState("");
  const [popupLikedBy, setPopupLikedBy] = useState("");
  const [, setIsPopupOpen] = useState(false);

  const handleMarkerClick = (feature) => {
    setPopupImage(feature.properties.image);
    setPopupUserFirstName(feature.user.firstName);
    setPopupUserProfilePicture(feature.user.profileImage);
    setPopupRecordingDate(feature.properties.recordingDate);
    setPopupRecordingTime(feature.properties.recordingTime);
    setPopupLikedBy(feature.socials.likedBy.length);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
  };

  return (
    <div className="parent-container">
      <MapTrekGo geoJson={geoJson} onMarkerClick={handleMarkerClick} />
      {popupImage && (
        <PopupTrekGo
          onClose={closePopup}
          image={popupImage}
          userFirstName={popupUserFirstName}
          userProfilePicture={popupUserProfilePicture}
          recordingDate={popupRecordingDate}
          recordingTime={popupRecordingTime}
          likedBy={popupLikedBy}
        />
      )}
    </div>
  );
};

export default TrekGo;
