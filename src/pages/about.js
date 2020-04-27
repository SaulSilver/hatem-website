import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;
  console.log(pageContent);
  return (
    <Layout className="about">
      <SEO title="About" />
      <Fade left cascade>
        <h1 className="page-header-title">Who is Hatem?</h1>
      </Fade>
      {/* <Img
        className="japan-image"
        alt="Japan"
        fluid={pageContent.japanImage.childImageSharp.fixed}
      /> 
      <Img
        className="sweden-image"
        alt="Sweden"
        fluid={pageContent.swedenImage.childImageSharp.fluid}
      />
      <Img
        className="egypt-image"
        alt="Egypt"
        fluid={pageContent.egyptImage.childImageSharp.fluid}
      /> */}
      <div className="about-content">
        <p>{pageContent.history}</p>
        <Img
          className="about-image"
          alt="Hatem Houssein"
          fluid={pageContent.hatemImage.childImageSharp.fluid}
        ></Img>
        <p>{pageContent.interests}</p>
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
            japanImage {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
