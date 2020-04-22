import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Header = () => {
  const { homeImg } = useStaticQuery(graphql`
    query {
      homeImg: allImageSharp(
        filter: { fixed: { originalName: { eq: "logo.png" } } }
      ) {
        nodes {
          fixed(width: 32) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <header>
      <nav className="site-nav">
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              <Img
                alt="Hatem Houssein logo"
                fixed={homeImg.nodes[0].fixed}
                style={{ width: '42px', height: '42px' }}
              />
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/work" activeClassName="active">
              Work
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
