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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    // console.log(inputValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <img src={CONST.ksb_logo} className="logoContainer" />
        <div className="formContainer">
          <p className="titleStyle">Login</p>
          <p className="subTitleStyle">IT Systems</p>
          <form onSubmit={handleSubmit}>
            <div className="top_con">
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
              <div className="rememberme_con">
                <input
                  className="rememberme_box"
                  type="checkbox"
                  name="rememberMe"
                ></input>
                <label className="rememberme_text" htmlFor="rememberMe">
                  remember me
                </label>
              </div>
            </div>
            {/* <div className="spacer"></div> */}
            <div className="bottom_con">
              <CustomButton
                onClick={() => dispatch(LoginAction(userName, password))}
              >
                Login
              </CustomButton>
              <div className="formFooter">
                <div className="formFooter_row">
                  <p className="formFooter_light-text">new user?</p>
                  <p className="formFooter_medium-text">signup</p>
                </div>
                <p className="formFooter_light-text">forgot your password</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
