import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Hidden,
  IconButton,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/Notification";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar({ handleDrawerOpen }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {/*<IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>*/}
        <Typography variant="h6" className={classes.title}>
          {"<Admin Panel />"}
        </Typography>
        <Hidden smDown>
          <Box style={{ display: "flex" }}>
            <Notification />
            <Messages />
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
