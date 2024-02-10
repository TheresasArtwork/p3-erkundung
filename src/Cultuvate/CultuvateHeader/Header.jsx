import "../CultuvateHeader/Header.css"
import { Button } from "../buttons/Button";

function Header() {
    return (
      <header className="container-header">
        <div>
            <Button></Button>
        </div>
        <h1> Quest1
        </h1>
        <button>Rechts</button>
      </header>
    );
  }
  
  export default Header;