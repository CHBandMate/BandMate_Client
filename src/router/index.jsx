import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
