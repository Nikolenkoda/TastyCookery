import React from "react";
import Sliders from './slides/Sliders.js';
import Slider from './slides/Slider.js';
import Slides from './slides/Slides.js';

const AboutUs = () => {
  return (
    <div className="about">
      <Sliders />
      <div className="about__icon">
        <div className="about__icon-item">
          <img src="components/image/1.png"></img>
          <p className="about__icon-item-title">Простые домашние<br /> рецепты</p>
        </div>
        <div className="about__icon-item">
          <img src="components/image/2.png"></img>
          <p className="about__icon-item-title">Статьи о готовке</p>
        </div>
        <div className="about__icon-item">
          <img src="components/image/3.png"></img>
          <p className="about__icon-item-title">Бесплатная книга рецептов всем подписчикам</p>
        </div>
        <div className="about__icon-item">
          <img src="components/image/4.png"></img>
          <p className="about__icon-item-title">Собирай рецепты<br /> в Reciple Box</p>
        </div>
        <div className="about__icon-item">
          <img src="components/image/5.png"></img>
          <p className="about__icon-item-title">Печать рецептов</p>
        </div>
      </div>
      <div className="about__info">
        <div className="about__info-title">
          <p>Почему круто быть с нами: </p>
          <Slider />
        </div>
        <div className="about__info__block">
          <div className="about__info__block-item" >
            <img className="about__info__block-item-image" src="components/image/1-1.png"></img>
            <p className="about__info__block-item-image-text" > Получать лучшее рецепты <br />по разным категориям</p>
          </div>
          <div className="about__info__block-item" >
            <img className="about__info__block-item-image" src="components/image/1-2.png"></img>
            <p className="about__info__block-item-image-text"> Готовить без лишних усилий<br /> и делать из каждого дня<br /> не рутинный</p>
          </div>
          <div className="about__info__block-item" >
            <img className="about__info__block-item-image" src="components/image/1-3.png"></img>
            <p className="about__info__block-item-image-text"> Довольные<br /> члены семьи</p>
          </div>
        </div>
      </div>
      <div className="about__app">
        <img className="about__app-image" src="components/image/2-1.png" />
        <p className="about__app-text">Удобно получать на емейл уникальные проверенные рецепты,<br /> которые дружная команда Tastycookery попробовала сама и рекомендует</p>
        <div className="about__app-button">Стать членом семьи Tastycookery<br />БЕСПЛАТНО</div>
      </div>
      <div className="about__comments">
        <p className="about__comments-title">Отзывы довольных пользователей</p>
        <Slides />
        <div className="about__comments-block">
          <div className="about__comments-block-image">
            <img className="about__comments-block-image-imagecomm" src="components/image/comments.png"></img>
          </div>
          <div className="about__comments-block-image">
            <img className="about__comments-block-image-imagecomm" src="components/image/comments1.png"></img>
          </div>
          <div className="about__comments-block-image">
            <img className="about__comments-block-image-imagecomm" src="components/image/comments2.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;