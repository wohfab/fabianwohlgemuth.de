module.exports = {
  siteMetadata: {
    // edit below
    title: `digital creative.`,
    author: `Fabian Wohlgemuth`,
    description: 'Fabian Wohlgemuth - digital creative. - Individuelle, kreative und digitale Lösungen auf Ihre Fragen und Probleme.',
    siteUrl: `https://fabianwohlgemuth.de/`,
    social: {
      twitter: `wohfab`,
    },
    menuMain:[
      // {
      //   name:'design',
      //   link:'/design'
      // },
      {
        name:'leistungen',
        link:'/service'
      },
      {
        name:'audio',
        link:'/audio'
      },
      {
        name:'photos',
        link:'/photos'
      },
      {
        name:'projekte',
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
        defaultLayouts: {
          pages: require.resolve("./src/templates/project.js"),
          default: require.resolve("./src/templates/page.js"),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-embed-soundcloud`,
          //   options: {
          //     width: 500, // default is "100%"
          //     height: 100, // default is 300
          //     color: `#ee6600`, // default is #ff5500
          //     autoplay: false, // default is false
          //   }
          // },
          {
            resolve: `gatsby-remark-embedder`,
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
              withWebp: true,
              tracedSVG: true,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fabian wohlgemuth - digital creative.`,
        short_name: `fwdc.`,
        start_url: `/`,
        //background_color: `#222222`,
        //theme_color: `#EE6600`,
        //display: `standalone`,
        // edit below
        icon: `content/assets/logos/fwdc_xl_tp.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: `rgba(0, 0, 0, 0.8)`,
            }
          },
        ],
      },
    },
  ],
}
