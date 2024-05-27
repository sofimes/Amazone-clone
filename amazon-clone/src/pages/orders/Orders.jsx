import React, { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { db } from "../../Utility/Firebase";
import { DataContext } from "../../components/Dataproider/Dataprovider";
import classes from "./orders.module.css";
import Productcard from "../../components/product/Productcard";
const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          <div>
            {orders?.length == 0 && (
              <p style={{ padding: "20px" }}>No orders yet</p>
            )}
          </div>
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <Productcard flex={true} product={order} key={order.id} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
