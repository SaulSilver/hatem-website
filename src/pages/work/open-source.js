import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';
import FooterPagination from '../../components/footer-pagination';

const Opensource = () => (
  <Layout>
    <SEO title="Open-source projects" />
    <h1>
      <Fade bottom cascade>
        Open-source projects
      </Fade>
    </h1>
    <Projects category="open-source" />
    <FooterPagination
      previous={{ url: '/work/freelance', title: 'Freelance projects' }}
      next={{ url: '/work/fulltime', title: 'Fulltime projects' }}
    />
  </Layout>
);

export default Opensource;
