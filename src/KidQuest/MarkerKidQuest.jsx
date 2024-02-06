import "./MarkerKidQuest.css";

const MarkerKidQuest = ({ onClick, feature, markerType }) => {
  const _onClick = () => {
    onClick(feature.properties.description);
  };

  const partOfApp = `${feature.app}`;

  return (
    <div onClick={_onClick} className={`marker ${partOfApp} ${markerType} `}>
      <img src={feature.geometry.displayImage} alt="marker"></img>
    </div>
  );
};

export default MarkerKidQuest;
