import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Divider,
  Badge,
} from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import {
  Dashboard,
  PostAdd,
  NotificationsActive,
  StarBorder,
  ExpandMore,
  ExpandLess,
  QueueMusic,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";
import BookIcon from "@material-ui/icons/Book";
import ExitToApp from "@material-ui/icons/ExitToApp";
import QueueIcon from "@mui/icons-material/Queue";
import BoltIcon from "@mui/icons-material/Bolt";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useStyles } from "./HeaderStyles";
import { green } from "@mui/material/colors";

export default function SideNavData({ handleDrawerClose }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  const listItemData = [
    {
      label: "Dashboard",
      link: "/",
      Icon: <Dashboard />,
    },
    {
      label: "Activity",
      link: "/blog",
      Icon: <BookIcon />,
    },
    {
      label: "Reports",
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
      {listItemData.map((item, i) =>
        item.label !== "Activity" ? (
          <Button
            size="small"
            className={classes.navButton}
            onClick={handleDrawerClose}
            key={i}
          >
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
        ) : (
          <div>
            <Button
              size="small"
              className={classes.navButton}
              onClick={handleDrawerClose}
              key={i}
            >
              <ListItem
                exact
                className={classes.navlinks}
                key={i}
                onClick={handleClick}
              >
                <ListItemIcon>{item.Icon}</ListItemIcon>
                <ListItemText>{item.label}</ListItemText>
                <Badge
                  color="error"
                  sx={{ color: "green" }}
                  badgeContent=""
                  variant="dot"
                ></Badge>
              </ListItem>
              {open ? <ExpandLess /> : <ExpandMore />}
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Divider />
              <List key={85} component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 0, ml: 3 }}
                  component={NavLink}
                  to={item.link}
                  activeClassName={classes.activeNavlinks}
                >
                  <ListItemIcon sx={{ marginRight: 0 }}>
                    <BoltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Running Extracts"></ListItemText>
                  <Badge color="primary" badgeContent={99}></Badge>
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 0, ml: 3 }}
                  component={NavLink}
                  to="/queue"
                  activeClassName={classes.activeNavlinks}
                >
                  <ListItemIcon sx={{ marginRight: 0 }}>
                    <QueueIcon />
                  </ListItemIcon>
                  <ListItemText primary="Queued Extracts" />
                  <Badge color="secondary" badgeContent={10}></Badge>
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 0, ml: 3 }}
                  component={NavLink}
                  to="/request"
                  activeClassName={classes.activeNavlinks}
                >
                  <ListItemIcon sx={{ marginRight: 0 }}>
                    <PlayCircleFilledOutlined />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ pl: 0, ml: 0 }}
                    primary="Request Extract"
                  ></ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
          </div>
        )
      )}
    </List>
  );
}
