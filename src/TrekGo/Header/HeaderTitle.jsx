import PropTypes from "prop-types";

const HeaderTitle = ({ userFirstName }) => {
  return (
    <>
      <div className="headerTitle-container">
        <h1>Impression von {userFirstName}</h1>
      </div>
    </>
  );
};

export default HeaderTitle;

HeaderTitle.propTypes = {
  userFirstName: PropTypes.string,
};
