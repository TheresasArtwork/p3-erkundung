import PropTypes from "prop-types";
import "../CultuvateHeader/Header.css";

const QuestTitle = ({ quest }) => {
  return (
    <>
      <div className="container-header">
        <h1>{quest}</h1>
      </div>
    </>
  );
};

export default QuestTitle;

QuestTitle.propTypes = {
  quest: PropTypes.string,
};
