import React, { useState } from "react";

import NavBar from "./NavBar";
import SideNav from "./SideNav";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Blog from "../BodyComponent/Blog";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import Link from "../BodyComponent/Link";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";

export default function HeaderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div>
      <NavBar handleDrawerOpen={handleDrawerOpen}></NavBar>
      <SideNav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* Registration of routes*/}
      <Box className={classes.wrapper}>
        <Switch>
          <Route path="/" exact render={() => <Dashboard />}></Route>
          <Route path="/blog" render={() => <Blog />}></Route>
          <Route path="/notification" render={() => <Notification />}></Route>
          <Route path="/link" render={() => <Link />}></Route>
          <Route path="/logout" render={() => <Logout />}></Route>
        </Switch>
      </Box>
    </div>
  );
}
