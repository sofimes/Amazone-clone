import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpages from "./pages/landing/Landingpages";
import Signup from "./pages/Auth/Signup";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/orders/Orders";
import Payment from "./pages/payment/Payment";
import Results from "./pages/results/Results";
import Productdetail from "./pages/productdetail/Productdetail";

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpages />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
