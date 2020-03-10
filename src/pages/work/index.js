import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Image from '../../components/image';

const Work = ({ data }) => {
  console.log('data', data);
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
              <Image caption={`Fulltime project`}>
                <Img
                  alt="Fulltime project"
                  fixed={fulltimeImg.nodes[0].fixed}
                />
              </Image>
            </li>
          </Link>
          <Link to="/work/freelance/">
            <li className="freelance">Freelance</li>
          </Link>
          <Link to="/work/open-source/">
            <li className="open-source">Open-source</li>
          </Link>
        </ul>
      </div>
    </Layout>
  );
};
// TODO: change image names
export const query = graphql`
  query {
    fulltimeImg: allImageSharp(
      filter: { fluid: { originalName: { eq: "gatsby-astronaut.png" } } }
    ) {
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`;

// freelanceImg: allImageSharp(
//   filter: { fluid: { originalName: { eq: "gatsby-astronaut.png" } } }
// ) {
//   fixed(width: 125, height: 125) {
//     ...GatsbyImageSharpFixed_withWebp
//   }
// }

// opensourceImg: allImageSharp(
//   filter: { fluid: { originalName: { eq: "gatsby-astronaut.png" } } }
// ) {
//   fixed(width: 125, height: 125) {
//     ...GatsbyImageSharpFixed_withWebp
//   }
// }
export default Work;
