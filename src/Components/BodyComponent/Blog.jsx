import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import { PageHeader } from "../Common/CommonComponent";
import { GetAppOutlined, AddCircleOutlined } from "@material-ui/icons";
import MaterialTable from "material-table";

import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../Header/pageTransitions";

import { useServersQuery } from "../../features/serversApi";
import { flexbox } from "@mui/system";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
export default function Blog() {
  const { data, error, isLoading, isFetching, isSuccess } = useServersQuery();
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/resources")
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp));

    // setTableData(editable);
  }, []);

  console.log("table data:" + JSON.stringify(tableData));

  const handleClick = (e) => console.log(e.target.innerText + " clicked");
  const handleDelete = (e) => console.log(e.target.innerText + " Deleted");

  const columns = [
    {
      title: "Server",
      field: "fqdn",
      sorting: false,
      cellStyle: { color: "blue" },
    },
    {
      title: "Status",
      field: "state",
      filterPlaceholder: "Status",
      lookup: { live: "Active", build: "Inactive", decomm: "Decomm" },
      width: "10%",
      export: false,
      render: (rowData) => (
        <div
          style={{
            backgroundColor:
              rowData.state === "live" ? "darkgreen" : "orangered",
            width: "70px",
            padding: "6px",
            borderRadius: "3px",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {rowData.state === "live" ? "Active" : "Inactive"}
        </div>
      ),
    },
    {
      title: "Running",
      field: "running",
      sorting: false,
      filtering: false,
      cellStyle: { color: "blue" },
      render: (rowData) => (
        <div
          style={{
            display: "flex",
          }}
        >
          {rowData.running &&
            rowData.running.map((ext) => (
              <Chip
                label={ext}
                onClick={handleClick}
                onDelete={handleDelete}
                variant="outlined"
                size="small"
                color="primary"
                sx={{ margin: "10px" }}
              ></Chip>
            ))}
        </div>
      ),
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
      <PageHeader label="Servers" pageTitle="Extracts Processing Servers" />

      {tableData && (
        <MaterialTable
          columns={columns}
          data={tableData}
          title="Active Extracts"
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
          options={{
            searchAutoFocus: true,
            searchFieldVariant: "outlined",
            filtering: true,
            paging: false,
            pageSizeOptions: [2, 5, 10, 15, 20, 25, 50, 100],
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "bottom",
            exportButton: true,
            exportAllData: true,
            exportFileName: "TableData_" + new Date().toISOString(),
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
