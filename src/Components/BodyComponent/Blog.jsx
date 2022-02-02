import React from "react";
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

import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../Header/pageTransitions";

import { useServersQuery } from "../../features/serversApi";
import { flexbox } from "@mui/system";

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
  const handleClick = (e) => console.log(e.target + " clicked");
  const handleDelete = (e) => console.log(e.target + " Deleted");
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
      {isLoading && <CircularProgress />}
      {error && <h2>Something went wrong as always, is this a Demo?</h2>}

      {isSuccess && (
        <TableContainer component={Paper} sx={{ width: "96%" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Grid container>
                    <Grid item xs={4}>
                      <Badge variant="dot">
                        <Typography variant="h6">Server</Typography>
                      </Badge>
                    </Grid>
                  </Grid>
                </StyledTableCell>
                <StyledTableCell>
                  <Grid container>
                    <Grid item xs={2}>
                      <Typography variant="h6">Status</Typography>
                    </Grid>
                  </Grid>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h6">Extracts Running</Typography>
                    </Grid>
                  </Grid>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(
                (server) =>
                  server.state === "live" && (
                    <StyledTableRow key={server.fqdn}>
                      <StyledTableCell align="left" component="th" scope="row">
                        <Grid container>
                          <Grid item xs={8}>
                            <Typography variant="caption">
                              {server.fqdn.toUpperCase().split(".")[0]}
                            </Typography>
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell align="left" component="th" scope="row">
                        {server.state === "live" ? (
                          <Grid container>
                            <Grid item xs={2}>
                              <FiberManualRecordIcon
                                style={{
                                  border: "#eaeef0 6px solid",
                                  borderRadius: "50%",
                                  color: "lightgreen",
                                  cursor: "pointer",
                                  background: "#eaeef0",
                                  boxShadow:
                                    "-8px -8px 15px rgba(255,255,255,1) , 8px 8px 15px rgba(0,0,0,0.2), inset 3px 3px 5px rgba(0,0,0,0.1), inset -1px -1px 5px  rgba(255,255,255,1)",
                                }}
                              />
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid container>
                            <Grid item xs={2}>
                              <FiberManualRecordIcon
                                style={{
                                  border: "#eaeef0 6px solid",
                                  borderRadius: "50%",
                                  color: "#852015",
                                  cursor: "pointer",
                                  background: "#eaeef0",
                                  boxShadow:
                                    "-8px -8px 15px rgba(255,255,255,1) , 8px 8px 15px rgba(0,0,0,0.2), inset 3px 3px 5px rgba(0,0,0,0.1), inset -1px -1px 5px  rgba(255,255,255,1)",
                                }}
                              />
                            </Grid>
                          </Grid>
                        )}
                      </StyledTableCell>
                      <StyledTableCell align="left" sx={{ textAlign: "wrap" }}>
                        <Grid container>
                          <Grid item xs zeroMinWidth>
                            {server.state === "live" && (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <Chip
                                  label="IQVHU-RDE-ACSV"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  size="small"
                                  color="primary"
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="CLA037-RDE-SASD"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  color="primary"
                                  size="small"
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="BLUEHORIZON-TSE-EXPDP"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  size="small"
                                  color="success"
                                  component={motion.div}
                                  whileTap={{ scale: 0.7 }}
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="IQVHU-RDE-ACSV"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  size="small"
                                  color="primary"
                                  component={motion.div}
                                  whileTap={{ scale: 0.7 }}
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="CLA037-RDE-SASD"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  color="error"
                                  size="small"
                                  component={motion.div}
                                  whileTap={{ scale: 0.7 }}
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="BLUEHORIZON-TSE-EXPDP"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  size="small"
                                  color="success"
                                  component={motion.div}
                                  whileTap={{ scale: 0.7 }}
                                  sx={{ margin: "10px" }}
                                ></Chip>

                                <Chip
                                  label="IQVHU-RDE-ACSV"
                                  onClick={handleClick}
                                  onDelete={handleDelete}
                                  variant="outlined"
                                  size="small"
                                  color="primary"
                                  component={motion.div}
                                  whileTap={{ scale: 0.7 }}
                                  sx={{ margin: "10px" }}
                                ></Chip>
                              </div>
                            )}
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </motion.div>
  );
}
