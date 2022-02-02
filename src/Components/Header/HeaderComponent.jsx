import React, { useState } from "react";

import NavBar from "./NavBar";
import SideNav from "./SideNav";
import { Route, Switch, useLocation } from "react-router-dom";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Blog from "../BodyComponent/Blog";
import Notification from "../BodyComponent/Notification";
import Logout from "../BodyComponent/Logout";
import Link from "../BodyComponent/Link";
import { Box } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import { AnimatePresence } from "framer-motion";
import ExtractRequest from "../BodyComponent/ExtractRequest";
import QueueExtracts from "../BodyComponent/QueueExtracts";

export default function HeaderComponent() {
  const classes = useStyles();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <NavBar handleDrawerOpen={handleDrawerOpen}></NavBar>
      <SideNav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      {/* Registration of routes*/}
      <Box className={classes.wrapper}>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact render={() => <Dashboard />}></Route>
            <Route path="/blog" render={() => <Blog />}></Route>
            <Route path="/notification" render={() => <Notification />}></Route>
            <Route path="/link" render={() => <Link />}></Route>
            <Route path="/logout" render={() => <Logout />}></Route>
            <Route path="/request" render={() => <ExtractRequest />}></Route>
            <Route path="/queue" render={() => <QueueExtracts />}></Route>
          </Switch>
        </AnimatePresence>
      </Box>
    </div>
  );
}
