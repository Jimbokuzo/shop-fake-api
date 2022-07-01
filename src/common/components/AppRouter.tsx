import { Routes, Route } from "react-router-dom";
import { HomeFeature, ContactFeature, ProductFeature } from "../../features";
import { AboutUsFeatures } from "../../features/aboutus";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/contacts" element={<ContactFeature />} />
    <Route path="/aboutus" element={<AboutUsFeatures />} />
    <Route path="/product/:productId" element={<ProductFeature />} />
  </Routes>
);
