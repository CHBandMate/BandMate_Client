import { useState } from "react";
import { Route, Router } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Route path="/" Component={<MainPage />}></Route>
    </Router>
  );
}

export default App;
