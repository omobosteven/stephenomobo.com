import * as React from "react";
import { SvgIcon, makeStyles } from "@material-ui/core";
import { ReactComponent as ConstructionBlock } from "../images/svgs/constructio-block.svg";

const UnderConstruction = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <SvgIcon component={ConstructionBlock} className="blockIcon" />
      <p className="text">Under Construction</p>
    </section>
  );
};

const useStyles = makeStyles({
  section: {
    marginTop: 80,
    textAlign: "center",

    "& .MuiSvgIcon-root.blockIcon": {
      fontSize: 200,
    },

    "& .text": {
      color: "#76777E",
      fontSize: 24,
      margin: 0,
    },
  },
});

export default UnderConstruction;
