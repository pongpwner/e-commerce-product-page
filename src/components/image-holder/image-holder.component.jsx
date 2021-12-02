import React from "react";
import "./image-holder.styles.scss";
import prev from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
const ImageHolder = ({ images }) => {
  return (
    <div className="image-holder">
      {images.map((image) => (
        <img
          className="product-image"
          src={image.image}
          alt={image.description}
        ></img>
      ))}
      <button type="button" className="mobile changePictureButton">
        <img src={prev} alt="previous product button"></img>
      </button>
      <button type="button" className="moblile changePictureButton">
        <img src={next} alt="next product button"></img>
      </button>
    </div>
  );
};

export default ImageHolder;
