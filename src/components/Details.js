import React, { useState } from "react";
import Comments from "./Comments";
import Liker from "./Liker";

function Details({ title, views, uploaded, reviews, upvotes, downvotes }) {
  const [isShown, setIsShown] = useState(true);
  const [upvote, setUpVote] = useState(upvotes)
  const [downvote, setDownVote] = useState(downvotes)

  function handleClick() {
    setIsShown((isShown) => !isShown);
  }
  function handleUpVote() {
    setUpVote((upvote) => upvote+1);
  }
  function handleDownVote() {
    setDownVote((downvote) => downvote+1);
  }


  return (
    <div className="Details">
      <div>{title}</div>
      <span className="smalltext">{views} | </span>
      <span className="smalltext">{uploaded}</span>
      <Liker 
        upvote={upvote}
        downvote={downvote}
        onUpVote={handleUpVote} 
        onDownvote={handleDownVote}
        />
      <div>
      <button onClick={handleClick}>
        {isShown ? "Hide Comments" : "View Comments"}
      </button>
      </div>
     

      <div>
        {isShown &&
          reviews &&
          reviews.map((review, index) => (
            <Comments key={index} review={review} />
          ))}
      </div>
    </div>
  );
}

export default Details;
