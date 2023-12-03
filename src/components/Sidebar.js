import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideBar: {
    background: "#253053",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "320px",
    height: "100%",
    left: "0",
    color: "white",
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return <div className={classes.sideBar}>Cahayo Techlinks</div>;
};

export default Sidebar;
