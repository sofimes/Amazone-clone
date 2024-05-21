import React from "react";
import { Rating } from "@mui/material";
import Currencyformat from "../currencyformat/Currencyformat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
const Productcard = ({ product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = product;
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {rating && <Rating value={rating.rate} precision={0.1} />}
          <small>{rating && rating.count}</small>
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
