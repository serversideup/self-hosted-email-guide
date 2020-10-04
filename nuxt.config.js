import theme from '@nuxt/content-theme-docs'

const createSitemapRoutes = async () => {
  const { $content } = require('@nuxt/content')
  let routes = [];

  const posts = await $content({ deep: true })
    .only(['to'])
    .fetch()

  posts.forEach( function( post, index ){
    // For some reason it always pulls the settings.json from the content.
    if( post.to != '//settings' ){
      routes.push( post.to );
    }
  });

  return routes;
}

export default theme({
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  loading: { color: '#00CD81' },
  i18n: {
    defaultLocale: 'en'
  },
  modules: [
    '@nuxtjs/sitemap'
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-20130511-4'
    }]
  ],
  sitemap: {
    hostname: 'https://self-hosted-email-guide.serversideup.net',
    gzip: true,
    routes: createSitemapRoutes
  },
})
