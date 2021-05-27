import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import App from '../components/App';
// import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const SEO = ({ description, lang, meta, title }) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        defaultTitle,
        defaultDescription,
        defaultImage,
        author
      }
    }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            defaultTitle: title
            defaultDescription: description
            defaultImage: facebookImage
            author {
              name
            }
          }
        }
      }
    `
  );
  const metaDescription = description || defaultDescription;
  const image = defaultImage ? `${siteUrl}${defaultImage}` : null;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${defaultTitle}'s %s`}
      meta={[
        {
          name: `author`,
          content: author.name || 'Hatem Houssein'
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `date`,
          content: new Date()
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:url`,
          content: siteUrl
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:site_name`,
          content: defaultTitle
        },
        {
          property: `og:type`,
          content: `website`
        }
      ]
        .concat(
          defaultImage
            ? [
                {
                  property: 'og:image',
                  content: image
                },
                {
                  property: 'og:image:width',
                  content: defaultImage.width
                },
                {
                  property: 'og:image:height',
                  content: defaultImage.height
                }
              ]
            : []
        )
        .concat(meta)}
    />
  );
};
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default () => {
  // const { title, lang, description } = headData;

  return (
    <>
      <SEO />
      <App />
    </>
  );
};
