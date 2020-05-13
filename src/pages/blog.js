import React from 'react';
import { graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostTags from '../components/post-tags';

const PostLink = (post, i) => {
  const { frontmatter } = post.node;
  return (
    <section className="post">
      <div className="post-header inline">
        <Link to={frontmatter.path} key={i}>
          <h4>{frontmatter.title}</h4>
        </Link>
        <small className="category">{frontmatter.category}</small>
      </div>
      <p className="description">{frontmatter.description}</p>
      <div className="post-subinfo">
        <small className="date">{frontmatter.date}</small>
        <PostTags tags={frontmatter.tags}></PostTags>
      </div>
    </section>
  );
};

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout className="blogs-page">
      <SEO title="Blog" />
      <div className="blog-content">
        <h1 className="page-header-title">
          <Fade left cascade>
            Latest Blog Posts
          </Fade>
        </h1>
        <div className="posts-container">{posts.map(PostLink)}</div>
      </div>
    </Layout>
  );
};

export default Blog;

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            path
            category
            tags
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`;
