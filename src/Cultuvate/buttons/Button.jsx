import PropTypes from "prop-types";
import "../buttons/Button.css"

export function Button({ onClose }) {
    return(
        <>
        <button className="button-icon" onClick={onClose}>
          <img src="src\Cultuvate\Icons\BackArrow.svg"></img>
        </button>
        </>
    )
}

export default Button;

Button.propTypes = {
  onClose: PropTypes.func,
};