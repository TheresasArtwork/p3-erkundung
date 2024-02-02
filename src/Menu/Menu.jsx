import { Link, Outlet, useLocation } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  const location = useLocation();

  return (
    <>
      <div className="menu-wrap">
        <Link
          to="/trekgo"
          className={`menu-link ${
            location.pathname === "/trekgo" ? "active" : ""
          }`}
        >
          TrekGo
        </Link>
        <Link
          to="/cultivate"
          className={`menu-link ${
            location.pathname === "/cultivate" ? "active" : ""
          }`}
        >
          Cultivate
        </Link>
        <Link
          to="/cinetrail"
          className={`menu-link ${
            location.pathname === "/cinetrail" ? "active" : ""
          }`}
        >
          CineTrail
        </Link>
        <Link
          to="/kidquest"
          className={`menu-link ${
            location.pathname === "/kidquest" ? "active" : ""
          }`}
        >
          KidQuest
        </Link>
      </div>
      <Outlet />
    </>
  );
}
