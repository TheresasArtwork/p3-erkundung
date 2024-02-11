import PropTypes from "prop-types";

import "../Task/Task.css";

const Task = ({task}) => {
    return (
        <> 
        <div className="task-container">
          <p>{task}</p>
        </div>
        </>
    )
}

export default Task;

Task.propTypes = {
    task: PropTypes.string
}