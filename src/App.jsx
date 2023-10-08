import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StripePayment from "./StripePayment";
import Cancel from "./Cancle";
import Success from "./Success";
import Googlelog from "./Googlelog";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={<StripePayment />} />
        <Route path="/googlelog" element={<Googlelog />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App; 