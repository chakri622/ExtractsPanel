import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { useStyles } from "../BodyStyles";
import React, { useEffect } from "react";
import { PageHeader } from "../../Common/CommonComponent";
import { DisplayCardGraph } from "../../Common/GraphComponent";
import {
  fakeArrayDataGenerator,
  randomValueGenerator,
} from "../../../utils/fakeArrayDataGenerator";
import { indigo } from "@material-ui/core/colors";
import { blue, lightGreen, amber, green, red } from "@material-ui/core/colors";
import UserOverviewComponent from "./UserOverviewComponent";
import ListComponent from "./ListComponent";
import { GetPost, GetUser } from "../../../utils/blogRequest";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../Header/pageTransitions";

export default function Dashboard() {
  const classes = useStyles();
  const [fetched, setFetched] = useState(false);
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const DisplayData = [
    {
      label: "Total",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "5%",
    },
    {
      label: "Queued",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "14%",
    },
    {
      label: "Success",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "23%",
    },
    {
      label: "Failed",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "30%",
    },
  ];

  const GraphCardData = [
    {
      id: "Total",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: blue[500],
      bgColor: blue[50],
    },
    {
      id: "Queued",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: indigo[500],
      bgColor: indigo[50],
    },
    {
      id: "Success",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: lightGreen[500],
      bgColor: lightGreen[50],
    },
    {
      id: "Failed",
      data: fakeArrayDataGenerator({ count: 9, digit: 100 }),
      brColor: amber[500],
      bgColor: amber[50],
    },
  ];
  useEffect(() => {
    if (!fetched) {
      GraphCardData.map((item, i) => (
        <React.Fragment key={i}>
          {DisplayCardGraph({
            id: item.id,
            data: item.data,
            brColor: item.brColor,
            bgColor: item.bgColor,
          })}
        </React.Fragment>
      ));
      setFetched(true);
    }
  }, [fetched]);

  //for api calling
  useEffect(() => {
    GetPost({ limit: 5 }).then(({ data: { data } }) => {
      setPost(data);
    });
    GetUser({ limit: 5 }).then(({ data: { data } }) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      style={pageStyle}
    >
      <Box>
        {/*section title
              section card
              section graph
              section Posts
          */}
        <PageHeader label="Dashboard" pageTitle="Extracts Summary" />
        <Grid container spacing={2}>
          {DisplayData.map((item, index) => (
            <Grid item key={index} xs={6} sm={3}>
              <Card>
                <CardContent className={classes.cardContent}>
                  <canvas
                    id={item.label}
                    className={classes.displayCardGraph}
                  ></canvas>
                  <Typography variant="body2" className={classes.cardLabel}>
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h6"
                    className={classes.cardTitle}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    component="p"
                    style={{ textAlign: "center", marginBottom: "0px" }}
                  >
                    <Button
                      size="small"
                      className={classes.ratioButton}
                      startIcon={item.icon}
                      style={{
                        color: item.label[0] === "P" ? green[600] : red[500],
                      }}
                    >
                      {item.iconLabel}
                    </Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <UserOverviewComponent />
        <ListComponent posts={post} users={user} />
      </Box>
    </motion.div>
  );
}
