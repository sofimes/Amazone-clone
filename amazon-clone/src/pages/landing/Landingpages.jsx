import React from "react";
import Carousel1 from "../../components/carousel/Carousel1";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import Layout from "../../components/layout/Layout";
const Landingpages = () => {
  return (
    <Layout>
      <Carousel1 />
      <Category />
      <Product />
    </Layout>
  );
};

export default Landingpages;
