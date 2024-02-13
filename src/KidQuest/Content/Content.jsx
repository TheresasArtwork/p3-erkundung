import PropTypes from "prop-types";
import ImageCompon from "../images/ImageCompon";
import "../Content/Content.css";

const Content = ({ missionImage }) => {
  return (
    <div className="content-container">
      <div className="image-container">
        <ImageCompon missionImage={missionImage}></ImageCompon>
      </div>
    </div>
  );
};

export default Content;

Content.propTypes = {
  missionImage: PropTypes.string,
};
