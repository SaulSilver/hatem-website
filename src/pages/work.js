import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPage = () => (
  <Layout>
    <SEO title="work" />
    <div className="work-content">
      <h1>
        <Fade bottom cascade>
          Work
        </Fade>
      </h1>
      <Fade bottom>
        <p>Add project divs here</p>
      </Fade>
    </div>
  </Layout>
);

export default WorkPage;
