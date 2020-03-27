import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageNav from '../components/page-nav';

const Project = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { next, previous } = pageContext;
  return (
    <Layout>
      <SEO title="Project" />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <PageNav previous={previous} next={next} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
export default Project;
