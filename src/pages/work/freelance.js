import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import Projects from '../../components/projects';
import FooterPagination from '../../components/footer-pagination';

const Freelance = () => (
  <Layout>
    <SEO title="Freelance projects" />
    <h1>
      <Fade bottom cascade>
        Freelance projects
      </Fade>
    </h1>
    <Projects category="freelance" />
    <FooterPagination
      previous={{ url: '/work/fulltime', title: 'Fulltime projects' }}
      next={{ url: '/work/open-source', title: 'Open-source projects' }}
    />
  </Layout>
);

export default Freelance;
