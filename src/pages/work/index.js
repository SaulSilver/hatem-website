import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Image from '../../components/image';

const Work = ({ data }) => {
  const { freelanceImg, fulltimeImg, opensourceImg } = data;
  return (
    <Layout>
      <SEO title="Work" />
      <div className="work-content">
        <h1>
          <Fade bottom cascade>
            Work
          </Fade>
        </h1>
        <ul className="categories-container">
          <Link to="/work/fulltime/">
            <li className="fulltime">
              <Image caption={`Fulltime`}>
                <Img
                  alt="Fulltime projects"
                  fixed={fulltimeImg.nodes[0].fixed}
                />
              </Image>
            </li>
          </Link>
          <Link to="/work/freelance/">
            <li className="freelance">
              <Image caption={`Freelance`}>
                <Img
                  alt="Freelance projects"
                  fixed={freelanceImg.nodes[0].fixed}
                />
              </Image>
            </li>
          </Link>
          <Link to="/work/open-source/">
            <li className="open-source">
              <Image caption={`Open-source`}>
                <Img
                  alt="Open-source projects"
                  fixed={opensourceImg.nodes[0].fixed}
                />
              </Image>
            </li>
          </Link>
        </ul>
      </div>
    </Layout>
  );
};

export const query = graphql`
  fragment ImgFields on ImageSharpConnection {
    nodes {
      fixed(width: 360, height: 230) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }

  query {
    fulltimeImg: allImageSharp(
      filter: { fluid: { originalName: { eq: "fulltime.png" } } }
    ) {
      ...ImgFields
    }

    freelanceImg: allImageSharp(
      filter: { fluid: { originalName: { eq: "freelance.png" } } }
    ) {
      ...ImgFields
    }

    opensourceImg: allImageSharp(
      filter: { fluid: { originalName: { eq: "opensource.png" } } }
    ) {
      ...ImgFields
    }
  }
`;

export default Work;
