import "./Location.css";
import { locationData } from "../../../data/locationdata";

export function LocationName({ location }) {
  return (
    <>
      <div className="location-name cinetrail-padding">
        {locationData[location].name}
      </div>
    </>
  );
}
