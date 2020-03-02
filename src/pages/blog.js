import React from 'react';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="blog-content">
      <h1>
        <Fade bottom cascade>
          Blog
        </Fade>
      </h1>
      <Fade bottom>
        <p>Add blog divs here</p>
      </Fade>
    </div>
  </Layout>
);

export default BlogPage;
