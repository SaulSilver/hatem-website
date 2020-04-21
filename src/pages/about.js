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
      <Img
        className="about-image-fullwidth"
        alt="Hatem Houssein"
        fixed={pageContent.hatemImageFullWidth.childImageSharp.fixed}
      />
      <h1>Who is Hatem?</h1>
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
        <Fade bottom>
          <div className="about-text">
            <p>{pageContent.history}</p>
            <p>{pageContent.interests}</p>
          </div>
        </Fade>
        <Img
          className="about-image"
          alt="Hatem Houssein"
          fixed={pageContent.hatemImage.childImageSharp.fixed}
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
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            hatemImageFullWidth {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed_tracedSVG
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
