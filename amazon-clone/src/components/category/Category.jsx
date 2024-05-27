import React from "react";
import { CategoryImage } from "./CategoryFullinfos";
import Categorycard from "./Categorycard";
import classes from "./category.module.css";
const Category = () => {
  return (
    <section className={classes.category_container}>
      {CategoryImage.map((infos, i) => (
        <Categorycard data={infos} key={i} />
      ))}
    </section>
  );
};

export default Category;
