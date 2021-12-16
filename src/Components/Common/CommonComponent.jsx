import React from "react";
import { useStyles } from "../BodyComponent/BodyStyles";
import {Grid, Typography } from "@material-ui/core";

export const PageHeader = ({ label, pageTitle }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Typography variant="caption" className={classes.pageSubTitle}>
          {label}
        </Typography>
        <Typography variant="h5" className={classes.pageTitle} component="h3">
          {pageTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};
