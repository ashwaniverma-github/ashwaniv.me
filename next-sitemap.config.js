/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ashwaniv.me',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/private/', '/admin/'] },
    ],
    additionalSitemaps: [
      'https://ashwaniv.me/sitemap.xml',
      'https://indiegrowth.app/sitemap.xml',
      'https://jukeboxduo.com/sitemap.xml',
      'https://devpage.in/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // You can customize sitemap entries here
    return {
      loc: path,
      changefreq: config.changeFrequency || 'weekly',
      priority: config.priority || 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => {
    // Add custom paths to sitemap
    return [
      { loc: '/projects', priority: 0.8, changefreq: 'weekly' },
      { loc: '/about', priority: 0.6, changefreq: 'monthly' },
    ]
  },
}
