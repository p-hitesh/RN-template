import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import CustomTable from "../../components/table/CustomTable";
import { getDashboardTable } from "../../store/dashboard/dashboard";
import { useAppDispatch } from "../../store/hooks";
import { jsonData } from "./sample-data";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDashboardTable());
  }, []);
  return (
    <div>
      <Header></Header>
      <CustomTable data={jsonData}></CustomTable>
    </div>
  );
};

export default Dashboard;
