import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpages from "./pages/landing/Landingpages";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/orders/Orders";
import Payment from "./pages/payment/Payment";
import Results from "./pages/results/Results";
import Productdetail from "./pages/productdetail/Productdetail";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51PKTBHB6917lOTvc704OMEs27rrP5SGSSyvvR3AB7PX6VTILwCUGmORuPNsVhKzMJnOePf4uLCJytuUi8oxPG8gb00LjsBh2k5"
);

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpages />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute
                msg={"you must log in to pay"}
                redirect={"/payment"}
              >
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute
                msg={"you must log in to see your orders"}
                redirect={"/orders"}
              >
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
