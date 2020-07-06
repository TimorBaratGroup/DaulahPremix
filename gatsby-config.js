require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Daulah Premix',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daulah Premix`,
        short_name: `DP`,
        description: `We provide granite aggregates crushed to different sizes to meet our client\'s requirements.`,
        lang: `en`,
        display: `standalone`,
        icon: `static/favicon/favicon.png`,
      },
    },
  ],
}
