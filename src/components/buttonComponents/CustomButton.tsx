import React, { ButtonHTMLAttributes, FC } from "react";
import "./customButtonStyle.scss";
import "../../styles/index.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: any;
  title?: string;
  isDisabled?: boolean;
  childeren?: React.ReactChild;
}

const CustomButton: FC<ButtonProps> = ({
  onClick,
  title,
  isDisabled,
  childeren,
}) => <button className="buttonStyle" onClick={onClick} value={title}></button>;

export default CustomButton;
