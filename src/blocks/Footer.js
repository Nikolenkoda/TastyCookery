import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__block">
        <img className="footer__block-image" src="components/image/Footer.png" />
      </div>
      <div className="footer__block-text">
        <p>
          Sign up to receive daily manually selected<br />
          recipes, delicious weekly articles,<br />3-piece sets of slow cooker, vegetarian,<br />
          and lunch ideas, plus Quick&Easy recipes<br />
          and Nutrition Value flashcards via email.
        </p>
      </div>
      <div className="footer__block-input">
        <input className="input" type="text" placeholder="Enter your email"></input>
      </div>
      <div className="footer__block-button">
        SING UP
      </div>
      <div className="footer__block-descripton">
        <p>
          By signing up I agree to the terms of the Privacy Policy
        </p>
      </div>
      <div className="footer__block-info">
        <p>
          © 2014–2018 TastyCookery.com
        </p>
      </div>
    </div>
  );
}

export default Footer;