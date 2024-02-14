import PropTypes from "prop-types";
import "../Header/style/Header.css";

const MissionName = ({ mission }) => {
  return (
    <>
      <div className="mission-name-container">
        <h1>{mission}</h1>
      </div>
    </>
  );
};

export default MissionName;

MissionName.propTypes = {
  mission: PropTypes.string,
};
