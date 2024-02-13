import PropTypes from "prop-types";
import "../Header/style/Header.css";

const MissionName = ({ mission }) => {
  return (
    <>
      <div className="container-header">
        <h1>{mission}</h1>
      </div>
    </>
  );
};

export default MissionName;

MissionName.propTypes = {
  mission: PropTypes.string,
};
