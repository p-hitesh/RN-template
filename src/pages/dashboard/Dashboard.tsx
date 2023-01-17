import React from "react";
import Header from "../../components/header/Header";
import CustomTable from "../../components/table/CustomTable";
import { jsonData } from "./sample-data";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <CustomTable data={jsonData}></CustomTable>
    </div>
  );
};

export default Dashboard;
