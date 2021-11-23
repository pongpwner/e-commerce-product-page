import React from "react";
import "./item-description.styles.scss";
import ItemPrice from "../item-price/item-price.component";

const ItemDescription = () => {
  return (
    <div className="Item-description">
      <h1>Sneaker</h1>
      <h2>Company Fall Limited Edition Sneakers</h2>
      <section>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </section>
      <ItemPrice price="$125.00" discount="50%" ogPrice="$250.00" />
      Add to cart
    </div>
  );
};

export default ItemDescription;
