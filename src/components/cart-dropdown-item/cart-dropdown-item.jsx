import React from "react";
import "./cart-dropdown-item.styles.scss";
import deleteIcon from "../../images/icon-delete.svg";

const CartDropdownItem = ({
  image,
  itemName,
  price,
  cartQuantity,
  setCartItems,
  setCartQuantity,
}) => {
  const deleteItem = () => {
    setCartItems([]);
    setCartQuantity(0);
  };
  return (
    <div className="cart-dropdown-item">
      <img className="item-image" src={image} alt={itemName}></img>
      <div className="group">
        <div className="item-name">{itemName}</div>
        <div className="inner-group">
          <div className="price">
            ${price} x {cartQuantity}
          </div>

          <div className="total-price">
            ${Number(price) * Number(cartQuantity)}
          </div>
        </div>
      </div>
      <button className="delete-button" onClick={deleteItem}>
        <img className="delete" src={deleteIcon} alt="delete"></img>
      </button>
    </div>
  );
};
export default CartDropdownItem;
