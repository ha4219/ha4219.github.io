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
        <div className="flex h-24">
          <div className="grid h-full w-full flex-col content-between p-2">
            <p className="text-md mt-2 truncate">{node.frontmatter.title}</p>
            <p className="text-xs text-gray-400 line-clamp-2 dark:text-white">{node.excerpt}</p>
            <div className="mt-auto text-xs">
              <span className="mr-1 text-gray-400 dark:text-white">{node.frontmatter.moment}</span>
              {/* <span className="text-gray-400 dark:text-white">
                read {Math.ceil(node.fields.timeToRead.minutes)} min
              </span> */}
            </div>
          </div>
          {node.frontmatter.thumbnail && (
            <div className="ml-1">
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
