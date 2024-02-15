import PropTypes from "prop-types";
import ImageCompon from "../images/ImageCompon";
import Button from "../Button/Button";
import "../Content/Content.css";

const Content = ({ missionImage, onClose }) => {
  return (
    <div className="content-container">
      <div className="image-container">
        <ImageCompon missionImage={missionImage}></ImageCompon>
      </div>
      <div>
        <Button onClose={onClose}></Button>
      </div>
    </div>
  );
};

export default Content;

Content.propTypes = {
  missionImage: PropTypes.string,
  onClose: PropTypes.func,
};
