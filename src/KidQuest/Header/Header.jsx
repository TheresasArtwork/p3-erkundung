import PropTypes from "prop-types";
import "../Header/style/Header.css";
import MissionName from "../Header/HeaderTitle";
import MissionType from "./HeaderType";
import HeaderBar from "./HeaderBar";

const Header = ({ progress, mission, taskTitle }) => {
  return (
    <header className="container-header">
      <div>
        <HeaderBar progress={progress}></HeaderBar>
      </div>
      <div className="mission-container">
        <MissionType taskTitle={taskTitle}></MissionType>
        <MissionName mission={mission}></MissionName>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  progress: PropTypes.string,
  mission: PropTypes.string,
  taskTitle: PropTypes.string,
};
