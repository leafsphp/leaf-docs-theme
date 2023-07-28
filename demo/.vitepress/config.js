import { defineConfigWithTheme } from 'vitepress'
import path from 'path'
import baseConfig from '../../src/vitepress/config/baseConfig'

export default defineConfigWithTheme({
  extends: baseConfig,

  vite: {
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

  markdown: {
    theme: 'vitesse-dark',
    // lineNumbers: false,

    // adjust how header anchors are generated,
    // useful for integrating with tools that use different conventions
    anchor: {
      slugify(str) {
        return encodeURIComponent(str)
      }
    }
  },

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
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Test 2',
          collapsible: true,
          collapsed: true,
          items: [{ text: 'Test2', link: '/guide/test2' }]
        },
        {
          text: 'Essentials',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/docs/introduction/' },
            { text: 'Why Leaf?', link: '/docs/introduction/why' },
            { text: 'Leaf + MVC', link: '/docs/mvc/' }
          ]
        },
        {
          text: 'Quick Start',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Installation', link: '/docs/introduction/installation' },
            { text: 'Using Docker', link: '/docs/introduction/docker' },
            { text: 'Migration Guide', link: '/docs/migration/introduction' },
            { text: 'Leaf Devtools', link: '/modules/devtools/' }
          ]
        },
        {
          text: 'Introduction',
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: 'URL Rewriting',
              link: '/docs/introduction/url-rewriting'
            },
            { text: 'Leaf tutorial', link: '/tutorial/' },
            { text: 'Your first app', link: '/docs/introduction/first-app' },
            { text: 'Functional Mode', link: '/docs/tooling/functions' },
            { text: 'Modules', link: '/modules/' },
            { text: 'Leaf CLI', link: '/docs/cli/' },
            { text: 'Deployment', link: '/docs/tooling/deployment' },
            { text: 'Testing', link: '/docs/tooling/testing' }
          ]
        },
        {
          text: 'Config',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Overview', link: '/docs/config/' },
            { text: 'Instance and Mode', link: '/docs/config/nsm' },
            { text: 'App settings', link: '/docs/config/settings' },
            { text: 'Dependency Injection', link: '/docs/tooling/container' }
          ]
        },
        {
          text: 'The basics',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Request', link: '/modules/http/v/2/request' },
            { text: 'Response', link: '/modules/http/v/2/response' },
            { text: 'Headers', link: '/modules/http/v/2/headers' },
            { text: 'CORS', link: '/modules/cors/' },
            { text: 'Session', link: '/modules/session/' },
            { text: 'Session Flash', link: '/modules/session/flash' },
            { text: 'Cookies', link: '/modules/cookies/' },
            { text: 'Leaf View', link: '/docs/tooling/view' },
            { text: 'Middleware', link: '/docs/routing/middleware' },
            { text: 'Error Handling', link: '/docs/routing/errors' }
          ]
        },
        {
          text: 'Routing',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Basic Routing', link: '/docs/routing/' },
            { text: 'Sub routing', link: '/docs/routing/sub-routing' },
            { text: 'Dynamic routing', link: '/docs/routing/dynamic' },
            {
              text: 'Optional Route sub-patterns',
              link: '/docs/routing/sub-patterns'
            },
            { text: 'Subfolder support', link: '/docs/routing/sub-folder' },
            { text: 'Using controllers', link: '/docs/routing/controller' }
          ]
        },
        {
          text: 'Database',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/modules/db/' },
            { text: 'Query Builder', link: '/modules/db/v/2/builder' },
            { text: 'Leaf Redis', link: '/modules/redis/' }
          ]
        },
        {
          text: 'Authentication',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/modules/auth/' },
            { text: 'Auth Config', link: '/modules/auth/config' },
            { text: 'User Login', link: '/modules/auth/login' },
            { text: 'User Sign Up', link: '/modules/auth/signup' },
            {
              text: 'Protecting your Routes',
              link: '/modules/auth/protecting-your-routes'
            },
            { text: 'Updating logged-in user', link: '/modules/auth/update' },
            { text: 'Session Support', link: '/modules/auth/session' },
            { text: 'Helper methods', link: '/modules/auth/helpers' }
          ]
        },
        {
          text: 'Utilities',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Leaf Forms', link: '/modules/forms/v/1.2/' },
            { text: 'Leaf Password', link: '/modules/password/' },
            { text: 'Leaf Anchor', link: '/modules/anchor/' },
            { text: 'Leaf Date', link: '/modules/date/' },
            { text: 'Leaf Fetch', link: '/modules/fetch/' },
            { text: 'Logging', link: '/docs/tooling/logging' }
          ]
        },
        {
          text: 'Digging Deeper',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'CSRF', link: '/modules/anchor/csrf/' },
            { text: 'HTTP Cache', link: '/modules/http/v/2/cache' },
            { text: 'Eien Server', link: '/modules/eien/' },
            { text: 'Leaf Mail', link: '/modules/mail/' },
            { text: 'File System', link: '/modules/fs/' }
            // { text: 'Queues/Jobs', link: '/modules/queues/' },
          ]
        },
        {
          text: 'Frontend',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/modules/views/' },
            { text: 'Bare UI', link: '/modules/views/bareui/' },
            { text: 'Leaf Blade', link: '/modules/views/blade/' },
            { text: 'Leaf Veins', link: '/modules/views/veins/' },
            { text: 'Viewi PHP', link: '/modules/views/viewi/' },
            { text: 'Leaf UI', link: '/modules/views/leaf-ui/' }
          ]
        },
        {
          text: 'MVC Integrations',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Leaf MVC', link: '/docs/leafmvc/' },
            { text: 'Leaf API', link: '/docs/leafapi/' },
            { text: 'Skeleton', link: '/docs/skeleton/' },
            { text: 'MVC Config', link: '/docs/mvc/config' },
            { text: 'MVC Routing', link: '/docs/mvc/routing' },
            { text: 'Controllers', link: '/docs/mvc/controllers' },
            { text: 'Views', link: '/docs/mvc/views' },
            { text: 'Models', link: '/docs/mvc/models' },
            { text: 'Migrations', link: '/docs/mvc/migrations' },
            { text: 'Seeders', link: '/docs/mvc/seeds' },
            { text: 'Factories', link: '/modules/mvc-core/factories' },
            // { text: 'MVC Console Tool', link: '/docs/mvc/console' },
            { text: 'Aloe CLI', link: '/aloe-cli/' },
            { text: 'MVC Core', link: '/modules/mvc-core/' }
          ]
        }
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
})
