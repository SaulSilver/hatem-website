import { Link } from 'gatsby';
import React from 'react';

const showHomePageLink = pagePath =>
  pagePath !== '/' ? (
    <li>
      <Link to="/">Home</Link>
    </li>
  ) : (
    ''
  );

const Header = ({ pagePath, ...props }) => {
  return (
    <header>
      <nav className="site-nav">
        <ul>
          {showHomePageLink(pagePath)}
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
