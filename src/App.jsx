import { useEffect, useState } from "react";
import { Route, Router, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AppRoutes from "./router/index";
import { Provider } from "react-redux";

function Layout() {
  // const location = useLocation();
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

function App() {
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
