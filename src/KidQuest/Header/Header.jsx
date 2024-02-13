import PropTypes from "prop-types";
import "../Header/style/Header.css";
import MissionName from "../Header/HeaderTitle";
import MissionType from "./HeaderType";

const Header = ({ mission, taskTitle }) => {
  return (
    <header className="container-header">
      <>
        <MissionType taskTitle={taskTitle}></MissionType>
        <MissionName mission={mission}></MissionName>
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  mission: PropTypes.string,
  taskTitle: PropTypes.string,
};
