import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => {
  const data = useStaticQuery(graphql`
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
  `);
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
          {data.allMarkdownRemark.edges.map((post, i) => (
            <div className="post" key={i}>
              {post.node.frontmatter.title}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
