import "../Header/Header.css";
import { BackButton } from "../buttons/backButton";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div>
          <BackButton />
        </div>
        <div>
          <HeaderTitle />
        </div>
        <div>profileImage</div>
      </div>
    </>
  );
};

export default Header;
