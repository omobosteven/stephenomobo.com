import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Layout from "../components/layout";
import UnderConstruction from "../components/underConstruction";

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout>
      <section className={classes.home}>
        <UnderConstruction />
      </section>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  home: {},
}));

export default IndexPage;
