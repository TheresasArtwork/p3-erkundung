import PropTypes from "prop-types";
import "../buttons/Button.css";

export function CloseButton({ onClose }) {
  return (
    <>
      <button className="button-icon" onClick={onClose}>
        <img src="src\Cultuvate\Icons\Close.svg"></img>
      </button>
    </>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  onClose: PropTypes.func,
};
