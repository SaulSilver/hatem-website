import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageNav from '../components/page-nav';
import Img from 'gatsby-image';
import moment from 'moment';
// TODO: move to component
const DATE_FORMAT = 'DD MMMM YYYY';
const formatDate = ({ from, to }) => {
  const fromMoment = moment(from);
  const toMoment = moment(to);
  return `${fromMoment.format(DATE_FORMAT)} - ${
    toMoment.isValid() ? toMoment.format(DATE_FORMAT) : 'Now'
  }`;
};

const Project = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, from, to, projectImage } = frontmatter;
  const { next, previous } = pageContext;
  return (
    <Layout>
      <SEO title="Project" />
      <h1>{title}</h1>
      <small>{formatDate({ from, to })}</small>
      <Img
        className="project-image"
        alt={`${title} image`}
        fluid={projectImage.childImageSharp.fluid}
      />
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
        from
        to
        title
        projectImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default Project;
