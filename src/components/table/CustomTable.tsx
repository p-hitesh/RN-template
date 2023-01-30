import React, { useState } from "react";
import DataTable from "react-data-table-component";

interface Props {
  data: any;
}

const CustomTable: React.FC<Props> = ({ data }) => {
  const [columnDefs, setColumnDefs] = useState<any[]>([]);

  React.useEffect(() => {
    const firstRow = data[0];
    const colDefs = Object.keys(firstRow).map((col) => ({
      name: col,
      selector: col,
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

  return (
    <div>
      <DataTable
        columns={columnDefs}
        data={data}
        keyField="id"
        customStyles={customStyles}
        pagination
        paginationPerPage={15}
        // striped
        responsive
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
};

export default CustomTable;
