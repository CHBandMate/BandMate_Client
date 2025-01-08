import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import Detail from "../pages/DetailPage";
import UserProfilePage from "../pages/UserProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
