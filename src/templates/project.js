import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageNav from '../components/page-nav';
import Img from 'gatsby-image';
import moment from 'moment';
// TODO: move to component
const DATE_FORMAT = 'DD MMM YYYY';
const formatDate = ({ from, to }) => {
  const fromMoment = moment(from);
  const toMoment = moment(to);
  return `${fromMoment.format(DATE_FORMAT)} - ${
    toMoment.isValid() ? toMoment.format(DATE_FORMAT) : 'Now'
  }`;
};

const Project = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, from, to, projectLink, projectImage } = frontmatter;
  const { next, previous } = pageContext;
  return (
    <Layout>
      <SEO title="Project" />
      <h1>{title}</h1>
      <small>{formatDate({ from, to })}</small>
      <br></br>
      <div className="project-container">
        <a className="project-image" href={projectLink} target="_blank">
          <Img
            alt={`${title} image`}
            fluid={projectImage.childImageSharp.fluid}
          />
        </a>
        <div className="project-content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
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
        projectLink
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
