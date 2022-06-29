import { Routes, Route } from "react-router-dom";
import { HomeFeature, ContactFeature, ProductFeature } from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/contacts" element={<ContactFeature />} />
    <Route path="/product/:productId" element={<ProductFeature />} />
  </Routes>
);
