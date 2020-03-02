import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 className="profession">Web developer and freelancer</h3>
    <Fade delay="500">
      <h1 className="name">Hatem.</h1>
    </Fade>
    <Fade delay="1200">
      <h3 className="do">Making web apps and websites for</h3>
    </Fade>
    <Fade delay="2500">
      <h2 className="you">YOU</h2>
    </Fade>
    <Fade delay="4000">
      <button>Contact</button>
    </Fade>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
);

export default HomePage;
