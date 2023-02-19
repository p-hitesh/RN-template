import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import CustomTable from "../../components/table/CustomTable";
import {
  getDashboardTable,
  getDetailCardData,
} from "../../store/dashboard/dashboard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { useNavigate } from "react-router-dom";
import "./dashboardStyles.scss";
import Modal from "../../components/modal/ModalComponent";
import * as CONST from "../../resources/constants";
import Loader from "../../components/loader/Loader";
import DetailCardComponent from "../../components/detailCardComponent/DetailCardComponent";
import Alert from "../../components/alertComponent/Alert";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [filteredTableData, setFilteredTableData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [updatedDetailData, setUpdatedDetailData] = useState<any>();
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const tableData: any = useAppSelector(
    (state) => state.dashboard.dashboardData
  );
  const detailData: any = useAppSelector(
    (state) => state.dashboard.detailCardData
  );

  const handleCloseModal = () => {
    if (detailData === updatedDetailData) {
      setModalOpen(false);
    } else {
      setShowAlert(true);
    }
  };

  function filterJSON(json: any, searchTerm: string) {
    const filtered = json.filter(function (obj: any) {
      return Object.values(obj).some(function (val) {
        return String(val).toLowerCase().includes(searchTerm.toLowerCase());
      });
    });

    return filtered.length > 0 ? filtered : [];
  }

  const onSearch = (e: any) => {
    setIsLoading(true);
    const filterData = filterJSON(tableData, e);
    if (filterData) {
      setFilteredTableData(filterData);
    } else {
      console.log(filterData);
    }
  };

  useEffect(() => {
    dispatch(getDashboardTable());
  }, []);

  useEffect(() => {
    if (detailData) {
      // console.log(detailData);
      setIsLoading(false);
      handleOpenModal();
    }
  }, [detailData]);

  useEffect(() => {
    if (tableData) {
      setFilteredTableData(tableData);
    }
  }, [tableData]);

  useEffect(() => {
    if (filteredTableData) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [filteredTableData]);

  const onRowClicked = (e: any) => {
    // console.log(e);
    // handleOpenModal();
    setIsLoading(true);
    dispatch(getDetailCardData(e.data.id));
    // navigate("/detail", { state: e });
  };

  return (
    <div className="dashboardCon">
      <Header data={tableData} onSearch={onSearch}></Header>
      {filteredTableData && (
        <CustomTable
          data={filteredTableData}
          onRowClick={onRowClicked}
        ></CustomTable>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="card_Con">
          <img
            onClick={handleCloseModal}
            className="card_crossButton"
            src={CONST.cross_icon}
          ></img>
          <DetailCardComponent
            data={detailData}
            newData={(e: any) => setUpdatedDetailData(e)}
          ></DetailCardComponent>
        </div>
      </Modal>
      {isLoading && <Loader></Loader>}
      {showAlert && (
        <Alert
          message={"Exit without saving your changes?"}
          onYes={() => {
            setModalOpen(false);
            setShowAlert(false);
          }}
          onNo={() => {
            setShowAlert(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
