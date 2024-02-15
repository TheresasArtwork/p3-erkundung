import PropTypes from "prop-types";
import "../Button/Button.css";

export function Button({ onClose }) {
  return (
    <>
      <button className="button-style" onClick={onClose}>
        Done
      </button>
    </>
  );
}

export default Button;

Button.propTypes = {
  onClose: PropTypes.func,
};
