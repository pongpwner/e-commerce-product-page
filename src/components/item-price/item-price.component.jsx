import React from "react";
import "./item-price.styles.scss";

const ItemPrice = ({ price, discount, ogPrice }) => {
  return (
    <div className="item-price">
      <span className="group">
        <span className="price">{price}</span>
        <span className="discount">{discount}</span>
      </span>
      <span group className="og-price">
        {ogPrice}
      </span>
    </div>
  );
};
export default ItemPrice;
