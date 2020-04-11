import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';

const Layout = ({ children, pagePath, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} pagePath={pagePath} />
      <div className={`layout ${className}`}>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
