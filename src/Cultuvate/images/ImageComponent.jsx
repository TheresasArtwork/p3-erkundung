import PropTypes from "prop-types"
import "../images/ImageComponent.css"

const ImageComponent = ({ imagequest }) => {
  return (
    <div className="image-container">
      <img src={imagequest} alt="Bild" />
    </div>
  );
};

export default ImageComponent;

ImageComponent.propTypes = {
  imagequest: PropTypes.string
}