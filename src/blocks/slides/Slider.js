import React from "react";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="menu">
        <label for="slide-dot-1"></label>
        <label for="slide-dot-2"></label>
        <label for="slide-dot-3"></label>
      </div>

      <input className="none" id="slide-dot-1" type="radio" name="slides" checked />
      <div className="slide slide-1">
        <img className="mobile" src="components/image/1-1.png"></img>
        <p className="texm" > Получать лучшее рецепты <br />по разным категориям</p>
      </div>

      <input className="none" id="slide-dot-2" type="radio" name="slides" />
      <div className="slide slide-2">
        <img className="mobile" src="components/image/1-1.png"></img>
        <p className="texm"> Готовить без лишних усилий<br /> и делать из каждого дня<br /> не рутинный</p>
      </div>

      <input className="none" id="slide-dot-3" type="radio" name="slides" />
      <div className="slide slide-3">
        <img className="mobile" src="components/image/1-1.png"></img>
        <p className="texm"> Довольные<br /> члены семьи</p>
      </div>
    </div>
  );
}

export default Slider; 
