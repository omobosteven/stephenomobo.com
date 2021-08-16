import * as React from "react"
import { makeStyles } from "@material-ui/core";

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <p>Portfolio</p>
    </main>
  )
}

const useStyles = makeStyles({
  main: {
    '& p': {
      fontFamily: "'Montserrat', sans-serif"
    }
  }
});

export default IndexPage
