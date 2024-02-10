import PropTypes from "prop-types";
import "./MarkerCineTrail.css";

const MarkerCineTrail = ({ onClick, feature, markerType }) => {
  const _onClick = () => {
    //console.log(feature);
    onClick(feature.properties.description);
  };

  const partOfApp = `${feature.app}`;

  return (
    <div onClick={_onClick} className={`marker ${partOfApp} ${markerType} `}>
      <img src={feature.geometry.displayImage} alt="marker"></img>
    </div>
  );
};

export default MarkerCineTrail;

MarkerCineTrail.propTypes = {
  onClick: PropTypes.any,
  feature: PropTypes.any,
  markerType: PropTypes.any,
};
