import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./pages/Basket";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Rackets from "./pages/Rackets";
import Sportswear from "./pages/Sportswear";
import Balls from "./pages/Balls";
import Bags from "./pages/Bags";
import Shoes from "./pages/Shoes";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/balls" element={<Balls />} />
        <Route path="/rackets" element={<Rackets />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/sportswear" element={<Sportswear />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
