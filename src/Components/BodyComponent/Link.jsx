import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../Header/pageTransitions";
import MaterialTable from "material-table";
import { GetAppOutlined, AddCircleOutlined } from "@material-ui/icons";
import { PageHeader } from "../Common/CommonComponent";

export default function Link() {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "Name",
      field: "Name",

      cellStyle: { color: "blue" },
    },
    {
      title: "Company",
      field: "Company",
      filterPlaceholder: "Company",
      width: "20%",
      export: false,
    },
    {
      title: "Company ID",
      field: "Company ID",
      sorting: false,
      filtering: false,
      cellStyle: { color: "blue" },
    },
    {
      title: "Application Server",
      field: "Application Server",

      cellStyle: { color: "blue" },
    },
    {
      title: "Database Server",
      field: "Database_Server",
      cellStyle: { color: "blue" },
    },
    {
      title: "Version",
      field: "Version",

      cellStyle: { color: "blue" },
    },
    {
      title: "Product",
      field: "Product",

      cellStyle: { color: "blue" },
    },
    {
      title: "Project Mgr Email",
      field: "Project Mgr Email",

      cellStyle: { color: "blue" },
    },
  ];
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      style={pageStyle}
    >
      <PageHeader label="Admin" pageTitle="InForm Studies" />

      {tableData && (
        <MaterialTable
          columns={columns}
          data={(query) =>
            new Promise((resolve, reject) => {
              console.log(query);
              let url = "http://localhost:4000/studies";
              let totalCount = 0;
              url += "?_page=" + (query.page + 1);
              url += "&_limit=" + query.pageSize;
              fetch(url)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Unable to make request");
                  }
                  totalCount = response.headers.get("X-Total-Count");
                  console.log("totalCont=" + totalCount);
                  return response.json();
                })
                .then((result) => {
                  console.log(result);
                  resolve({
                    data: result,
                    page: query.page,
                    totalCount: totalCount,
                  });
                });
            })
          }
          title="CMDB Studies"
          actions={[
            {
              icon: () => <GetAppOutlined />,
              tooltip: "Click me fast",
              onClick: (e, data) => console.log(data),
            },
          ]}
          onSelectionChange={(data) => {
            console.log(data);
          }}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                setTableData((prev) => [...prev, newRow]);
                resolve();
              }),
            onRowUpdate: (newRow, oldRow) =>
              new Promise((resolve, reject) => {
                const updatedData = [...tableData];
                updatedData[oldRow.tableData.id] = newRow;
                setTableData([...updatedData]);

                resolve();
              }),

            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                console.log(selectedRow);
                const updatedData = [...tableData];
                updatedData.splice(selectedRow.tableData.id, 1);
                setTableData([updatedData]);

                resolve();
              }),
          }}
          options={{
            searchAutoFocus: true,
            searchFieldVariant: "outlined",
            filtering: true,
            paging: true,
            pageSizeOptions: [2, 5, 10, 15, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "bottom",
            exportButton: true,
            exportAllData: true,
            exportFileName: "cmdb_" + new Date().toISOString(),
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) =>
              index % 2 == 0 ? { background: "#f5f5f5" } : null,
            headerStyle: {
              background: "#3f51b5",
              fontStyle: "italic",
              color: "white",
            },
            icons: { Add: () => <AddCircleOutlined /> },
          }}
        ></MaterialTable>
      )}
    </motion.div>
  );
}
