import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import Detail from "../pages/DetailPage";
import UserProfilePage from "../pages/UserProfilePage";
import BandProfilePage from "../pages/BandProfilePage";
import ApplyPage from "../pages/ApplyPage";
import ApplyDetailPage from "../pages/ApplyDetailPage";
import Login from "../pages/LoginPage";
import AuthPage from "../pages/AuthPage";
import PrivateRoute from "./PrivateRoute";
import Example from "../components/test";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<Example />}></Route>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route
        path="/detail"
        element={
          <PrivateRoute>
            <Detail />
          </PrivateRoute>
        }
      />
      <Route
        path="/band"
        element={
          <PrivateRoute>
            <BandProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/apply"
        element={
          <PrivateRoute>
            <ApplyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/applydetail"
        element={
          <PrivateRoute>
            <ApplyDetailPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
