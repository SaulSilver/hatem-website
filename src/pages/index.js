import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const HomePage = props => {
  return (
    <Layout pagePath={props.path} className="home page">
      <SEO title="Home" />
      <label className="profession">Web developer and freelancer</label>
      <Fade delay={500}>
        <label className="name">Hatem.</label>
      </Fade>
      <Fade delay={1200}>
        <label className="do">Making web apps and websites for</label>
      </Fade>
      <Fade delay={2500}>
        <label className="you">YOU</label>
      </Fade>
      <Fade delay={3000}>
        <Link to="/contact" className="contact-btn">
          <button>Contact</button>
        </Link>
      </Fade>
    </Layout>
  );
};
export default HomePage;
