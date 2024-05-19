import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Amazon from "../Assets/images/amazon.png";
import usa from "../Assets/images/USA.png";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <a href="/">
              <img src={Amazon} alt="amazon_logo" />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <GrLocation />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch />
          </div>
          <div className={classes.order_container}>
            <a href="/" className={classes.language}>
              <img src={usa} alt="" />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            <a href="/">
              <p>Hello,Sign In</p>
              <span>Account & Lists</span>
            </a>
            {/* Orders */}
            <a href="/">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="/" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
