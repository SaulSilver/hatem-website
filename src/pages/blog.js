import React from 'react';
import { graphql, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostLink = (post, i) => {
  const { frontmatter } = post.node;
  return (
    <li className="post">
      <div className="post-header inline">
        <Link to={frontmatter.path} key={i}>
          <h4>{frontmatter.title}</h4>
        </Link>
        <small>[{frontmatter.category}]</small>
      </div>
      <p>{frontmatter.description}</p>
      <div>
        <small>{frontmatter.date}</small>
        <div className="post-tags inline">
          {frontmatter.tags.map(tag => (
            <small>#{tag}</small>
          ))}
        </div>
      </div>
    </li>
  );
};

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-content">
        <h1>
          <Fade left cascade>
            Latest Blog Posts
          </Fade>
        </h1>
        <ul className="posts-container">{posts.map(PostLink)}</ul>
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
