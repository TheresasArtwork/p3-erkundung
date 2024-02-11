import PropTypes from "prop-types"
import "../Popuplayer/PopupCultuvate.css";
import "../images/ImageComponent.css"
import Header from "../CultuvateHeader/Header";
import ImageComponent from "../images/ImageComponent";
import Task from "../task/Task";


const PopupCultuvate = ({
  imagequest,
  quest,
  task
}) => {
  


  return (
    <>
      <div className="popup-cultuvate">
       <Header quest={quest}>
        </Header>  
      </div>
      <div className="image-container">
        <ImageComponent imagequest={imagequest}></ImageComponent>
      </div>
      <div className="task-container">
        <Task task={task}></Task>
      </div>

    </>
  );
};

export default PopupCultuvate;

PopupCultuvate.propTypes = {
  imagequest: PropTypes.string,
  quest: PropTypes.string,
  task: PropTypes.string
}
