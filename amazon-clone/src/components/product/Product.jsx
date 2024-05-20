import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import classes from "./product.module.css";
const Product = () => {
  const [products, setproducts] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={classes.products_container}>
      {products &&
        products.map((singleProduct) => {
          return <Productcard product={singleProduct} key={singleProduct.id} />;
        })}
    </section>
  );
};

export default Product;
