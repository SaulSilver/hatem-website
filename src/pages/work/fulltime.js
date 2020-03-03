import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';

const Fulltime = () => {
  // const categoriesNodes = data.allMarkdownRemark.edges.map(
  //   categoryNode => categoryNode.frontmatter
  // );
  // console.log('categoriesNodes:', categoriesNodes);
  return (
    <Layout>
      <SEO title="Fulltime projects" />
      <h1>
        <Fade bottom cascade>
          Fulltime projects
        </Fade>
      </h1>
      <Projects category="fulltime" />>
    </Layout>
  );
};

export default Fulltime;