import React from "react";
import Tab from "../tabComponents/Tab";
import "./detailCardStyles.scss";

const DetailCardComponent = () => {
  const tabOptions = [
    "Application",
    "Data Protection",
    "Application Architect",
    "Software Packages",
  ];
  return (
    <>
      <div className="card_Header">
        <Tab tabOptions={tabOptions}></Tab>
      </div>
      <div className="card_Body"></div>
    </>
  );
};

export default DetailCardComponent;
