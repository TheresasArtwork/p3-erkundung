import "./styles/CommentInput.css";

const CommentInput = ({ userFirstName }) => {
  const inputPlaceholder = `${userFirstName}'s Impression kommentieren...`;

  return (
    <>
      <div className="commentInput-container">
        <input
          className="commentInput"
          type="text"
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  );
};

export default CommentInput;
