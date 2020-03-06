import React from 'react';
import { Link } from 'gatsby';

const PageNav = ({ previous, next }) => (
  <nav>
    <ul>
      <li>
        <Link to={previous.url}>{`< ${previous.title}`}</Link>
      </li>
      <li>
        <Link to={next.url}>{`${next.title}>`}</Link>
      </li>
    </ul>
  </nav>
);

export default PageNav;
