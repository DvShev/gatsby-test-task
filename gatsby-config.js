module.exports = {
  siteMetadata: {
    siteUrl: "https://localhost:8000",
    title: "GatsbyTestTast",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SXAPI",
        fieldName: "SpaceX",
        url: "https://api.spacex.land/graphql/",
      },
    },
  ],
};
