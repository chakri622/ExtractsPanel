import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Dashboard, PostAdd, NotificationsActive } from "@material-ui/icons";
import BookIcon from "@material-ui/icons/Book";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useStyles } from "./HeaderStyles";

export default function SideNavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    {
      label: "Dashboard",
      link: "/",
      Icon: <Dashboard />,
    },
    {
      label: "Reports",
      link: "/blog",
      Icon: <BookIcon />,
    },
    {
      label: "Misc",
      link: "/link",
      Icon: <PostAdd />,
    },
    {
      label: "Notification",
      link: "/notification",
      Icon: <NotificationsActive />,
    },
    {
      label: "Logout",
      link: "/logout",
      Icon: <ExitToApp />,
    },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button size="small" className={classes.navButton} onClick={handleDrawerClose} key={i}>
          <ListItem
            exact
            component={NavLink}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}
            to={item.link}
            key={i}
          >
            <ListItemIcon>{item.Icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
