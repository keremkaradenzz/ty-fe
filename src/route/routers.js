import { Routes, Route } from "react-router-dom";
import { Feedbacks } from "../pages/Feedbacks";
import { Home } from "../pages/Home";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
