import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/landing/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/" element={<LoginPage />}></Route>
          <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
