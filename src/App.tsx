import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import { useAppSelector } from "./store/hooks";

function App() {
  const isUserAvailable: boolean = useAppSelector(
    (state) => state.auth.isLogin
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isUserAvailable ? (
            <Route path={"/"} element={<Dashboard />}></Route>
          ) : (
            <Route path="/" element={<LoginPage />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
