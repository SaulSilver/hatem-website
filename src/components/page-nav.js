import React from 'react';
import { Link } from 'gatsby';

const PageNavLink = ({ link }) => (
  <li>
    <Link to={link.path}>{link.title}</Link>
  </li>
);

const PageNav = ({ previous, next }) =>
  !previous && !next ? (
    ''
  ) : (
    <div className="content-nav">
      <hr />
      <nav>
        <h4>See also</h4>
        <ul>
          {!previous ? '' : <PageNavLink link={previous} />}
          {!next ? '' : <PageNavLink link={next} />}
        </ul>
      </nav>
    </div>
  );

export default PageNav;
