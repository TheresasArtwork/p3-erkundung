import PropTypes from "prop-types";

import Header from "../Header/Header";
import "../PopUpLayer/PopupTrekGo.css";

const PopupTrekGo = ({ image, onClose, userFirstName, userProfilePicture }) => {
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
};
