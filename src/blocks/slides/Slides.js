import React from "react";

const Slides = () => {
  return (
    <div className="slidere-containere">
      <div className="menue">
        <label for="slidee-dote-1"></label>
        <label for="slidee-dote-2"></label>
        <label for="slidee-dote-3"></label>
      </div>

      <input className="none" id="slidee-dote-1" type="radio" name="slidese" checked />
      <div className="slidee slidee-1">
        <img className="mobile" src="components/image/comments.png"></img>
      </div>

      <input className="none" id="slidee-dote-2" type="radio" name="slidese" />
      <div className="slidee slide-2">
        <img className="mobile" src="components/image/comments1.png"></img>
      </div>

      <input className="none" id="slidee-dote-3" type="radio" name="slidese" />
      <div className="slidee slidee-3">
        <img className="mobile" src="components/image/comments2.png"></img>
      </div>
    </div>
  );
}

export default Slides; 
