import PropTypes from "prop-types";

const HeaderBar = ({ progress }) => {
  return (
    <>
      <div className="progress-container">
        <img src={progress} alt="ProgressImage" />
      </div>
    </>
  );
};

export default HeaderBar;

HeaderBar.propTypes = {
  progress: PropTypes.string,
};
