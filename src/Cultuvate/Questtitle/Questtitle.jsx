import PropTypes from "prop-types";
import "../Questtitle/Questtitle.css"

const QuestTitle = ({ questtitle }) => {
    return (
      <>
        <div className="container-questtitle">
          <h1>{questtitle}</h1>
        </div>
      </>
    );
  };
  
  export default QuestTitle;
  
  QuestTitle.propTypes = {
    questtitle: PropTypes.string,
  }