import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/Dataproider/Dataprovider";
import Productcard from "../../components/product/Productcard";
import Currencyformat from "../../components/currencyformat/Currencyformat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/Actiontype";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total =
    basket && basket.length > 0
      ? basket.reduce((amount, item) => {
          return amount + item.price * item.amount;
        }, 0)
      : 0;
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>opps! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <Productcard
                    key={i}
                    product={item}
                    renderAdd={false}
                    renderDesc={true}
                    flex={true}
                  />
                  <div className={classes.button_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={30} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        <div>
          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({basket?.length} items)</p>
                <Currencyformat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment">Continue to checkout</Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
