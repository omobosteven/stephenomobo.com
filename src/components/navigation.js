import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { Link } from "gatsby-theme-material-ui";
import clsx from "clsx";
import { Container } from "../reusables";

const Navigation = ({ activeLink }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <Container maxWidth="lg">
      <header className={classes.header}>
        <div className={classes.siteLogo}>
          <Link to="/" className="logo">
            Stephen<span className="last">Omobo</span>
          </Link>
        </div>

        <nav className={classes.mainNav}>
          <ul className="navItems">
            <li className={clsx("navItem", activeLink === "about" && "active")}>
              <Link to="/about">About</Link>
            </li>
            <li
              className={clsx("navItem", activeLink === "projects" && "active")}
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              className={clsx(
                "navItem",
                activeLink === "fun-facts" && "active"
              )}
            >
              <Link to="/fun-facts">Fun facts</Link>
            </li>
            <li className={clsx("navItem", activeLink === "blog" && "active")}>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <nav className={classes.mobileNav}>
          <MenuRounded
            onClick={() => setOpenDrawer(true)}
            className={classes.hamburgerMenu}
          />

          <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="right"
            width="100%"
            classes={{ modal: classes.drawerRoot }}
            PaperProps={{
              className: classes.drawerPaper,
            }}
          >
            <CloseRounded
              onClick={() => setOpenDrawer(false)}
              className="closeIcon"
            />
            <ul className="navItems">
              <li
                className={clsx("navItem", activeLink === "about" && "active")}
              >
                <Link to="/about" onClick={() => setOpenDrawer(false)}>
                  About
                </Link>
              </li>
              <li
                className={clsx(
                  "navItem",
                  activeLink === "projects" && "active"
                )}
              >
                <Link to="/projects" onClick={() => setOpenDrawer(false)}>
                  Projects
                </Link>
              </li>
              <li
                className={clsx(
                  "navItem",
                  activeLink === "fun-facts" && "active"
                )}
              >
                <Link to="/fun-facts" onClick={() => setOpenDrawer(false)}>
                  Fun facts
                </Link>
              </li>
              <li
                className={clsx("navItem", activeLink === "blog" && "active")}
              >
                <Link to="/blog" onClick={() => setOpenDrawer(false)}>
                  Blog
                </Link>
              </li>
            </ul>
          </Drawer>
        </nav>
      </header>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hamburgerMenu: {
    fontSize: 34,
    cursor: "pointer",
    color: "#D0D0D0",
  },

  siteLogo: {
    "& .logo": {
      color: "#ECECEC",
      fontFamily: "Inconsolata, monospace",
      fontSize: 20,
      fontWeight: 600,
      padding: "8px 5px",

      "&:hover": {
        textDecoration: "none",
      },

      "& .last": {
        color: "#D0D0D0",
        marginLeft: 4,
        fontWeight: 500,
      },
    },
  },

  mainNav: {
    display: "none",

    "& .navItems": {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      display: "flex",

      "& .navItem a": {
        display: "inline-block",
        color: "#D0D0D0",
        fontSize: 16,
        fontFamily: "Inconsolata, monospace",
      },

      "& .navItem": {
        color: "#D0D0D0",
        display: "flex",
        alignItems: "center",
        fontWeight: 500,

        "&::before": {
          content: "'<'",
          marginTop: 1,
          marginRight: 5,
          visibility: "hidden",
        },
        "&::after": {
          content: "'>'",
          marginTop: 1,
          marginLeft: 5,
          visibility: "hidden",
        },

        "&.active": {
          fontWeight: 600,
          color: theme.palette.primary.dark,
          "& a": {
            color: theme.palette.primary.dark,
          },

          "&::before, &::after": {
            visibility: "visible",
          },
        },

        "&:not(:first-of-type)": {
          marginLeft: 18,
        },
      },

      "& .navItem a:hover": {
        textDecoration: "none",
        color: theme.palette.primary.main,
      },
    },
  },

  drawerRoot: {},
  drawerPaper: {
    width: "100%",
    backgroundColor: "#25262B",
    padding: "20px 15px",

    "& .closeIcon": {
      color: "#D0D0D0",
      marginLeft: "auto",
      fontSize: 34,
      cursor: "pointer",
    },

    "& .navItems": {
      marginTop: "30%",
      listStyleType: "none",
      margin: 0,
      padding: 0,
      textAlign: "center",

      "& .navItem": {
        "&::before": {
          content: "'<'",
          marginRight: 8,
          visibility: "hidden",
          fontSize: 24,
        },
        "&::after": {
          content: "'>'",
          marginLeft: 8,
          visibility: "hidden",
          fontSize: 24,
        },

        "&.active, &.active a": {
          color: theme.palette.primary.dark,
        },

        "&.active::before, &.active::after": {
          visibility: "visible",
        },
      },

      "& .navItem a": {
        display: "inline-block",
        color: "#ECECEC",
        fontSize: 24,
        marginBottom: 40,
      },

      "& .navItem a:hover": {
        textDecoration: "none",
      },
    },
  },

  mobileNav: {
    display: "flex",
  },

  "@media screen and (min-width: 768px)": {
    siteLogo: {
      "& .logo": {
        fontSize: 22,
      },
    },

    drawerRoot: {
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },

    mobileNav: {
      display: "none",
    },

    drawerPaper: {
      display: "none",
    },

    mainNav: {
      display: "unset",

      "& .navItems": {
        "& .navItem a": {
          fontSize: 18,
        },
      },
    },
  },
}));

export default Navigation;
