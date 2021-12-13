import React, { useState } from "react";
import "./item.styles.scss";
import Header from "../components/header/header.component";
import ImageHolder from "../components/image-holder/image-holder.component";
import ItemQuantity from "../components/item-quantity/item-quantity.component";
import CustomButton from "../components/custom-button/custom-button.component";
import ItemDescription from "../components/item-description/item-description.component";
import item1 from "../images/image-product-1.jpg";
import item2 from "../images/image-product-2.jpg";
import item3 from "../images/image-product-3.jpg";
import item4 from "../images/image-product-4.jpg";
import cart from "../images/icon-cart.svg";
import CartDropdown from "../components/cart/cart-dropdown.component";

const ItemPage = ({
  cartItems,
  setCartItems,
  cartQuantity,
  setCartQuantity,
  quantity,
  setQuantity,
}) => {
  const itemDetails = {
    id: 0,
    brand: "Sneaker Company",
    itemName: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "125.00",
    discount: "50%",
    ogPrice: "$250.00",
    images: [
      { image: item1, description: "product", display: false, id: 0 },
      { image: item2, description: "product", display: false, id: 1 },
      { image: item3, description: "product", display: false, id: 2 },
      { image: item4, description: "product", display: false, id: 3 },
    ],
  };

  const addToCart = (item) => {
    // if(cartItems.find(item.id)){
    //   setCartItems((prev) => {
    //     return [...prev, item];
    //   });
    // }
    setCartItems((prev) => {
      return [item];
    });
    setCartQuantity((prev) => prev + quantity);
  };
  return (
    <div className="item-page">
      <ImageHolder itemImages={itemDetails.images} />
      <section className="item-info ">
        <ItemDescription
          brand={itemDetails.brand}
          itemName={itemDetails.itemName}
          description={itemDetails.description}
          price={itemDetails.price}
          discount={itemDetails.discount}
          ogPrice={itemDetails.ogPrice}
        />
        <ItemQuantity quantity={quantity} setQuantity={setQuantity} />
        <CustomButton
          type="button"
          image={cart}
          label="Add To Cart"
          handleClick={() => addToCart(itemDetails)}
        />
      </section>
    </div>
  );
};
export default ItemPage;
