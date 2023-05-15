module.exports = {
  siteMetadata: {
    siteUrl: 'https://hatem.page',
    title: 'Hatem',
    description: 'Website for Hatem, a software engineer.',
    author: {
      name: 'Hatem Houssein',
      summary: 'Website for Hatem, a software engineer.'
    },
    email: 'hatem.houssein@gmail.com',
    gitHub: 'SaulSilver',
    // gitLab: 'hForHatem',
    facebookImage: '/facebook_ogp.png'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hatem-website`,
        short_name: `hatem`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-166049278-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    }
  ]
};
