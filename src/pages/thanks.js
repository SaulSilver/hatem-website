import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <h1>
      <Fade bottom>Thank you for contacting me!</Fade>
    </h1>
    <p>
      <Fade bottom>I will get back to you as soon as I can.</Fade>
    </p>
  </Layout>
);

export default ThanksPage;
