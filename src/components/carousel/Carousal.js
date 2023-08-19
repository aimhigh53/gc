import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll-down/ScrollDown";

import "./carousal.css";

import Slide1 from "../../assets/img/carousal/5.webp";
import Slide2 from "../../assets/img/carousal/3.webp";
import Slide3 from "../../assets/img/carousal/2.webp";
import Slide5 from "../../assets/img/carousal/1.webp";
const CustomCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={Slide5}
            alt="fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default CustomCarousel;