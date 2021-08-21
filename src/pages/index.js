import * as React from "react";
import { makeStyles, Grid, Box, Typography } from "@material-ui/core";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";
import { differenceInCalendarYears } from "date-fns";
import Stacks from "../components/stacks";
import Layout from "../components/layout";
import { Container, Chip } from "../reusables";

const IndexPage = () => {
  const classes = useStyles();

  return (
    <Layout activeLink="about">
      <section className={classes.home}>
        <Container>
          <Grid container className={classes.gridContainer}>
            <Grid item className={classes.gridItem} xs={12} lg={5}>
              <Box className="introBox">
                <div className={classes.chipGroup}>
                  <Chip label="Software Engineer" color="green" />
                  <Chip label="Front-end Developer" color="red" />
                </div>
                <div className={classes.introGroup}>
                  <Typography variant="h1" className="title">
                    / This is me
                  </Typography>
                  <Typography variant="body1" component="div" className="body">
                    <div className="bodyStart">
                      &#10090;<span className="name">Stephen Omobo</span>
                      &#10091; &#10142; &#10100;
                    </div>
                    <div className="bodyContent">
                      Experienced software engineer, who is very keen on
                      leveraging technology to solve problems and improve the
                      lives of people around the world. I have worked on
                      progressively challenging projects across different
                      domains including FinTech, Telemedicine, HR / Payroll, and
                      beyond.
                    </div>
                    <div className="bodyEnd">&#10101;</div>
                  </Typography>
                </div>
              </Box>
              <Box
                className="summaryBox"
                display="flex"
                justifyContent="space-between"
              >
                <Typography variant="caption" className={classes.numExperience}>
                  <span className="captionYears">
                    {differenceInCalendarYears(
                      new Date(),
                      new Date(2018, 8, 1)
                    )}
                  </span>
                  <span className="captionText">
                    <span>Years</span>
                    <span>Experience</span>
                  </span>
                </Typography>
                <div className="workLogo">
                  <StaticImage
                    src="../images/andelaLogo.svg"
                    alt="andela"
                    className="gatsbyImage"
                    imgClassName="img"
                  />
                  <StaticImage
                    src="../images/arvoLogo.png"
                    alt="arvo"
                    className="gatsbyImage"
                    imgClassName="img"
                  />
                  <StaticImage
                    src="../images/prunedgeLogo.svg"
                    alt="prunedge"
                    className="gatsbyImage prunedge"
                    imgClassName="img"
                  />
                </div>
              </Box>
            </Grid>
            <Grid
              item
              className={clsx(classes.gridItem, classes.stackGridItem)}
              xs={12}
              lg={7}
            >
              <Box className={classes.stackBox}>
                <Stacks />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Layout>
  );
};

const useStyles = makeStyles((theme) => ({
  home: {
    marginTop: 40,
    marginBottom: 40,
  },
  gridContainer: {},

  gridItem: {
    "& .summaryBox": {
      marginTop: 15,
      display: "flex",
      flexDirection: "column",

      "& .workLogo": {
        marginTop: 20,
        display: "flex",
        alignItems: "center",

        "& .gatsbyImage": {
          flexBasis: "32%",

          "&:not(:last-of-type)": {
            marginRight: 10,
          },
        },
      },
    },
  },

  stackGridItem: {
    marginTop: 54,
  },

  chipGroup: {
    "& div:first-child": {
      marginRight: 18,
    },
  },

  introGroup: {
    marginTop: 28,

    "& .title": {
      fontSize: theme.typography.fontSizeXLarge,
      textTransform: "uppercase",
      color: theme.palette.text.body,
    },

    "& .body": {
      marginTop: 2,

      "& .bodyStart, & .bodyEnd": {
        fontSize: 32,
        fontWeight: 500,
        color: theme.palette.text.primary,

        "& .name": {
          fontSize: 34,
          marginLeft: 2,
          marginRight: 2,
        },
      },

      "& .bodyContent": {
        marginTop: 5,
        marginBottom: 5,
        color: theme.palette.text.secondary,
        marginLeft: 20,
        fontSize: theme.typography.fontSizeXLarge,
      },
    },
  },

  numExperience: {
    display: "flex",
    alignItems: "center",

    "& .captionYears": {
      fontSize: 50,
      marginRight: 8,
      lineHeight: 1,
    },
    "& .captionText": {
      display: "inline-flex",
      flexDirection: "column",
      fontSize: 14,

      "& span": {
        lineHeight: 1.4,
        textTransform: "uppercase",
      },
    },
  },

  stackBox: {
    display: "inline-block",
    position: "relative",
    width: "100%",
    paddingBottom: "92%",
    verticalAlign: "middle",
    overflow: "hidden",
  },

  "@media screen and (min-width: 1280px)": {
    home: {
      marginTop: 60,
    },

    stackGridItem: {
      marginTop: 0,
    },

    gridItem: {
      "& .introBox": {
        marginTop: "15%",
      },
    },

    stackBox: {
      paddingBottom: "80%",
    },
  },
}));

export default IndexPage;
