import PropTypes from "prop-types";
import "./MarkerTrekGo.css";

const MarkerTrekGo = ({ onClick, feature, markerType }) => {
  const _onClick = () => {
    onClick(feature);
  };

  const partOfApp = `${feature.app}`;

  return (
    <div onClick={_onClick} className={`marker ${partOfApp} ${markerType} `}>
      <img src={feature.properties.image} alt="marker"></img>
    </div>
  );
};

export default MarkerTrekGo;

MarkerTrekGo.propTypes = {
  onClick: PropTypes.func,
  feature: PropTypes.object,
  markerType: PropTypes.string,
};
