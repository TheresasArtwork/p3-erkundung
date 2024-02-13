import PropTypes from "prop-types";
import "../Header/style/Header.css";

const TaskName = ({ task }) => {
  return (
    <>
      <div className="container-header">
        <h1>{task}</h1>
      </div>
    </>
  );
};

export default TaskName;

TaskName.propTypes = {
  task: PropTypes.string,
};
