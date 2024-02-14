import PropTypes from "prop-types";
import "./MarkerCultuvate.css";

const MarkerCultuvate = ({ onClick, feature, markerType }) => {
  const _onClick = () => {
    onClick(feature);
  };

  const partOfApp = `${feature.app}`;

  return (
    <div
      onClick={_onClick}
      className={`marker ${partOfApp} ${markerType} `}
    ></div>
  );
};

export default MarkerCultuvate;

MarkerCultuvate.propTypes = {
  onClick: PropTypes.func,
  feature: PropTypes.object,
  markerType: PropTypes.string,
};
