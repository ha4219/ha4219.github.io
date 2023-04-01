import Layout from "@/components/Layout";
import Components from "@/components/mdx/Components";
import Node from "@/types/node";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

import type { PageProps } from "gatsby";
import PostContentTitle from "@/components/posts/PostContentTitle";
import Comments from "@/components/posts/Comments";

type DataProps = {
  // data: {
  mdx: Node;
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
};

type PageContextType = { fields__slug: string };

export const PostTemplate: React.FC<PageProps<DataProps, PageContextType>> = ({
  data,
  children,
  pageContext,
}) => {
  const [view, setView] = useState<number | null>(null);

  const { siteUrl } = data.site.siteMetadata;
  const slug = pageContext.fields__slug;

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
      <div className="mx-auto max-w-3xl">
        <PostContentTitle
          title={data.mdx.frontmatter.title}
          view={view}
          author={data.mdx.frontmatter.author}
          date={data.mdx.frontmatter.date}
          minutes={data.mdx.fields.timeToRead.minutes}
        />
        <MDXProvider components={Components}>{children}</MDXProvider>
        <div className="flex flex-wrap break-words py-4">
          {data.mdx.frontmatter.tags?.map((item) => (
            <span
              key={item}
              className="my-1 mr-2 inline-block rounded-xl bg-gray-200 p-2 px-3 text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <Comments />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($fields__slug: String) {
    mdx(fields: { slug: { eq: $fields__slug } }) {
      id
      body
      excerpt(pruneLength: 500)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        category
        author
        tags
        thumbnail
      }
      fields {
        slug
        timeToRead {
          minutes
        }
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
