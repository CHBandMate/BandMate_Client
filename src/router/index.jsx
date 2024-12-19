import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <MainPage></MainPage>
      {/* <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default AppRoutes;
