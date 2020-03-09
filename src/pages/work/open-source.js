import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';
import PageNav from '../../components/page-nav';

const Opensource = () => (
  <Layout>
    <SEO title="Open-source projects" />
    <h1>
      <Fade bottom cascade>
        Open-source projects
      </Fade>
    </h1>
    <Projects category="open-source" />
    <PageNav
      previous={{ path: '/work/freelance', title: 'Freelance projects' }}
      next={{ path: '/work/fulltime', title: 'Fulltime projects' }}
    />
  </Layout>
);

export default Opensource;
