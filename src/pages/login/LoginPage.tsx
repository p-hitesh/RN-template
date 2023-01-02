import React, { useState } from "react";
import LoginInput from "../../components/inputComponents/LoginInput";
import * as CONST from "../../resources/constants";
import "./login.scss";
function LoginPage() {
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });
  const { userName, password } = inputValue;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <img src={CONST.ksb_logo} className="logoContainer" />
        <div className="formContainer">
          <p className="titleStyle">Login</p>
          <p className="subTitleStyle">IT Systems</p>
          <form>
            <LoginInput
              type="text"
              value={userName}
              placeholder="Enter username"
              label="Username"
              name="userName"
              onChange={handleChange}
            />
            <LoginInput
              type="password"
              value={password}
              placeholder="Enter password"
              label="Password"
              name="password"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
