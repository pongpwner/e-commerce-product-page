import React from "react";
import "./item-description.styles.scss";
import ItemPrice from "../item-price/item-price.component";

const ItemDescription = ({
  brand,
  itemName,
  description,
  price,
  discount,
  ogPrice,
}) => {
  return (
    <div className="item-description">
      <h1 className="item-brand">{brand}</h1>
      <h2 className="item-name">{itemName}</h2>
      <section className="description">{description}</section>
      <ItemPrice price={price} discount={discount} ogPrice={ogPrice} />
    </div>
  );
};

export default ItemDescription;
