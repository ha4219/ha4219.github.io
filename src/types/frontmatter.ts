interface Frontmatter {
  date: string;
  moment: string;
  title: string;
  category: string[];
  tags?: string[];
  thumbnail?: string;
  author: string;
}

export default Frontmatter;
