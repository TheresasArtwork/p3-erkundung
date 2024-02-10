import PropTypes from "prop-types";

import "../Header/style/Header.css";
import { BackButton } from "../buttons/backButton";
import HeaderImage from "./HeaderImage";
import HeaderTitle from "./HeaderTitle";

const Header = ({ onClose, userFirstName, userProfilePicture }) => {
  return (
    <>
      <div className="header-container">
        <div>
          <BackButton onClose={onClose}></BackButton>
        </div>
        <div>
          <HeaderTitle userFirstName={userFirstName} />
        </div>
        <div>
          <HeaderImage userProfilePicture={userProfilePicture} />
        </div>
      </div>
    </>
  );
};

export default Header;

Header.propTypes = {
  onClose: PropTypes.func,
  userFirstName: PropTypes.string,
  userProfilePicture: PropTypes.string,
};
