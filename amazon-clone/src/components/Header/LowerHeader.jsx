import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu size={25} />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registery</li>
        <li>Gift cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
