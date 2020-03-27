const path = require(`path`);

const contentsQuery = `
fragment Frontmatter on MarkdownRemark {
  frontmatter {
    path
    title
  }
}

{
  blogPosts: allMarkdownRemark(
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

  projects: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/projects//" } }
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
`;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(contentsQuery);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return;
  }
  const templates = [
    {
      content: result.data.projects,
      component: path.resolve(`src/templates/project.js`)
    },
    {
      content: result.data.blogPosts,
      component: path.resolve(`src/templates/post.js`)
    }
  ];

  templates.forEach(({ content, component }) => {
    content.edges.forEach(({ node, next, previous }) => {
      createPage({
        path: node.frontmatter.path,
        component,
        context: {
          next: next && next.frontmatter,
          previous: previous && previous.frontmatter
        }
      });
    });
  });

  // const blogPostTemplate =
  //   {
  //     content: result.data.blogPosts,
  //     component: path.resolve(`src/templates/project.js`)
  //   },
  //   {
  //     content: result.data.projects,
  //     component: path.resolve(`src/templates/post.js`)
  //   }
  // ];

  // templates.forEach(({ content, component }) => {
  //   content.edges.forEach(({ node, next, previous }) => {
  //     createPage({
  //       path: node.frontmatter.path,
  //       component,
  //       context: {
  //         next: next && next.frontmatter,
  //         previous: previous && previous.frontmatter
  //       }
  //     });
  //   });
  // });
};
