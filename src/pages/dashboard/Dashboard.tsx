import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import CustomTable from "../../components/table/CustomTable";
import { IDashboardData } from "../../services/dashboard-data";
import { getDashboardTable } from "../../store/dashboard/dashboard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { useNavigate } from "react-router-dom";
import "./dashboardStyles.scss";
import Modal from "../../components/modal/ModalComponent";
import * as CONST from "../../resources/constants";
import Tab from "../../components/tabComponents/Tab";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const tabOptions = [
    "Application",
    "Data Protection",
    "Application Architect",
    "Software Packages",
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    dispatch(getDashboardTable());
  }, []);

  const tableData: IDashboardData | undefined = useAppSelector(
    (state) => state.dashboard.data
  );

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  const onRowClicked = (e: any) => {
    console.log(e);
    handleOpenModal();
    // navigate("/detail", { state: e });
  };

  return (
    <div className="dashboardCon">
      <Header data={tableData}></Header>
      {tableData && (
        <CustomTable data={tableData} onRowClick={onRowClicked}></CustomTable>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="card_Con">
          <img
            onClick={handleCloseModal}
            className="card_crossButton"
            src={CONST.cross_icon}
          ></img>
          <div className="card_Header">
            <Tab tabOptions={tabOptions}></Tab>
          </div>
          <div className="card_Body"></div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
