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
      <h1 className="my-1 border px-2 py-2 pl-4">{currentCategory}</h1>
      <div className="my-1 flex flex-wrap break-words border p-2">
        {categories.map((item) => (
          <span key={item} className="my-1 mr-4 inline-block bg-gray-500">
            <Link
              to={`/posts/${item}`}
              className="rounded-lg bg-gray-500 p-2 text-lg hover:bg-blue-500"
              activeClassName="bg-gray-700"
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
