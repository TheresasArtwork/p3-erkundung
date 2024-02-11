import PropTypes from "prop-types"
import "../Popuplayer/PopupCultuvate.css";
import "../images/ImageComponent.css"
import Header from "../CultuvateHeader/Header";
import ContentContainer from "../Contentcontainer/Contentcontainer";
import Task from "../task/Task";
import QuestTitle from "../Questtitle/Questtitle";
import StartButton from "../buttons/StartButton";

const PopupCultuvate = ({
  imagequest,
  quest,
  task,
  questtitle,
  onClose,
}) => {
  


  return (
    <>
      <div className="popup-cultuvate">
       <Header 
       quest={quest}
       onClose={onClose}>
        </Header>  
        <div className="content-container">
          <ContentContainer 
          imagequest={imagequest}
          questtitle={questtitle}
          ></ContentContainer>
        </div>
        <div className="content-questtitle">
        <QuestTitle questtitle={questtitle}></QuestTitle>
      </div>
        <div className="task-container">
                <Task task={task}></Task>
      </div> 
      <div>
        <StartButton></StartButton>
      </div>
      </div>
      

    </>
  );
};

export default PopupCultuvate;

PopupCultuvate.propTypes = {
  onClose: PropTypes.func,
  imagequest: PropTypes.string,
  quest: PropTypes.string,
  task: PropTypes.string,
  questtitle: PropTypes.string,
}
