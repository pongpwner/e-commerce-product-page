import React, { useState } from "react";
import "./header.styles.scss";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

const Header = ({ toggleCart }) => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <header className="header">
      <div className="header-content">
        <span className="header-group">
          <div className="hamburger header-item" onClick={toggleHidden}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <img src={logo} alt="Sneakers" className="icon header-item"></img>
        </span>

        <ul className="desktop link-list">
          <li>
            <a href="./">Collections </a>
          </li>
          <li>
            <a href="./">Men </a>
          </li>
          <li>
            <a href="./">Women </a>
          </li>
          <li>
            <a href="./">About </a>
          </li>
          <li>
            <a href="./">Contact </a>
          </li>
        </ul>
        <span className="header-group group2">
          <button type="button" onClick={toggleCart}>
            <img src={cart} alt="cart" className="icon header-item"></img>
          </button>
          <img src={avatar} alt="avatar" className="icon header-item"></img>
        </span>
      </div>
      {hidden ? null : (
        <ul className="mobile link-list">
          <li>
            <a href="./">Collections </a>
          </li>
          <li>
            <a href="./">Men </a>
          </li>
          <li>
            <a href="./">Women </a>
          </li>
          <li>
            <a href="./">About </a>
          </li>
          <li>
            <a href="./">Contact </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;