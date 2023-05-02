const getBase = require('../../src/vitepress/config/baseConfig')
const path = require('path')

module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      build: {
        minify: false
      },
      resolve: {
        alias: {
          '@vue/theme': path.join(__dirname, '../../src')
        }
      }
    },

    lang: 'en-US',
    title: 'Leaf PHP',
    description: 'Leaf PHP - The Progressive PHP Framework',

    themeConfig: {
      logo: '/img/logo-vue.svg',

      algolia: {
        appId: 'Q38TT8XUN9',
        indexName: 'leafphp',
        apiKey: '87b4b8d90960f7a326dfd4c8781a5a74',
        searchParameters: {
          facetFilters: ['version:v3']
        }
      },

      socialLinks: [
        { icon: 'languages', link: '/translations/' },
        { icon: 'github', link: 'https://github.com/leafsphp/leaf' },
        { icon: 'twitter', link: 'https://twitter.com/leafphp' },
        { icon: 'discord', link: 'https://discord.gg/Pkrm9NJPE3' },
        {
          icon: 'youtube',
          link: 'https://www.youtube.com/channel/UCllE-GsYy10RkxBUK0HIffw',
          classes: 'd-lg:none'
        }
      ],

      nav: [
        {
          text: 'Docs',
          activeMatch: `^/(guide|examples)/`,
          items: [
            {
              items: [
                { text: 'Guide', link: '/guide/introduction' },
                { text: 'Installation', link: '/guide/installation' }
              ]
            }
          ]
        },
        {
          text: 'API Reference',
          activeMatch: `^/api/`,
          link: '/api/'
        },
        {
          text: 'Ecosystem',
          items: [
            {
              items: [{ text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' }]
            },
            {
              text: 'Official Projects',
              items: [
                { text: 'Vue Router', link: 'https://next.router.vuejs.org/' },
                { text: 'Vuex', link: 'https://next.vuex.vuejs.org/' },
                { text: 'Vue CLI', link: 'https://cli.vuejs.org/' },
                {
                  text: 'Vue Test Utils',
                  link: 'https://next.vue-test-utils.vuejs.org/v2/guide/introduction.html'
                },
                {
                  text: 'Devtools',
                  link: 'https://github.com/vuejs/vue-devtools'
                }
              ]
            }
          ]
        },
        {
          text: 'Community',
          activeMatch: `^/community/`,
          items: [
            {
              items: [
                { text: 'Team', link: '/community/team' },
                {
                  text: 'Contribution Guide',
                  link: '/community/contribution-guide'
                },
                { text: 'Events', link: 'https://events.vuejs.org/' }
              ]
            },
            {
              text: 'News',
              items: [
                { text: 'Twitter', link: 'https://twitter.com/vuejs' },
                { text: 'Newsletter', link: 'https://news.vuejs.org/' },
                { text: 'Blog', link: 'https://blog.vuejs.org/' }
              ]
            },
            {
              text: 'Help',
              items: [
                { text: 'Forum', link: 'https://forum.vuejs.org/' },
                { text: 'Chat', link: 'https://discord.com/invite/HBherRA' },
                { text: 'DEV Community', link: 'https://dev.to/t/vue' }
              ]
            }
          ]
        },
        {
          text: 'Sponsor',
          link: '/sponsor/'
        }
      ],

      sidebar: {
        '/guide/': [
          {
            text: 'Essentials',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
            ]
          },
          {
            text: 'Test 2',
            collapsible: true,
            collapsed: true,
            items: [
              { text: 'Test2', link: '/guide/test2' },
            ]
          },
        ],
        '/api/': [
          {
            text: 'Global API',
            items: [
              { text: 'Application', link: '/api/application' },
              { text: 'Utilities', link: '/api/utilities' }
            ]
          }
        ]
      },

      footer: {
        license: {
          text: 'MIT License',
          link: 'https://opensource.org/licenses/MIT'
        },
        copyright: `Copyright © 2019-${new Date().getFullYear()} Michael Darko-Duodu`
      }
    }
  }
})()
