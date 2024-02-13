import PropTypes from "prop-types";
import "../Header/style/Header.css";
import MissionName from "../Header/HeaderTitle";

const Header = ({ mission }) => {
  return (
    <header className="container-header">
      <>
        <MissionName mission={mission}></MissionName>{" "}
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  mission: PropTypes.string,
};
