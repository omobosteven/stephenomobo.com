import * as React from "react"
import { makeStyles } from "@material-ui/core";

// markup
const IndexPage = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <p>Coming Soon...</p>
    </main>
  )
}

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& p': {
      fontFamily: "'Montserrat', sans-serif",
      color: theme.palette.common.white,
      margin: 0,
      textAlign: 'center',
      width: '100%',
      fontSize: 50
    }
  }
}));

export default IndexPage
