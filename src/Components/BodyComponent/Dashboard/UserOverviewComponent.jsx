import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { fakeArrayDataGenerator } from "../../../utils/fakeArrayDataGenerator";
import { GeneralGraphComponent } from "../../Common/GraphComponent";
import { useStyles } from "../BodyStyles";
import { blue } from "@material-ui/core/colors";
export default function UserOverviewComponent() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);
  const graphData = [
    {
      id: "userGraph",
      type: "line",
      datasets: [
        {
          label: "Current Month",
          data: fakeArrayDataGenerator({ count: 10, digit: 100 }),
          backgroundColor: "rgba(21,101,192,0.6)",
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
        {
          label: "Last Month",
          data: fakeArrayDataGenerator({ count: 30, digit: 100 }),
          backgroundColor: "rgba(198,40,40,0.6)",
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["week1", "week2", "week3", "week4", "week5"],
    },
    {
      id: "userPieGraph",
      type: "pie",
      datasets: [
        {
          label: "Current Month",
          data: fakeArrayDataGenerator({ count: 3, digit: 1000 }),
          backgroundColor: [blue[100], blue[200], blue[300]],
          borderColor: blue["A200"],
          fill: true,
          tension: 0.5,
        },
      ],
      xAxisLabels: ["Desktop", "Tablet", "Mobile"],
    },
  ];
  useEffect(() => {
    if (!fetched) {
      graphData.map((item) => {
        return GeneralGraphComponent({
          id: item.id,
          type: item.type,
          datasets: item.datasets,
          xAxisLabels: item.xAxisLabels,
        });
      });
      setFetched(true);
    }
  });
  return (
    <Box className={classes.section}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={7}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                User Overview
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                id="userGraph"
                className={classes.displayUserGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h6">
                Device Overview
              </Typography>
            </CardContent>
            <CardContent>
              <canvas
                id="userPieGraph"
                className={classes.displayUserGraph}
              ></canvas>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
