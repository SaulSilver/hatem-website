import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectLink = (post, i) => {
  const { title, path, projectImage } = post.node.frontmatter;
  return (
    <Link to={path} className="project" key={i}>
      <li>
        <Img
          className="project-image"
          alt="Hatem Houssein at Teramachi in Kyoto, Japan."
          fluid={projectImage.childImageSharp.fluid}
        />
        <p>{title}</p>
      </li>
    </Link>
  );
};

const Work = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Work" />
      <div className="projects-content">
        <h1 className="page-header-title">
          <Fade bottom cascade>
            Projects
          </Fade>
        </h1>
        <ul className="projects-container">{projects.map(ProjectLink)}</ul>
      </div>
    </Layout>
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
            projectImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Work;
