import React from "react";
import * as CONST from "../../resources/constants";
import "./login.scss";
function LoginPage() {
  return (
    <div className="container">
      <img src={CONST.ksb_logo} className="logoContainer" />
      <div className="formContainer"></div>
    </div>
  );
}

export default LoginPage;
