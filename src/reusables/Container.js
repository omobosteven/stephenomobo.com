import React from "react";
import { Container as MuiContainer, makeStyles } from "@material-ui/core";

const Container = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiContainer
      maxWidth="xl"
      classes={{
        root: classes.containerRoot,
        maxWidthXl: classes.containerMaxWidth,
      }}
      {...rest}
    >
      {children}
    </MuiContainer>
  );
};

const useStyles = makeStyles({
  containerMaxWidth: {
    maxWidth: "unset",
  },

  containerRoot: {},

  "@media screen and (min-width: 600px)": {
    containerRoot: {
      paddingLeft: "8%",
      paddingRight: "8%",
    },
  },

  "@media screen and (min-width: 1024px)": {
    containerRoot: {
      paddingLeft: "10%",
      paddingRight: "10%",
    },
  },

  "@media screen and (min-width: 1280px)": {
    containerRoot: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
  },

  "@media screen and (min-width: 1440px)": {
    containerRoot: {
      paddingLeft: "8%",
      paddingRight: "8%",
    },
  },
});

export default Container;
