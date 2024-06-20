import React from "react";

function Comments({ review }) {
  return (
    <div>
      <div>{review.user}</div>
      <div>{review.comment}</div>
    </div>
  );
}

export default Comments;
