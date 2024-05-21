import React from "react";
import { GrLocation } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import Amazon from "../Assets/images/amazon.png";
import usa from "../Assets/images/USA.png";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img src={Amazon} alt="amazon_logo" />
            </Link>
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
            <Link to="/" className={classes.language}>
              <img src={usa} alt="" />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <p>Hello,Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* Orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
