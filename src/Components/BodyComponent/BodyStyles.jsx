import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(3, 0),
  },
  //Page
  pageTitle: {
    color: blueGrey[800],
    marginBottom: theme.spacing(2),
    textTransform: "capitalize",
  },
  pageSubTitle: {
    color: blueGrey[500],
    marginBottom: theme.spacing(1, 0),
    textTransform: "uppercase",
  },
  //dashboard

  cardLabel: {
    textTransform: "uppercase",
    color: blueGrey[500],
    textAlign: "center",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  cardTitle: {
    textTransform: "capitalize",
    color: blueGrey[800],
    textAlign: "center",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
    },
  },
  ratioButton: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  cardContent: {
    position: "relative",
  },
  displayCardGraph: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100% !important",
    height: "45%!important",
  },
  //user traffic graph
  displayUserGraph: {
    width: "100%",
    minHeight: "300px",
    height: "auto",
  },
  //Circular Progrss Bar Box
  boxCenter: {
    minHeight: "250px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));
