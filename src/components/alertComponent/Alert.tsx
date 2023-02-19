import React, { useEffect } from "react";
import "./AlertStyles.scss";

const Alert = ({ message, onYes, onNo }: any) => {
  useEffect(() => {
    // Add class to body element to prevent scrolling
    document.body.classList.add("alert-open");

    // Remove class from body element on unmount
    return () => {
      document.body.classList.remove("alert-open");
    };
  }, []);

  return (
    <>
      <div className="alert-overlay"></div>
      <div className="alert">
        <p className="alert__message">{message}</p>
        <button className="alert__button" onClick={onYes}>
          Yes
        </button>
        <button className="alert__button" onClick={onNo}>
          No
        </button>
      </div>
    </>
  );
};

export default Alert;
