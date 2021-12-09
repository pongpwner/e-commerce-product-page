import React from "react";
import "./item-quantity.styles.scss";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";

const ItemQuantity = ({ quantity, setQuantity }) => (
  <div className="item-quantity">
    <button
      className="quantity-button"
      onClick={() =>
        setQuantity((prev) => {
          if (prev === 0) {
            return 0;
          }
          return prev - 1;
        })
      }
    >
      <img src={minus} alt="-"></img>
    </button>
    <div className="quantity">{quantity}</div>
    <button
      className="quantity-button"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      <img src={plus} alt="+"></img>
    </button>
  </div>
);
export default ItemQuantity;
