import PropTypes from "prop-types";

import Header from "../Header/Header";
import "../PopUpLayer/PopupTrekGo.css";
import ContentContainer from "../Content/ContentContainer";

const PopupTrekGo = ({
  image,
  onClose,
  userFirstName,
  userProfilePicture,
  recordingDate,
  recordingTime,
  likedBy,
}) => {
  const backgroundImage = {
    backgroundImage: `url("${image}")`,
  };

  return (
    <>
      <div className="popup-trekgo" style={backgroundImage}>
        <Header
          onClose={onClose}
          userFirstName={userFirstName}
          userProfilePicture={userProfilePicture}
        ></Header>
        <div className="content-container-position">
          <ContentContainer
            userFirstName={userFirstName}
            recordingDate={recordingDate}
            recordingTime={recordingTime}
            likedBy={likedBy}
          ></ContentContainer>
        </div>
      </div>
    </>
  );
};

export default PopupTrekGo;

PopupTrekGo.propTypes = {
  image: PropTypes.string,
  onClose: PropTypes.func,
  userFirstName: PropTypes.string,
  userProfilePicture: PropTypes.string,
  recordingDate: PropTypes.string,
  recordingTime: PropTypes.string,
  likedBy: PropTypes.number,
};
