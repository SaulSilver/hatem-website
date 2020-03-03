import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

// TODO: Change this to fetch the category per projects page
const categoriesQuery = graphql`
  query CategoriesQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { in: ["fulltime", "freelance", "opensource"] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            category
            title
          }
        }
      }
    }
  }
`;

const renderPage = data => {
  console.log('data', data);
  // const categoriesNodes = data.allMarkdownRemark.edges.map(
  //   categoryNode => categoryNode.frontmatter
  // );
  // console.log('categoriesNodes:', categoriesNodes);
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
          <Link to="fulltime">
            <li className="fulltime"></li>
          </Link>
          <Link to="freelance">
            <li className="freelance"></li>
          </Link>
          <Link to="opensource">
            <li className="opensource"></li>
          </Link>
        </ul>
      </div>
    </Layout>
  );
};

export default () => (
  <StaticQuery query={categoriesQuery} render={renderPage}></StaticQuery>
);
