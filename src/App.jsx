import { useEffect, useState } from "react";
import { BrowserRouter, Route, Router, useLocation } from "react-router-dom";
import AppRoutes from "./router/index";
import { Provider } from "react-redux";
import Header from "./components/HeaderTitle";
import "./assets/scss/reset.scss";
import "./assets/scss/main.scss";
import "./assets/scss/mypage.scss";
import "./assets/scss/detail.scss";
import "./assets/scss/profile.scss";

function Layout() {
  // const location = useLocation();
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

function App() {
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
