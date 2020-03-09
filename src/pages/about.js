import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const AboutPage = ({ data }) => {
  const pageContent = data.allMarkdownRemark.edges[0].node.frontmatter;
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
        <Fade bottom>{<p>{pageContent.interests}</p>}</Fade>
        {/* TODO: check Image component and show the right image */}
        <div>
          <Image filePath={'images/about.jpeg'} />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query MyQuery {
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
  }
`;
