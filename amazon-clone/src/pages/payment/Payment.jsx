import React, { useContext, useState } from "react";
import classes from "./payment.module.css";
import Layout from "../../components/layout/Layout";
import { DataContext } from "../../components/Dataproider/Dataprovider";
import Productcard from "../../components/product/Productcard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Currencyformat from "../../components/currencyformat/Currencyformat";
import { axiosInstance } from "../../API/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/Actiontype";

const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  // console.log(user);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total =
    basket && basket.length > 0
      ? basket.reduce((amount, item) => {
          return amount + item.price * item.amount;
        }, 0)
      : 0;

  const [cardErr, setCardErr] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e?.error?.message ? setCardErr(e?.error.message) : setCardErr("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}&currency=USD`,
      });
      const clientSecret = response.data?.clientSecret;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);

      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      dispatch({ type: Type.EMPTY_BASKET });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  return (
    <Layout>
      <div className={classes.payment_header}>Chechout ({totalItem}) items</div>
      <section className={classes.payment}>
        <div className={classes.flex}>
          <h3>Delivery Adress</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, i) => {
              return <Productcard product={item} flex={true} key={i} />;
            })}
          </div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_element}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardErr && <small style={{ color: "red" }}>{cardErr}</small>}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p>
                      <Currencyformat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
