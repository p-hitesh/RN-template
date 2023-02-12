import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./tableStyles.scss";

interface Props {
  data: any;
  onRowClick?: any;
  searchText?: string;
}

const CustomTable: React.FC<Props> = ({ data, onRowClick }) => {
  const [columnDefs, setColumnDefs] = useState<any[]>([]);

  React.useEffect(() => {
    const firstRow = data[0];
    const colDefs = Object.keys(firstRow).map((col) => ({
      headerName: col,
      field: col,
      // resizable: true,
      // pinned: col === "id" ? "left" : "",
    }));
    setColumnDefs(colDefs);
  }, [data]);

  const rowStyles = (params: any) => {
    if (params.node.rowIndex % 2 === 0) {
      return { backgroundColor: "#C4D5E359" };
    }
  };

  // const headerRowStyles = {
  //   backgroundColor: "#4A86B8",
  //   color: "white",
  // };

  return (
    <div className="ag-theme-alpine" style={{ height: "85vh", width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        onRowClicked={onRowClick}
        getRowStyle={rowStyles}
        pagination
        paginationPageSize={10}
      />
    </div>
  );
};

export default CustomTable;
