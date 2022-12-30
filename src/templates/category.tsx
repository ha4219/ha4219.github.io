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
      <p className="my-1 border px-2 text-7xl">{currentCategory}</p>
      <div className="my-1 inline-block w-full break-words border px-2">
        {categories.map((item) => (
          <span key={item} className="float-left truncate">
            <Link to={`/posts/${item}`}>#{item}</Link>
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
