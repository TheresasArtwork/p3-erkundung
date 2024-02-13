import PropTypes from "prop-types";
import "../Header/style/Header.css";
import TaskName from "../Header/HeaderTitle";

const Header = ({ task }) => {
  return (
    <header className="container-header">
      <>
        <TaskName task={task}></TaskName>{" "}
      </>
    </header>
  );
};

export default Header;

Header.propTypes = {
  task: PropTypes.string,
};
