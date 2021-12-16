import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import blue from "@material-ui/core/colors/blue";

export const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
  },
  toolbar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },

  navList: {
    minWidth: "250px",
    maxWidth: "300px",
  },
  ulAvatar: {
    backgroundColor: blue["A200"],
    color: "white",
  },
  navAvatar: {
    width: "35px",
    height: "35px",
  },
  //SideNav
  drawerPaper: {
    width: "250px",
    marginTop: "65px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  navlinks: {
    color: blueGrey["A400"],
    "& :hover, &:hover div": {
      color: blue["A400"],
    },
    " & div": {
      color: blueGrey["A400"],
    },
  },
  navButton: {
    width: "100%",
    textTransform: "capitalize",
  },
  activeNavlinks: {
    color: blue["A400"],
    " & div": {
      color: blue["A400"],
    },
  },
  //Wrapper of main container
  wrapper: {
    height: "100vh",
    background: "#efefef",
    padding: theme.spacing(2, 2, 0, 34),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2),
    },
  },
}));
