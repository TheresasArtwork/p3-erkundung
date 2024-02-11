import PropTypes from "prop-types";

import "../CultuvateHeader/Header.css"
import QuestTitle from "./HeaderTitle";
import Button  from "../buttons/Button.jsx";



const Header = ({quest, onClose}) => {
    return (
      <header className="container-header">
        <div>
          <Button onClose={onClose}></Button> 
        </div>
        <div>
           < QuestTitle quest={quest}></QuestTitle>
        </div>
        <button>Rechts</button>
      </header>
    );
  }
  
  export default Header;

  Header.propTypes ={
    quest: PropTypes.string,
    onClose: PropTypes.func,
  }