import PropTypes from "prop-types";
import "../Header/style/Header.css";

const MissionType = ({ taskTitle }) => {
  return (
    <>
      <div className="mission-type-container">
        <h1>{taskTitle}</h1>
      </div>
    </>
  );
};

export default MissionType;

MissionType.propTypes = {
  taskTitle: PropTypes.string,
};
