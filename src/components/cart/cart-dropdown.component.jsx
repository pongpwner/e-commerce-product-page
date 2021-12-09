import React from "react";
import "./cart-dropdown.styles.scss";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item";

const CartDropdown = ({
  isActive,
  cartItems,
  cartQuantity,
  setCartItems,
  setCartQuantity,
}) => {
  return (
    <React.Fragment>
      {isActive ? (
        <div className="cart-dropdown">
          <h1 className="title">Cart</h1>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartDropdownItem
                  image={item.images[0].image}
                  itemName={item.itemName}
                  price={item.price}
                  cartQuantity={cartQuantity}
                  setCartItems={setCartItems}
                  setCartQuantity={setCartQuantity}
                />
              ))
            ) : (
              <div className="empty-cart">Your cart is empty</div>
            )}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default CartDropdown;
