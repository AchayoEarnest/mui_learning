import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

const Button = (props) => {
  const { text, size, variant, color, ...other } = props;
  const classes = useStyles();
  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      text={text}
      size={size || "large"}
      {...other}
      className={classes.root}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
