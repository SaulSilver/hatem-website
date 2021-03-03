import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header>
    <nav className="site-nav">
      <Link
        to="/"
        className="home-link"
        activeClassName="active"
        name="home-page-link"
      ></Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
      <Link to="/work" activeClassName="active">
        Work
      </Link>
      <Link to="/blog" activeClassName="active">
        Blog
      </Link>
      <Link to="/contact" activeClassName="active">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
