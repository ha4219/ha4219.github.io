const { createFilePath } = require("gatsby-source-filesystem");
const readingTime = require("reading-time");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    });
  }

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

// const createPostPage = ({ createPage, results }) => {
//   const template = require.resolve("./src/templates/post.tsx");
//   const { edges } = results.data.allMdx;
//   edges.forEach(({ node, next, previous }) => {
//     createPage({
//       path: node.fields.slug,
//       component: node.internal.contentFilePath,
//       context: {
//         // additional data can be passed via context
//         slug: node.fields.slug,
//         nextSlug: next?.fields.slug ?? "",
//         prevSlug: previous?.fields.slug ?? "",
//       },
//     });
//   });
// };

const createCategoryPage = ({ createPage, results }) => {
  const template = require.resolve("./src/templates/category.tsx");
  const categorySet = new Set(["All"]);
  const { edges } = results.data.allMdx;

  edges.forEach(({ node }) => {
    const categories = node.frontmatter.category.split(" ");
    categories.forEach((category) => categorySet.add(category));
  });

  const categories = [...categorySet];

  createPage({
    path: `/posts`,
    component: template,
    context: { currentCategory: "All", edges, categories },
  });

  categories.forEach((category) => {
    createPage({
      path: `/posts/${category}`,
      component: template,
      context: {
        currentCategory: category,
        categories,
        edges:
          category === "All"
            ? edges
            : edges.filter(({ node }) => node.frontmatter.category.includes(category)),
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              date
              moment: date(fromNow: true)
              thumbnail
              tags
              category
            }
            excerpt(pruneLength: 50)
            id
            body
            fields {
              timeToRead {
                minutes
              }
              slug
            }
            internal {
              contentFilePath
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createCategoryPage({ createPage, results });
  // createPostPage({ createPage, results });
};
