import React from "react";


function Video({link}){
    return(
        <div className="App">
      <iframe
        width="919"
        height="525"
        src={link}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
    )
}


export default Video