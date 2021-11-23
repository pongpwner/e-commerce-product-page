import React from "react";
import "./item.styles.scss";
import Header from "../components/header/header.component";
import ImageHolder from "../components/image-holder/image-holder.component";
import ItemQuantity from "../components/item-quantity/item-quantity.component";
import CustomButton from "../components/custom-button/custom-button.component";
import ItemDescription from "../components/item-description/item-description.component";

const ItemPage = () => {
  return (
    <div className="itemPage">
      <Header />
      <ImageHolder />
      <ItemDescription />
      <ItemQuantity />
      <CustomButton type="button" label="Add To Cart" />
    </div>
  );
};
export default ItemPage;
