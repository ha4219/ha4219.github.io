import Layout from "@/components/Layout";
import PostItem from "@/components/posts/PostItem";
import PageContext from "@/types/pageContext";
import { Link } from "gatsby";
import React from "react";

interface Props {
  pageContext: PageContext;
}

const CategoryTemplate: React.FC<Props> = ({ pageContext }) => {
  const { edges, currentCategory, categories } = pageContext;

  return (
    <Layout>
      <h1 className="my-1 border px-2 py-2">{currentCategory}</h1>
      <div className="my-1 flex flex-wrap break-words border p-2">
        {categories.map((item) => (
          <span key={item} className="inline-block pr-4">
            <Link
              to={`/posts/${item}`}
              className="rounded-lg  p-2"
              activeClassName="bg-red-500"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              {item}
            </Link>
          </span>
        ))}
      </div>
      <ul>
        {edges.map((item) => (
          <PostItem key={item.node.id} node={item.node} />
        ))}
      </ul>
    </Layout>
  );
};

export default CategoryTemplate;
