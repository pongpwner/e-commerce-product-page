import React, { useState } from "react";
import "./header.styles.scss";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import close from "../../images/icon-close.svg";

const Header = ({ toggleCart, cartQuantity }) => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-group">
          <div className="hamburger header-item mobile" onClick={toggleHidden}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>

          <img
            src={logo}
            alt="Sneakers"
            className="icon header-item logo"
          ></img>
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
        </div>

        <span className="header-group group2">
          <button type="button" onClick={toggleCart}>
            <img
              src={cart}
              alt="cart"
              className="icon header-item cart-icon"
            ></img>
            {cartQuantity > 0 ? (
              <div className="cart-quantity">{cartQuantity}</div>
            ) : null}
          </button>
          <img
            src={avatar}
            alt="avatar"
            className="icon header-item avatar"
          ></img>
        </span>
      </div>
      {hidden ? null : (
        <nav className="mobile link-list-container">
          <ul className="mobile link-list">
            <li>
              <button
                type="button"
                className="close-mobile-nav-button"
                onClick={toggleHidden}
              >
                <img src={close} alt="X"></img>
              </button>
            </li>
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
          <div className="blackout"></div>
        </nav>
      )}
    </header>
  );
};

export default Header;
