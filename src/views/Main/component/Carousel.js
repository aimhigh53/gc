import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../Frame.module.css";

import mainOne from "../../../assets/img/home/main_1.png";
import mainTwo from "../../../assets/img/home/main_2.png";

const Carousel = () => {
  console.log(`${styles.imageCarousel} dots_custom`);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       width: "100%",
    //       position: "absolute",
    //       bottom: "24px",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //     }}
    //   >
    //     <ul> {dots} </ul>
    //   </div>
    // ),
    dotsClass: `dots_custom`,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div className={styles.carousel}>
          <img src={mainOne} alt="Main One" />
        </div>
        <div className={styles.carousel}>
          <img src={mainTwo} alt="Main Two" />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
