import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/Endpoints";
import Productcard from "../../components/product/Productcard";
import Loader from "../../components/Loader/Loader";
const Productdetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <Productcard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
};

export default Productdetail;
