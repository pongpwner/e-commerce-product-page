import React, { useState, useEffect } from "react";
import "./image-holder.styles.scss";
import prev from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
const ImageHolder = ({ images, setImages }) => {
  const [slideIndex, setSlideIndex] = useState(0);
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
      {images.map((image) => (
        <img
          className={`product-image ${image.display ? "active" : ""} `}
          src={image.image}
          alt={image.description}
        ></img>
      ))}
      <button
        type="button"
        className="mobile prev"
        onClick={() => plusSlides(-1)}
      >
        <img src={prev} alt="previous product button"></img>
      </button>
      <button
        type="button"
        className="moblile next"
        onClick={() => plusSlides(1)}
      >
        <img src={next} alt="next product button"></img>
      </button>
    </div>
  );
};

export default ImageHolder;
