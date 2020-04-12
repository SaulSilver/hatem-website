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
    <Layout>
      <SEO title="About" />
      <h2>Who is Hatem?</h2>
      <Img
        className="japan-image"
        alt="Japan"
        fluid={pageContent.japanImage.childImageSharp.fixed}
      />
      {/* <Img
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
        <Fade bottom>
          <p>{pageContent.history}</p>
          <p>{pageContent.interests}</p>
        </Fade>
        <Img
          className="about-image"
          alt="Hatem Houssein at Teramachi in Kyoto, Japan."
          fluid={pageContent.hatemImage.childImageSharp.fluid}
        />
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
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
