import React from 'react';
import { graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectLink = (post, i) => {
  const { title, path } = post.node.frontmatter;
  return (
    <Link to={path} className="post" key={i}>
      <li>{title}</li>
    </Link>
  );
};

export const projectsQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects//" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            path
          }
        }
      }
    }
  }
`;

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="projects-content">
        <h1>
          <Fade bottom cascade>
            Projects
          </Fade>
        </h1>
        <ul className="projects-container">{projects.map(ProjectLink)}</ul>
      </div>
    </Layout>
  );
};

export default Projects;
