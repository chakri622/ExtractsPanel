import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";

import { useServersQuery } from "../../features/serversApi";

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
    <div>
      <h6>Servers List-RTK</h6>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong as always, is this a Demo?</h2>}
      {isFetching && <h2>Fetching server list hang tight...</h2>}
      {isSuccess && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <Grid container>
                    <Grid item xs={8}>
                      <Badge variant="dot">
                        <Typography variant="h9">Server</Typography>
                      </Badge>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="h9">Online</Typography>
                    </Grid>
                  </Grid>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <Typography variant="subtitle2">Extracts Running</Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((server) => (
                <StyledTableRow key={server.fqdn}>
                  <StyledTableCell align="left" component="th" scope="row">
                    {server.state === "live" ? (
                      <Grid container>
                        <Grid item xs={8}>
                          <Typography variant="caption">
                            {server.fqdn.toUpperCase().split(".")[0]}
                          </Typography>
                        </Grid>
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
                        <Grid item xs={4} sm={8}>
                          <Typography variant="caption">
                            {server.fqdn.toUpperCase().split(".")[0]}
                          </Typography>
                        </Grid>
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
                  <StyledTableCell align="left">
                    {server.state === "live" && (
                      <Paper
                        sx={{
                          display: "flex",
                          flexWrap: "none",
                          listStyle: "none",

                          p: 0.5,
                          m: 0,
                        }}
                        component="ul"
                      >
                        <ListItem>
                          <Chip
                            label="IQVHU-RDE-ACSV"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            size="small"
                            color="primary"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="CLA037-RDE-SASD"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            color="primary"
                            size="small"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="BLUEHORIZON-TSE-EXPDP"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            size="small"
                            color="success"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="IQVHU-RDE-ACSV"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            size="small"
                            color="primary"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="CLA037-RDE-SASD"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            color="primary"
                            size="small"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="BLUEHORIZON-TSE-EXPDP"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            size="small"
                            color="success"
                          ></Chip>
                        </ListItem>
                        <ListItem>
                          <Chip
                            label="IQVHU-RDE-ACSV"
                            onClick={handleClick}
                            onDelete={handleDelete}
                            variant="outlined"
                            size="small"
                            color="primary"
                          ></Chip>
                        </ListItem>
                      </Paper>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
