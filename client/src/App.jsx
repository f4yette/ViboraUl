import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Basket from "./pages/Basket";
import Login from "./pages/Login";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/rackets" element={<Category type="rackets" />} />
        <Route path="/balls" element={<Category type="balls" />} />
        <Route path="/sportswear" element={<Category type="sportswear" />} />
        <Route path="/bags" element={<Category type="bags" />} />
        <Route path="/shoes" element={<Category type="shoes" />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

