import PropTypes from "prop-types";

const HeaderImage = ({ userProfilePicture }) => {
  return (
    <>
      <div className="headerImage-container">
        <img src={userProfilePicture}></img>
      </div>
    </>
  );
};

export default HeaderImage;

HeaderImage.propTypes = {
  userProfilePicture: PropTypes.string,
};
