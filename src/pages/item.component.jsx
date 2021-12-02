import React from "react";
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

const ItemPage = () => {
  const images = [
    { image: item1, description: "product" },
    { image: item2, description: "product" },
    { image: item3, description: "product" },
    { image: item4, description: "product" },
  ];
  return (
    <div className="itemPage">
      <Header />
      <ImageHolder images={images} />
      <ItemDescription />
      <ItemQuantity />
      <CustomButton type="button" image={cart} label="Add To Cart" />
    </div>
  );
};
export default ItemPage;
