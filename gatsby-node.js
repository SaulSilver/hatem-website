const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  const result = await graphql(`
    fragment Frontmatter on MarkdownRemark {
      frontmatter {
        path
        title
      }
    }

    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          previous {
            ...Frontmatter
          }
          next {
            ...Frontmatter
          }
          node {
            ...Frontmatter
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        nextPost: next && next.frontmatter,
        previousPost: previous && previous.frontmatter
      }
    });
  });
};
