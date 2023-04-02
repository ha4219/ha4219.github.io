import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `jeongdongha.me`,
    siteUrl: `https://jeongdongha.me`,
    author: {
      name: `jeongdongha`,
      summary: `jeongdongha's dev blog`,
    },
    description: `jeongdongha's dev blog`,
    social: {
      twitter: `ha4219`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-ZZPHZRKY67",
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-tsconfig-paths`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `jeongdongha.me`,
        short_name: `jeongdongha.me`,
        start_url: "/",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
          `gatsby-remark-katex`,
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: "./contents",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jeongdongha.me",
        sitemap: "https://jeongdongha.me/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;
