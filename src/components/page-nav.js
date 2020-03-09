import React from 'react';
import { Link } from 'gatsby';

const PageNav = ({ previous, next }) =>
  !previous && !next ? (
    ''
  ) : (
    <nav>
      <ul>
        {!previous ? (
          ''
        ) : (
          <li>
            <Link to={previous.path}>{`< ${previous.title}`}</Link>
          </li>
        )}
        {!next ? (
          ''
        ) : (
          <li>
            <Link to={next.path}>{`${next.title}>`}</Link>
          </li>
        )}
      </ul>
    </nav>
  );

export default PageNav;
