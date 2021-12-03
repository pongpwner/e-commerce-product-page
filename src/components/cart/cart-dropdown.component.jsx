import React from "react";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ isActive }) => {
  return (
    <React.Fragment>
      {isActive ? (
        <div className="cart-dropdown">
          <h1 className="title">Cart</h1>
          <div className="cart-items">
            <div className="empty-cart">Your cart is empty</div>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default CartDropdown;
