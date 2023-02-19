import React, { FC, InputHTMLAttributes } from "react";
import "./commanInputStyles.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommanInput: FC<InputProps> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => (
  <div className="commanInput_con">
    {label && <p className="commanInput_label">{label}</p>}
    <input
      type={type}
      value={value}
      name={name}
      className="commanInput_input"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default CommanInput;
