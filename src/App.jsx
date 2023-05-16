import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/Login/Login";
import SignupPage from "./components/Signup/Signup";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import EditProduct from "./components/EditProduct/EditProduct";
import AddProduct from "./components/AddProduct/AddProduct";
import ShippingDetails from "./components/ShippingDetails/ShippingDetails";

const userLoggedIn = true; // Replace with your logic to check if user is logged in

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <Routes>
        {userLoggedIn && <Route exact path="/" element={<ProductPage />} />}
        {/* If the user is logged in, render the ProductPage component for the home route */}
        {!userLoggedIn && <Route exact path="/" element={<LoginPage />} />}
        {/* If the user is not logged in, render the LoginPage component for the home route */}
        <Route path="/login" element={<LoginPage />} />
        {/* Render the LoginPage component for the /login route */}
        <Route path="/signup" element={<SignupPage />} />
        {/* Render the SignupPage component for the /signup route */}
        <Route path="/ProductPage" element={<ProductPage />} />
        {/* Render the ProductPage component for the /ProductPage route */}
        <Route path="/ProductDetail" element={<ProductDetail />} />
        {/* Render the ProductDetail component for the /ProductDetail route */}
        <Route path="/ShippingDetails" element={<ShippingDetails />} />
        {/* Render the ShippingDetails component for the /ShippingDetails route */}
        <Route path="/EditProduct" element={<EditProduct />} />
        {/* Render the EditProduct component for the /EditProduct route */}
        <Route path="/AddProduct" element={<AddProduct />} />
        {/* Render the AddProduct component for the /AddProduct route */}
        {/* Other routes can be added here */}
      </Routes>
    </div>
  );
};

export default App;
