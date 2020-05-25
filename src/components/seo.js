import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        defaultTitle,
        defaultDescription,
        twitter,
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
            twitter
            defaultImage: image
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
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: twitter
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
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
                },
                {
                  property: 'twitter:image',
                  content: image
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image'
                }
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary'
                }
              ]
        )
        .concat(meta)}
    />
  );
}

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

export default SEO;
