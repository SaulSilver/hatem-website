import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';
import PageNav from '../../components/page-nav';

const Freelance = () => (
  <Layout>
    <SEO title="Freelance projects" />
    <h1>
      <Fade bottom cascade>
        Freelance projects
      </Fade>
    </h1>
    <Projects category="freelance" />
    <PageNav
      previous={{ path: '/work/fulltime', title: 'Fulltime projects' }}
      next={{ path: '/work/open-source', title: 'Open-source projects' }}
    />
  </Layout>
);

export default Freelance;
