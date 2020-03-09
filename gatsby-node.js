const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}
    });
  });
};

// const { createFilePath } = require(`gatsby-source-filesystem`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const blogPost = path.resolve(`./src/templates/post.js`);
//   // const result = await graphql(
//   //   `
//   //     {
//   //       allMarkdownRemark(
//   //         sort: { fields: [frontmatter___date], order: DESC }
//   //         limit: 1000
//   //       ) {
//   //         edges {
//   //           node {
//   //             fields {
//   //               slug
//   //             }
//   //             frontmatter {
//   //               title
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `
//   // );
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   if (result.errors) {
//     throw result.errors;
//   }

//   // Create blog posts pages.
//   const posts = result.data.allMarkdownRemark.edges;

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node;
//     const next = index === 0 ? null : posts[index - 1].node;

//     createPage({
//       path: post.node.fields.slug,
//       component: blogPost,
//       context: {
//         slug: post.node.fields.slug,
//         previous,
//         next
//       }
//     });
//   });
// };

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({ name: `slug`, node, value });
//   }
// };
