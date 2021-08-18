import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Navigation from "./navigation";

const Layout = ({ activeLink, children }) => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Navigation activeLink={activeLink} />
      {children}
    </main>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "100vh",
  },
}));

export default Layout;
