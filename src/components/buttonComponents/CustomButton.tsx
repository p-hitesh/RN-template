import React, { ReactNode } from "react";
import "./customButtonStyle.scss";

interface Props {
  children?: ReactNode;
  onClick: () => void;
}

const CustomButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <a className="buttonStyle" type="button" onClick={onClick}>
      {children}
    </a>
  );
};

export default CustomButton;
