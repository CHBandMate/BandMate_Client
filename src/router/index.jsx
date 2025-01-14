import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import Detail from "../pages/DetailPage";
import UserProfilePage from "../pages/UserProfilePage";
import BandProfilePage from "../pages/BandProfilePage";
import ApplyPage from "../pages/ApplyPage";
import ApplyDetailPage from "../pages/ApplyDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/band" element={<BandProfilePage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/applydetail" element={<ApplyDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
