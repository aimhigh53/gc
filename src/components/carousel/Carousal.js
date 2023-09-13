import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../scroll-down/ScrollDown";

import "./carousal.css";

import RollingOne from "../../views/Main/component/Rolling-1";
import RollingTwo from "../../views/Main/component/Rolling-2";
const CustomCarousel = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={1000}
        pause={false}
        className="vertical"
      >
        <Carousel.Item>
          <RollingOne />
        </Carousel.Item>
        <Carousel.Item>
          <RollingTwo />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default CustomCarousel;
