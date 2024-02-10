import PropTypes from "prop-types";

import CommentInput from "./CommentInput";
import CommentStatus from "./CommentStatus";
import LikeStatus from "./LikeStatus";

import "../Content/styles/ContentContainer.css";

const ContentContainer = ({
  userFirstName,
  recordingDate,
  recordingTime,
  likedBy,
}) => {
  return (
    <>
      <div className="content-container">
        <div className="social-container">
          <LikeStatus likedBy={likedBy}></LikeStatus>
          <CommentStatus></CommentStatus>
          <CommentInput userFirstName={userFirstName}></CommentInput>
        </div>
        <div className="imageInformation">
          vom {recordingDate} um {recordingTime}
        </div>
      </div>
    </>
  );
};

export default ContentContainer;

ContentContainer.propTypes = {
  userFirstName: PropTypes.string,
  recordingDate: PropTypes.string,
  recordingTime: PropTypes.string,
  likedBy: PropTypes.number,
};
