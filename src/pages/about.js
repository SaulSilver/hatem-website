import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout className="about">
      <SEO title="About" />
      <Fade left cascade>
        <h1 className="page-header-title">Who is Hatem?</h1>
      </Fade>
      <div className="about-content">
        <p className="paragraph">{pageContent.history}</p>
        <Img
          className="about-image"
          alt="Hatem Houssein"
          fluid={pageContent.hatemImage.childImageSharp.fluid}
        ></Img>
        <p className="paragraph">{pageContent.interests}</p>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "about" } } }) {
      edges {
        node {
          id
          frontmatter {
            history
            interests
            hatemImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
