import React, { useState } from "react";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItem,
  ListItemText,
  Avatar,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import image from "./chakri.jpeg";
import { useStyles } from "../HeaderStyles";

export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "settings", icon: <SettingsIcon /> },
    { label: "Logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <Box>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<Avatar src={image} className={classes.navAvatar}></Avatar>}
      ></Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
