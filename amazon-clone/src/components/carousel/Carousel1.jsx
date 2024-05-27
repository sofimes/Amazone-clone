import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import classes from "./carousel.module.css";
function Carousel1() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={true}
      >
        {img.map((imageItemLink) => {
          return (
            <img
              key={imageItemLink}
              src={imageItemLink}
              className={classes.one}
            />
          );
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default Carousel1;
