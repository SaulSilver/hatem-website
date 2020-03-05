import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';

const Freelance = () => (
  <Layout>
    <SEO title="Freelance projects" />
    <h1>
      <Fade bottom cascade>
        Freelance projects
      </Fade>
    </h1>
    <Projects category="freelance" />>
  </Layout>
);

export default Freelance;
