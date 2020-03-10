import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;
  const aboutImg = data.aboutImg.nodes[0];
  return (
    <Layout>
      <SEO title="About" />
      <div className="about-content">
        <h1>
          <Fade bottom cascade>
            About
          </Fade>
        </h1>
        <Fade bottom>{<p>{pageContent.history}</p>}</Fade>
        <Image
          caption={`Hatem at Teramachi in Kyoto, Japan.`}
          creditLink="http://misojournal.blogspot.com/"
          credit="Miso Journal"
        >
          <Img
            alt="Hatem Houssein at Teramachi in Kyoto, Japan."
            fluid={aboutImg.fluid}
          />
        </Image>
        <Fade bottom>{<p>{pageContent.interests}</p>}</Fade>
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
          }
        }
      }
    }

    aboutImg: allImageSharp(
      filter: { fluid: { originalName: { eq: "about.jpeg" } } }
    ) {
      nodes {
        fluid(maxWidth: 690, traceSVG: { color: "#e7e3e8" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
