module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "the-flying-pupo",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-ts-config",
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./src/graphql.d.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true
      }
    }
  ],
};
