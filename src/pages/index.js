import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const HomePage = props => {
  return (
    <Layout pagePath={props.path} className="home page">
      <SEO title="Home" />
      <h3 className="profession">Web developer and freelancer</h3>
      <Fade delay={500}>
        <h1 className="name">Hatem.</h1>
      </Fade>
      <Fade delay={1200}>
        <h3 className="do">Making web apps and websites for</h3>
      </Fade>
      <Fade delay={2500}>
        <h2 className="you">YOU</h2>
      </Fade>
      <Fade delay={3000}>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </Fade>
    </Layout>
  );
};
export default HomePage;
