import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import CustomTable from "../../components/table/CustomTable";
import { IDashboardData } from "../../services/dashboard-data";
import { getDashboardTable } from "../../store/dashboard/dashboard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDashboardTable());
  }, []);

  const tableData: IDashboardData | undefined = useAppSelector(
    (state) => state.dashboard.data
  );

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return (
    <div>
      <Header></Header>
      {tableData && <CustomTable data={tableData}></CustomTable>}
    </div>
  );
};

export default Dashboard;
