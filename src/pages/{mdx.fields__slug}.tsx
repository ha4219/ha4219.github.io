import Layout from "@/components/Layout";
import Components from "@/components/mdx/Components";
import Node from "@/types/node";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

interface Props {
  data: {
    mdx: Node;
    site: {
      siteMetadata: {
        siteUrl: string;
      };
    };
  };
  children: React.ReactNode;
}

export const PostTemplate: React.FC<Props> = ({ data, children }) => {
  const [view, setView] = useState<number | null>(null);

  const { siteUrl } = data.site.siteMetadata;
  const { slug } = data.mdx.fields;

  useEffect(() => {
    if (!siteUrl || !slug) return;
    const namespace = siteUrl.replace(/(^\w+:|^)\/\//, "");
    const key = slug.replace(/\//g, "");

    fetch(
      `https://api.countapi.xyz/${
        process.env.NODE_ENV === "development" ? "get" : "hit"
      }/${namespace}/${key}`,
    )
      .then((res) => res.json())
      .then(({ value }) => setView(value))
      .catch(() => setView(0));
  }, [siteUrl, slug]);

  return (
    <Layout>
      {view}
      <MDXProvider components={Components}>{children}</MDXProvider>
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
