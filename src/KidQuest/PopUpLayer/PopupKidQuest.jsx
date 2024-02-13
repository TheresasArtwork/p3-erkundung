import "../PopUpLayer/PopupKidQuest.css";
import PropTypes from "prop-types";
import Header from "../Header/Header";

const PopupKidQuest = ({ task }) => {
  return (
    <>
      <div className="popup-kidquest"></div>
      <Header>task={task}</Header>
    </>
  );
};

export default PopupKidQuest;

PopupKidQuest.propTypes = {
  task: PropTypes.string,
};
