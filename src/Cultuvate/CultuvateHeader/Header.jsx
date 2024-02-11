import PropTypes from "prop-types";

import "../CultuvateHeader/Header.css"
import QuestTitle from "./HeaderTitle";
import Button  from "../buttons/Button.jsx";



const Header = ({quest}) => {
    return (
      <header className="container-header">
        <div>
          <Button></Button> 
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
    quest: PropTypes.string
  }