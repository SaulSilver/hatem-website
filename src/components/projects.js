import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "projects/" } }) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            category
            description
          }
        }
      }
    }
  }
`;

const categoryProject = data => project =>
  project.node.frontmatter.category === data.category;

const cleanNodes = categoryProject => categoryProject.node.frontmatter;

const Projects = data => {
  const allProjects = useStaticQuery(query);
  const categoryProjects = allProjects.allMarkdownRemark.edges
    .filter(categoryProject(data))
    .map(cleanNodes);

  return (
    <div className="category-projects">
      {categoryProjects.map((project, i) => (
        <div className="project" key={i}>
          {project.title}
          {project.description}
        </div>
      ))}
    </div>
  );
};

export default Projects;
