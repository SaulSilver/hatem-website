import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PostsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark {
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

const renderPage = data => {
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
        <div className="posts-container">
          {posts.map((post, i) => (
            <div className="post" key={i}>
              {post.node.frontmatter.title}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default () => <StaticQuery query={PostsQuery} render={renderPage} />;
