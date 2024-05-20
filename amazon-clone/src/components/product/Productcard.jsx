import React from "react";
import { Rating } from "@mui/material";
import Currencyformat from "../currencyformat/Currencyformat";
import classes from "./product.module.css";
const Productcard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={`${classes.card_container}`}>
      <a href="/">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <Currencyformat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default Productcard;
