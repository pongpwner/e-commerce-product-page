import React, { useState } from "react";
import "./light-box.styles.scss";
import ImageHolder from "../image-holder/image-holder.component";
import close from "../../images/icon-close.svg";

const LightBox = ({ active, setActive, itemImages }) => {
  return (
    <div className={`light-box desktop ${active ? "active" : ""}`}>
      <span className="content">
        <button
          type="button"
          className="close-button"
          onClick={() => setActive(false)}
        >
          <img src={close} alt="close"></img>
        </button>
        <ImageHolder
          active={active}
          setActive={setActive}
          itemImages={itemImages}
          lightbox
        />
      </span>
    </div>
  );
};

export default LightBox;
