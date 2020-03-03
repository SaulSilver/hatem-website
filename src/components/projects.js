import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

// TODO: find a way to add variable `category` to graphql query
const projectsQuery = category => graphql`
  query CategoriesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: ${category} }
        }
      }
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

const renderComponent = projects => (
  <div className="category-projects">
    {projects.map((project, i) => (
      <div className="project" key={i}>
        {project.title}
      </div>
    ))}
  </div>
);

const Projects = data => {
  console.log('component data', data);
  return (
    <StaticQuery query={projectsQuery} render={renderComponent}></StaticQuery>
  );
};

export default Projects;
