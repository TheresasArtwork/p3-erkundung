import "./MarkerCultuvate.css"

const MarkerCultuvate = ({ onClick, feature, markerType }) => {
    const _onClick = () => {
      onClick(feature.properties.description);
    };
  
    const partOfApp = `${feature.app}`;
  
    return (
      <div onClick={_onClick} className={`marker cultuvate ${partOfApp} ${markerType}`}>
        Hallo
      </div>
    );
  };
  
  export default MarkerCultuvate;