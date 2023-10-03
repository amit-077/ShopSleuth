import React from "react";
import Main from "./Main";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Product from "./Product";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
