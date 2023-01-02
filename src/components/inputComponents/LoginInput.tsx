import React, { FC, InputHTMLAttributes } from "react";
import "./loginInputStyle.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: any;
}

const LoginInput: FC<InputProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => (
  <div className="form-group">
    {label && <p className="labelStyle">{label}</p>}
    <input
      type={type}
      value={value}
      name={name}
      className="inputStyle"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default LoginInput;
