import "../PopUpLayer/PopupKidQuest.css";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Content from "../Content/Content";

const PopupKidQuest = ({ mission, taskTitle, missionImage }) => {
  return (
    <>
      <div className="popup-kidquest">
        <Header taskTitle={taskTitle} />
        <Header mission={mission} />
        <div className="content-container">
          <Content missionImage={missionImage} />
        </div>
      </div>
    </>
  );
};

export default PopupKidQuest;

PopupKidQuest.propTypes = {
  mission: PropTypes.string,
  taskTitle: PropTypes.string,
  missionImage: PropTypes.string,
};
