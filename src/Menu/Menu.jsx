import "./Menu.css";
import { Link, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <div className="menu-wrap">
        <Link to="/" className="menu-link">
          TrekGo
        </Link>
        <Link to="/cultivate" className="menu-link">
          Cultivate
        </Link>
        <Link to="/cinetrail" className="menu-link">
          CineTrail
        </Link>
        <Link to="/kidquest" className="menu-link">
          KidQuest
        </Link>
      </div>
      <Outlet />
    </>
  );
}
