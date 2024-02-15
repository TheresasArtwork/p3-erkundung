import "../PopUpLayer/PopupKidQuest.css";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Content from "../Content/Content";

const PopupKidQuest = ({
  progress,
  mission,
  taskTitle,
  missionImage,
  onClose,
}) => {
  return (
    <div className="popup-kidquest">
      <Header progress={progress} mission={mission} taskTitle={taskTitle} />
      <div className="content-container">
        <Content missionImage={missionImage} onClose={onClose} />
      </div>
    </div>
  );
};

export default PopupKidQuest;

PopupKidQuest.propTypes = {
  progress: PropTypes.string,
  mission: PropTypes.string,
  taskTitle: PropTypes.string,
  missionImage: PropTypes.string,
  onClose: PropTypes.func,
};
