import Node from "@/types/node";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  node: Node;
}

const PostItem: React.FC<Props> = ({ node }) => {
  return (
    <li className="border dark:text-white">
      <Link to={node.fields.slug}>
        <div className="h-24 p-2">
          <div className="float-left">
            <div className="text-md my-1 truncate">{node.frontmatter.title}</div>
            <div className="my-1 text-xs text-gray-400 dark:text-white">{node.excerpt}</div>
            <div className="mt-1 text-xs">
              <span className="mr-1 text-gray-400 dark:text-white">{node.frontmatter.moment}</span>
              <span className="text-gray-400 dark:text-white">
                read {Math.ceil(node.fields.timeToRead.minutes)} min
              </span>
            </div>
          </div>
          {node.frontmatter.thumbnail && (
            <div className="float-right ml-1">
              <img
                src={node.frontmatter.thumbnail}
                alt={node.frontmatter.title}
                placeholder="blurred"
                className="h-20 w-20 object-cover"
              />
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
