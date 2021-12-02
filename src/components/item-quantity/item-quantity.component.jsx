import React from "react";
import "./item-quantity.styles.scss";
import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";

const ItemQuantity = () => (
  <div className="item-quantity">
    <img src={minus} alt="-"></img> <div>0</div> <img src={plus} alt="+"></img>
  </div>
);
export default ItemQuantity;
