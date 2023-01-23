import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

interface Props {
  data: any[];
}

const CustomTable: React.FC<Props> = ({ data }) => {
  const [columnDefs, setColumnDefs] = useState<any[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);

  // const exportToPDF = () => {
  //   var docDefinition = {
  //     content: [
  //       {
  //         table: {
  //           headerRows: 1,
  //           widths: Array(columnDefs.length).fill('*'),
  //           body: [
  //             columnDefs.map(column => column.headerName),
  //             ...rowData.map(row =>
  //               Object.values(row)
  //             ),
  //           ]
  //         }
  //       }
  //     ],
  //     pageSize: 'A4',
  //     pageOrientation: 'landscape',
  //   };

  //   pdfMake.createPdf(docDefinition).download();
  // }

  React.useEffect(() => {
    const firstRow = data[0];
    const colDefs = Object.keys(firstRow).map((col) => ({
      headerName: col,
      field: col,
    }));
    setColumnDefs(colDefs);
    setRowData(data);
  }, [data]);

  return (
    <div>
      <button
      //  onClick={exportToPDF}
      >
        Export to PDF
      </button>
      <div
        className="ag-theme-balham"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
      </div>
    </div>
  );
};

export default CustomTable;
