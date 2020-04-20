import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageNav from '../components/page-nav';
import PostTags from '../components/post-tags';

const Post = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { next: nextPost, previous: previousPost } = pageContext;
  return (
    <Layout>
      <SEO title="Blog post" />
      <div className="post-header inline">
        <h1>{frontmatter.title}</h1>
        <small className="category">{frontmatter.category}</small>
      </div>
      <br></br>
      <small>{frontmatter.date}</small>
      <PostTags tags={frontmatter.tags}></PostTags>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <PageNav previous={previousPost} next={nextPost} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        category
        tags
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`;
export default Post;
