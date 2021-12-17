import React, { useState, useEffect } from "react";
import "./image-holder.styles.scss";
import prev from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
const ImageHolder = ({ itemImages, setActive, lightbox }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [images, setImages] = useState(itemImages);
  function showSlides(n) {
    setImages((prev) => {
      let temp = [...prev];
      for (let i = 0; i < prev.length; i++) {
        temp[i].display = false;
        if (i == slideIndex) {
          temp[slideIndex].display = true;
          console.log(slideIndex);
        }
      }

      return temp;
    });
  }

  function plusSlides(n) {
    if (slideIndex + n > images.length - 1) {
      setSlideIndex(0);
    } else if (slideIndex + n < 0) {
      setSlideIndex(images.length - 1);
    } else {
      setSlideIndex((prev) => (prev += n));
    }
  }

  function currentSlide(n) {
    showSlides(setSlideIndex(n));
  }
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);
  // useEffect(() => {
  //   console.log(slideIndex);
  //   showSlides(1);
  // }, []);
  return (
    <div className="image-holder">
      <span className="carousel-holder desktop">
        {images.map((image) => (
          <img
            className={`product-image desktop ${
              image.display ? "active" : ""
            } `}
            src={image.image}
            alt={image.description}
            onClick={() => setActive(true)}
          ></img>
        ))}
      </span>
      <span className=" carousel-holder mobile">
        {images.map((image) => (
          <img
            className={`product-image  ${image.display ? "active" : ""} `}
            src={image.image}
            alt={image.description}
          ></img>
        ))}
      </span>
      <div className="slideshow">
        {images.map((image) => (
          <img
            src={image.image}
            className={`navigation-image desktop ${
              image.display ? "current-active" : ""
            }`}
            onClick={() => currentSlide(image.id)}
            alt="item"
          ></img>
        ))}
      </div>
      <button
        type="button"
        className={`mobile prev ${lightbox ? "lightbox-active" : ""}`}
        onClick={() => plusSlides(-1)}
      >
        <img src={prev} alt="previous product button"></img>
      </button>
      <button
        type="button"
        className={`mobile next ${lightbox ? "lightbox-active" : ""}`}
        onClick={() => plusSlides(1)}
      >
        <img src={next} alt="next product button"></img>
      </button>
    </div>
  );
};

export default ImageHolder;
