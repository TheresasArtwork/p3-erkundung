import PropTypes from "prop-types";
import "../CultuvateHeader/Header.css";
import QuestTitle from "./HeaderTitle";
import Button from "../buttons/Button.jsx";
import CloseButton from "../buttons/Closebutton.jsx";

const Header = ({ quest, onClose }) => {
  return (
    <header className="container-header">
      <div>
        <Button onClose={onClose}></Button>
      </div>
      <div>
        <QuestTitle quest={quest}></QuestTitle>
      </div>
      <div>
        <div>
          <CloseButton onClose={onClose}></CloseButton>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  quest: PropTypes.string,
  onClose: PropTypes.func,
};
