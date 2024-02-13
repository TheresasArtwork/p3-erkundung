import "../PopUpLayer/PopupKidQuest.css";
import PropTypes from "prop-types";
import Header from "../Header/Header";

const PopupKidQuest = ({ mission }) => {
  return (
    <>
      <div className="popup-kidquest">
        <Header mission={mission} />
      </div>
    </>
  );
};

export default PopupKidQuest;

PopupKidQuest.propTypes = {
  mission: PropTypes.string,
};
