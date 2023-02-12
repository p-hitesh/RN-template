import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface Props {
  data: any;
  onRowClick?: any;
  searchText?: string;
}

const CustomTable: React.FC<Props> = ({ data, onRowClick }) => {
  const [columnDefs, setColumnDefs] = useState<any[]>([]);
  // const [filteredData, setFilteredData] = useState<any[]>([]);

  React.useEffect(() => {
    const firstRow = data[0];
    const colDefs = Object.keys(firstRow).map((col) => ({
      name: col,
      selector: (row: any) => row[col],
      resizable: true,
    }));
    setColumnDefs(colDefs);
  }, [data]);

  const customStyles = {
    rows: {
      style: {
        "&:nth-child(even)": {
          backgroundColor: "#C4D5E359",
        },
      },
    },
    headCells: {
      style: {
        backgroundColor: "#4A86B8",
        color: "white",
      },
    },
  };

  const loadingComponent = () => {
    return (
      <div
        style={{
          display: "flex",
          height: "80vh",
          width: "100%",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <p>loading...</p>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "85vh" }}>
      <DataTable
        columns={columnDefs}
        data={data}
        keyField="id"
        customStyles={customStyles}
        pagination
        // paginationPerPage={15}
        // striped
        responsive
        highlightOnHover
        pointerOnHover
        onRowClicked={onRowClick}
        fixedHeader
        progressPending={!columnDefs || columnDefs.length === 0}
        progressComponent={loadingComponent()}
        persistTableHead
      />
    </div>
  );
};

export default CustomTable;
