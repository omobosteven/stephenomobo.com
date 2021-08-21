module.exports = {
  siteMetadata: {
    siteUrl: "https://stephenomobo.com",
    title: "Stephen Omobo",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-theme-material-ui",
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Montserrat",
                variants: ["300", "400", "500"],
              },
              {
                family: "Inconsolata",
                variants: ["300", "400", "500", "600"],
              },
            ],
          },
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        include: /images\/svgs/,
      },
    },
  ],
};
