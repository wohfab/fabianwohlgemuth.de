module.exports = {
  siteMetadata: {
    // edit below
    title: `digital creative.`,
    author: `Fabian Wohlgemuth`,
    description: 'Fabian Wohlgemuth - digital creative. - Individuelle, kreative und digitale Lösungen auf Ihre Fragen und Probleme.',
    siteUrl: `https://fabianwohlgemuthd.e/`,
    social: {
      twitter: `wohfab`,
    },
    menuMain:[
      {
        name:'Projekte',
        link:'/projects'
      },
    ],
    menuSocial:[
      {
        name:'Twitter',
        link:'https://twitter.com/wohfab'
      },
      {
        name:'LinkedIn',
        link:'https://linkedin.com/in/fabianwohlgemuth'
      },
      {
        name:'GitHub',
        link:'https://github.com/wohfab'
      },
    ],
    menuLegal:[
      {
        name:'Impressum',
        link:'/legal'
      },
      {
        name:'Nutzungsbedingungen',
        link:'/legal/terms'
      },
      {
        name:'Datenschutzerklärung',
        link:'/legal/privacy'
      },
      {
        name:'Cookies',
        link:'/legal/cookies'
      },      
      {
        name:'DSGVO',
        link:'/legal/gdpr'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-97919061-6`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `fabian wohlgemuth - digital creative.`,
    //     short_name: `fwdc.`,
    //     start_url: `/`,
    //     background_color: `#222222`,
    //     theme_color: `#EE6600`,
    //     display: `standalone`,
    //     // edit below
    //     icon: `content/assets/logos/fwdc_xl_tp.png`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
