import PropTypes from "prop-types";

const ImageCompon = ({ missionImage }) => {
  return (
    <>
      <div className="image-container">
        <img src={missionImage} alt="Image" />
      </div>
    </>
  );
};

export default ImageCompon;

ImageCompon.propTypes = {
  missionImage: PropTypes.string,
};
