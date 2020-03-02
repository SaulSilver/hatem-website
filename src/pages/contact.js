import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <div className="contact-form">
      <h1>
        <Fade bottom cascade>
          Contact
        </Fade>
      </h1>
      <Fade bottom>
        <p>Add contact form here</p>
      </Fade>
    </div>
  </Layout>
);

export default ContactPage;
