import Frontmatter from "./frontmatter";

interface Node {
  id: string;
  frontmatter: Frontmatter;
  excerpt: string;
  body: string;
  fields: {
    timeToRead: {
      minutes: number;
    };
    slug: string;
  };
}

export default Node;
