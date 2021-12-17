import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className='header__app'>
        <img className='header__app-image-desc' src="components/image/Header.png"></img>
        <img className='header__app-image-tab' src="components/image/Header-tab.png"></img>
        <img className='header__app-image-mob' src="components/image/Mheader.png"></img>
        <img className='header__app-title' src="components/image/Title.png"></img>
        <p className="header__app-text">Домашние<br /> простые рецепты</p>
        <p className="header__app-min">Собирайте рецепты в recipe box</p>
        <div className="header__app-button">Присоедениться <br />к сообществу</div>
      </div>
    </div>
  );
}

export default Header;