import * as React from "react";
import { makeStyles, Drawer } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { MenuRounded, CloseRounded } from "@material-ui/icons";
import { Link } from "gatsby-theme-material-ui";
import clsx from "clsx";
import { Container } from "../reusables";

const Navigation = ({ activeLink }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <Container maxWidth={false} className={classes.headerContainer}>
      <header className={classes.header}>
        <div className={classes.siteLogo}>
          <Link to="/" className="logo">
            Stephen<span className="last">Omobo</span>
          </Link>

          <div className={classes.contacts}>
            <Link
              href="https://github.com/omobosteven"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="githubIcon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/omobostephen/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </Link>
            <Link
              href="mailto:stephen.omobo@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </Link>
          </div>
        </div>

        <nav className={classes.mainNav}>
          <ul className="navItems">
            <li className={clsx("navItem", activeLink === "about" && "active")}>
              <Link to="/">About</Link>
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
          {!openDrawer ? (
            <MenuRounded
              onClick={() => setOpenDrawer(true)}
              className={classes.hamburgerMenu}
            />
          ) : (
            <CloseRounded
              onClick={() => setOpenDrawer(false)}
              className={classes.hamburgerMenu}
            />
          )}

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
            <ul className="navItems">
              <li
                className={clsx("navItem", activeLink === "about" && "active")}
              >
                <Link to="/">About</Link>
              </li>
              <li
                className={clsx(
                  "navItem",
                  activeLink === "projects" && "active"
                )}
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
              <li
                className={clsx("navItem", activeLink === "blog" && "active")}
              >
                <Link to="/blog">Blog</Link>
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
    maxWidth: 1440,
  },

  headerContainer: {
    position: "sticky",
    top: 0,
    backgroundColor: "#25262B",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
    zIndex: 10000,
  },

  hamburgerMenu: {
    fontSize: 34,
    cursor: "pointer",
    color: "#D0D0D0",
  },

  siteLogo: {
    display: "flex",
    alignItems: "center",

    "& .logo": {
      color: "#ECECEC",
      fontFamily: "Inconsolata, monospace",
      fontSize: theme.typography.fontSizeXXLarge,
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

  contacts: {
    marginLeft: 15,
    display: "flex",
    alignItems: "center",

    "& .MuiLink-root": {
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      color: "#D0D0D0",

      "&:not(:last-of-type)": {
        marginRight: 20,
      },

      "& .MuiSvgIcon-root": {
        fontSize: 23,
      },

      "& .githubIcon": {
        fontSize: 21,
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

  "@media screen and (min-width: 800px)": {
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
