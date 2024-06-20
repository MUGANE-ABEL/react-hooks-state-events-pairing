import React from "react";

function Liker({upvote, downvote, onUpVote, onDownvote}){
   
    return(
        <div className="Liker">
        <span>
            <button onClick={onUpVote} > {upvote}👍 </button>
            <button onClick={onDownvote} > {downvote}👎 </button>
        </span>
      </div>
    )
}

export default Liker