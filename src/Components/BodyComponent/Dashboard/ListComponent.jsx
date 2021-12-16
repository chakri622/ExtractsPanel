import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Paper,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../BodyStyles";

export default function ListComponent({ users, posts }) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2}>
        {/* Author */}
        <Grid item xs={12} sm={6} md={5}>
          <Paper>
            <List>
              <ListItem>
                <Typography varaint="h6" component="h6">
                  Authors
                </Typography>
              </ListItem>
              <Divider></Divider>
              {users.length === 0 ? (
                <Box className={classes.boxCentered}>
                  <CircularProgress />
                </Box>
              ) : (
                users.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar src={item.picture}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography varaint="body1" component="h6">
                        {item.firstName + " " + item.lastName}
                      </Typography>
                      <Typography varaint="subtitle2" color="textSecondary">
                        {item.email}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
        {/* Post */}
        <Grid item xs={12} sm={6} md={7}>
          <Paper>
            <List>
              <ListItem>
                <Typography varaint="h6" component="h6">
                  Latest Posts{" "}
                </Typography>
              </ListItem>
              <Divider></Divider>
              {posts.length === 0 ? (
                <Box className={classes.boxCentered}>
                  <CircularProgress />
                </Box>
              ) : (
                posts.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar src={item.image}></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                      <Typography varaint="body1" component="h6">
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
