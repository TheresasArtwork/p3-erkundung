import "./Nav.css";
import {
  GoBackIcon,
  ImageModeIcon,
  MusicModeIcon,
  MapIcon,
} from "../../../Icons";

export function NavBar({ page }) {
  let shownModeIcon;

  if (page === "music") {
    shownModeIcon = <ImageModeIcon></ImageModeIcon>;
  } else {
    shownModeIcon = <MusicModeIcon></MusicModeIcon>;
  }

  return (
    <>
      <div className="mode-nav cinetrail-padding">
        <div className="back">
          <GoBackIcon></GoBackIcon>
        </div>
        <div className="mode-and-map">
          {shownModeIcon}
          <MapIcon></MapIcon>
        </div>
      </div>
    </>
  );
}
