import React from 'react';
import { Link } from 'gatsby';

const FooterPagination = ({ previous, next }) => (
  <div>
    <Link to={previous.url}>{`< ${previous.title}`}</Link>
    <Link to={next.url}>{`${next.title}>`}</Link>
  </div>
);

export default FooterPagination;
