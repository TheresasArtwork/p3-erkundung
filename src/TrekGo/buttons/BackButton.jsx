import PropTypes from "prop-types";

import "../buttons/Button.css";

export function BackButton({ onClose }) {
  return (
    <>
      <button className="image-button" id="back-button" onClick={onClose}>
        <img src="src\TrekGo\icons\backArrow.svg"></img>
      </button>
    </>
  );
}

BackButton.propTypes = {
  onClose: PropTypes.func,
};
