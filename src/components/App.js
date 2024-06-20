import React from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";

function App() {
  //console.log("Here's your data:", video);
  const reviews = video.comments
  

  return (
    <div>
      <Video link={video.embedUrl} />
      <div>
        <Details
          title={video.title}
          views={video.views} 
          uploaded={video.createdAt}
          upvotes={video.upvotes}
          downvotes={video.downvotes}          
          reviews= {reviews} 
          />
      </div>
    </div>
  );
}

export default App;
