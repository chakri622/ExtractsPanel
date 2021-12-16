import React, { useState } from "react";
import {
  IconButton,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItem,
  ListItemText,
  Badge,
  Avatar,
  List,
} from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";
import { useStyles } from "../HeaderStyles";

export default function Notification() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropDownData = [
    { label: "Alex", desc: "Likes your feed!" },
    { label: "Frexa", desc: "Likes your feed!" },
    { label: "Daxzzer", desc: "Likes your feed!" },
    { label: "Livon", desc: "Likes your feed!" },
    { label: "Zara", desc: "Likes your feed!" },
  ];
  return (
    <Box>
      <IconButton
        aria-controls="Notification"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.navList}>
          {dropDownData.map((item, i) => (
            <MenuItem key={i} component={ListItem} onClick={handleClose}>
              <ListItemIcon>
                <Avatar className={classes.ulAvatar}>
                  {item.label[0].toUpperCase()}
                </Avatar>
              </ListItemIcon>
              <ListItemText primary={item.label} secondary={item.desc}></ListItemText>
            </MenuItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
}
