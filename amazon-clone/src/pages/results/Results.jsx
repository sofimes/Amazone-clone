import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import classes from "./results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/Endpoints";
import Productcard from "../../components/product/Productcard";
import Loader from "../../components/Loader/Loader";
const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <Productcard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Results;
