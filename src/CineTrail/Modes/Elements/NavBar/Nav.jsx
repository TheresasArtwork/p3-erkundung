import "./Nav.css";
import {
  GoBackIcon,
  ImageModeIcon,
  MusicModeIcon,
  MapIcon,
} from "../../../Icons";

export function NavBar({ mode, setMode }) {
  const handleMode = () => {
    {
      mode === "music" ? setMode("image") : setMode("music");
    }
  };

  return (
    <>
      <div className="mode-nav cinetrail-padding">
        <div className="back">
          <GoBackIcon></GoBackIcon>
        </div>
        <div className="mode-and-map">
          <div className="mode-icon" onClick={handleMode}>
            {mode === "music" ? (
              <ImageModeIcon></ImageModeIcon>
            ) : (
              <MusicModeIcon></MusicModeIcon>
            )}
          </div>
          <div className="map-icon">
            <MapIcon></MapIcon>
          </div>
        </div>
      </div>
    </>
  );
}
