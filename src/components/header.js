import { Link } from 'gatsby';
import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = () => (
  <header>
    <nav className="site-nav">
      <Fade top cascade>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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

export default Header;
