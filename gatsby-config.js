const path = require("path")

module.exports = {
  siteMetadata: {
    title: "LinguiJS - Documentation"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "lingui.js.org": path.join(__dirname, "src")
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    // 'gatsby-plugin-offline',
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/src/content/docs/`,
        ignore: [
          "**/*.json",
          "**/*.xml",
          "**/.buildinfo",
          "**/environment.pickle",
          "**/last_build",
          "**/objects.inv"
        ]
      }
    }
  ]
}
