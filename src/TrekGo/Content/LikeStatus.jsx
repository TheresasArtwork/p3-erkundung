import PropTypes from "prop-types";

import { useState } from "react";
import "./styles/LikeStatus.css";
import iconHeartOutlined from "../icons/heartOutlined.svg";
import iconHeartFilled from "../icons/heartFilled.svg";

const LikeStatus = ({ likedBy }) => {
  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likedBy);

  const handleLikeClick = () => {
    if (liked) {
      setTotalLikes(totalLikes - 1);
    } else {
      setTotalLikes(likedBy + 1);
    }
    setLiked(!liked);
  };

  return (
    <>
      <div className="likeStatus-container">
        <div className="amountOftotalLikes">{totalLikes}</div>
        <img
          onClick={handleLikeClick}
          src={liked ? iconHeartFilled : iconHeartOutlined}
          alt="Like"
        ></img>
      </div>
    </>
  );
};

export default LikeStatus;

LikeStatus.propTypes = {
  likedBy: PropTypes.number,
};
