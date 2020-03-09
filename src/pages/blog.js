import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostLink = (post, i) => {
  const { title, path } = post.node.frontmatter;
  return (
    <Link to={path} className="post" key={i}>
      {title}
    </Link>
  );
};

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          id
          frontmatter {
            description
            title
            path
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-content">
        <h1>
          <Fade bottom cascade>
            Blog
          </Fade>
        </h1>
        <div className="posts-container">{posts.map(PostLink)}</div>
      </div>
    </Layout>
  );
};

export default Blog;
