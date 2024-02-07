import "./Nav.css";
import { GoBackIcon, ImageModeIcon, MapIcon } from "../../../Icons";

export function NavBar() {
  return (
    <>
      <div className="mode-nav cinetrail-padding">
        <div className="back">
          <GoBackIcon></GoBackIcon>
        </div>
        <div className="mode-and-map">
          <ImageModeIcon></ImageModeIcon>
          <MapIcon></MapIcon>
        </div>
      </div>
    </>
  );
}
