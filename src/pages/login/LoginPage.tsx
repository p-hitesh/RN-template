import React, { useState } from "react";
import CustomButton from "../../components/buttonComponents/CustomButton";
import LoginInput from "../../components/inputComponents/LoginInput";
import * as CONST from "../../resources/constants";
import { LoginAction } from "../../store/auth/user";
import { useAppDispatch } from "../../store/hooks";
import "./login.scss";
function LoginPage() {
  const [inputValue, setInputValue] = useState({ userName: "", password: "" });
  const { userName, password } = inputValue;
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const handleSubmit = (e: any) => {
    console.log(e.target);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <img src={CONST.ksb_logo} className="logoContainer" />
        <div className="formContainer">
          <p className="titleStyle">Login</p>
          <p className="subTitleStyle">IT Systems</p>
          <form onSubmit={handleSubmit}>
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
            <input type="checkbox" name="rememberMe"></input>
            <label htmlFor="rememberMe">remember me</label>
            <CustomButton
              title="Login"
              onClick={() => dispatch(LoginAction(userName, password))}
            ></CustomButton>
            <div className="formFooter">
              <p>new user? signUp</p>
              <p>forgot your password</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
