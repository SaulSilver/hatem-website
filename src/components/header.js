import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

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
        <Fade top cascade>
          <ul>
            {showHomePageLink(pagePath)}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Fade>
      </nav>
    </header>
  );
};
export default Header;
