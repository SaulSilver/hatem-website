import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

export default () => (
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
          <li className="fulltime">Fulltime</li>
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
