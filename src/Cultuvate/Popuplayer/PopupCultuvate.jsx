import PropTypes from "prop-types"
import "../Popuplayer/PopupCultuvate.css";
import Header from "../CultuvateHeader/Header";
import ImageComponent from "../images/ImageComponent";



const PopupCultuvate = ({
  imagequest,
  quest
}) => {
  


  return (
    <>
      <div className="popup-cultuvate">
       <Header quest={quest}>
        </Header>  
      </div>
      <div className="image-container">
        <ImageComponent imagequest={imagequest}></ImageComponent>
      </div>
      

    </>
  );
};

export default PopupCultuvate;

PopupCultuvate.propTypes = {
  imagequest: PropTypes.string,
  quest: PropTypes.string
}
