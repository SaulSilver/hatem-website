import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostLink = (post, i) => {
  const title = post.node.frontmatter.title;
  return (
    <Link to={`blog/${title}`} className="post" key={i}>
      {title}
    </Link>
  );
};

const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      edges {
        node {
          id
          frontmatter {
            description
            title
          }
        }
      }
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(postsQuery);
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog-content">
        <h1>
          <Fade bottom cascade>
            Blog
          </Fade>
        </h1>
        <div className="posts-container">
          {data.allMarkdownRemark.edges.map(PostLink)}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
