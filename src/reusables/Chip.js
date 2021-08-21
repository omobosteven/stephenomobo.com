import * as React from "react";
import clsx from "clsx";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";

const Chip = ({ color, ...rest }) => {
  const classes = useStyles();

  return (
    <MuiChip
      {...rest}
      classes={{
        root: clsx(classes.chipRoot, {
          [classes.greenChip]: color === "green",
          [classes.redChip]: color === "red",
        }),
      }}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    borderRadius: 2,
    fontSize: theme.typography.fontSize,
    fontWeight: 500,
    fontFamily: theme.typography.fontFamilySecondary,
    height: "unset",
    minWidth: 90,
    color: theme.palette.text.black,

    "& .MuiChip-label": {
      padding: "1px 8px",
    },
  },

  greenChip: {
    backgroundColor: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`,
  },

  redChip: {
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.light,
  },
}));

export default Chip;
