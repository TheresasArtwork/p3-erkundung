import PropTypes from "prop-types";
import ImageComponent from "../images/ImageComponent";
import "../Contentcontainer/ContentContainer.css";

const ContentContainer = ({ imagequest }) => {
  return (
    <>
      <div className="content-container">
        <div className="image-container">
          <ImageComponent imagequest={imagequest}></ImageComponent>
        </div>
      </div>
    </>
  );
};

export default ContentContainer;

ContentContainer.propTypes = {
  imagequest: PropTypes.string,
};
