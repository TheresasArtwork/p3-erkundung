import "./Nav.css";
import {
  GoBackIcon,
  ImageModeIcon,
  MusicModeIcon,
  MapIcon,
} from "../../../Icons";

export function NavBar({ mode, setMode, onClose }) {
  const handleMode = () => {
    {
      mode === "music" ? setMode("image") : setMode("music");
    }
  };

  const handleClosePopup = () => {
    onClose();
  };

  return (
    <>
      <div className="mode-nav cinetrail-padding">
        <div className="back" onClick={handleClosePopup}>
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
          <div className="map-icon" onClick={handleClosePopup}>
            <MapIcon></MapIcon>
          </div>
        </div>
      </div>
    </>
  );
}

//onClick is a React event handler  - in pure js you'd have to "create" your own from scratch
