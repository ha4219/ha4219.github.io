import Layout from "@/components/Layout";
import Node from "@/types/node";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import React from "react";

interface Props {
  data: {
    mdx: Node;
  };
  children: React.ReactNode;
}

export const PostTemplate: React.FC<Props> = ({ data, children }) => {
  return (
    <Layout>
      <div>123123</div>
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      excerpt(pruneLength: 500)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default PostTemplate;
