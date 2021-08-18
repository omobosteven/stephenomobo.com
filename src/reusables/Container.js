import React from "react";
import { Container as MuiContainer, makeStyles } from "@material-ui/core";

const Container = ({ children }) => {
  const classes = useStyles();

  return (
    <MuiContainer
      maxWidth="xl"
      classes={{ maxWidthXl: classes.containerMaxWidth }}
    >
      {children}
    </MuiContainer>
  );
};

const useStyles = makeStyles({
  containerMaxWidth: {
    maxWidth: 1440,
  },
});

export default Container;
