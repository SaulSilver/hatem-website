import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';
import PageNav from '../../components/page-nav';

const Fulltime = () => (
  <Layout>
    <SEO title="Fulltime projects" />
    <h1>
      <Fade bottom cascade>
        Fulltime projects
      </Fade>
    </h1>
    <Projects category="fulltime" />
    <PageNav
      previous={{ url: '/work/open-source', title: 'Open-source projects' }}
      next={{ url: '/work/freelance', title: 'Freelance projects' }}
    />
  </Layout>
);

export default Fulltime;
