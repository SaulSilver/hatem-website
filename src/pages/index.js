import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';

const HomePage = props => {
  return (
    <Layout pagePath={props.path} className="home">
      <SEO title="Home" />
      {/* roll text: "Web developer", "Frontend", "Backend", "Freelancer", "Web designer", "Mentor" */}
      <h3 className="profession">Web developer</h3>
      <Fade cascade delay={500}>
        <h1 className="name">Hatem</h1>
      </Fade>
      <Fade delay={1200}>
        <h3 className="do">Making web apps and websites for</h3>
      </Fade>
      <Fade cascade delay={2000}>
        <h1 className="you">YOU</h1>
      </Fade>
      {/* <Fade delay={2400}> */}
      <Link to="/contact" className="btn">
        Contact me
      </Link>
      {/* </Fade> */}
    </Layout>
  );
};
export default HomePage;
