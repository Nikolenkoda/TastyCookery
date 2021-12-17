import React from "react";

const Sliders = () => {
  return (
    <div className="sliders-container">
      <div className="menus">
        <label for="slid-dt-1"></label>
        <label for="slid-dt-2"></label>
        <label for="slid-dt-3"></label>
        <label for="slid-dt-4"></label>
        <label for="slid-dt-5"></label>
      </div>

      <input className="none" id="slid-dt-1" type="radio" name="slide" checked />
      <div className="slid slid-1">
        <img className="mobiles" src="components/image/1.png"></img>
        <p className="textm">Простые домашние<br /> рецепты</p>
      </div>

      <input className="none" id="slid-dt-2" type="radio" name="slide" />
      <div className="slid slid-2">
        <img className="mobiles" src="components/image/1.png"></img>
        <p className="textm">Статьи о готовке</p>
      </div>

      <input className="none" id="slid-dt-3" type="radio" name="slide" />
      <div className="slid slid-3">
        <img className="mobiles" src="components/image/1.png"></img>
        <p className="textm">Бесплатная книга рецептов всем подписчикам</p>
      </div>

      <input className="none" id="slid-dt-4" type="radio" name="slide" />
      <div className="slid slid-4">
        <img className="mobiles" src="components/image/1.png"></img>
        <p className="textm">Собирай рецепты<br /> в Reciple Box</p>
      </div>

      <input className="none" id="slid-dt-5" type="radio" name="slide" />
      <div className="slid slid-5">
        <img className="mobiles" src="components/image/1.png"></img>
        <p className="textm">Печать рецептов</p>
      </div>
    </div>
  );
}

export default Sliders; 
