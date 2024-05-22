import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";
const Product = () => {
  const [products, setproducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products &&
            products.map((singleProduct) => {
              return (
                <Productcard
                  product={singleProduct}
                  key={singleProduct.id}
                  renderAdd={true}
                />
              );
            })}
        </section>
      )}
    </>
  );
};

export default Product;
