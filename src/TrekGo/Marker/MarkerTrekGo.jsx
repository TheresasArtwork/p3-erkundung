import PropTypes from "prop-types";
import "./MarkerTrekGo.css";

const MarkerTrekGo = ({ onClick, feature, markerType }) => {
  const _onClick = () => {
    console.log(feature);
    onClick(feature.properties.description);
  };

  const partOfApp = `${feature.app}`;

  return (
    <div onClick={_onClick} className={`marker ${partOfApp} ${markerType} `}>
      <img src={feature.geometry.displayImage} alt="marker"></img>
    </div>
  );
};

export default MarkerTrekGo;

MarkerTrekGo.propTypes = {
  onClick: PropTypes.any,
  feature: PropTypes.any,
  markerType: PropTypes.any,
};
