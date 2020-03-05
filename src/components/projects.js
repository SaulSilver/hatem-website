import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

// FIXME: find a way to add variable `category` to graphql query
const fulltime = graphql`
  query FulltimeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "fulltime" } } }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
          }
        }
      }
    }
  }
`;
const freelance = graphql`
  query Freelanceuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "freelance" } } }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
          }
        }
      }
    }
  }
`;
const opensource = graphql`
  query OpensourceQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "open-source" } } }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
          }
        }
      }
    }
  }
`;

const queries = { fulltime, freelance, opensource };

const renderComponent = projects => (
  <div className="category-projects">
    {projects.allMarkdownRemark.edges.map((project, i) => (
      <div className="project" key={i}>
        {project.node.frontmatter.title}
      </div>
    ))}
  </div>
);

const Projects = data => (
  <StaticQuery
    query={queries[data.category]}
    render={renderComponent}
  ></StaticQuery>
);

export default Projects;
