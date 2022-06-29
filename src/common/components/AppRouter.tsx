import { Routes, Route } from "react-router-dom";
import { HomeFeature, ContactFeature, PostFeature } from "../../features";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomeFeature />} />
    <Route path="/contacts" element={<ContactFeature />} />
    <Route path="/post/:postId" element={<PostFeature />} />
  </Routes>
);
