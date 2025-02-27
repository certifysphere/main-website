// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CertifySphere',
  tagline: 'IT Consulting & Training Solutions',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://certifysphere.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'certifysphere', // Usually your GitHub org/user name.
  projectName: 'main-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 50,
          blogSidebarTitle: 'All Recent Blog Posts',
          feedOptions: {  type: 'all', title: 'CertifySphere Blog' },
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogDescription: 'CertifySphere Blog',
          postsPerPage: 20,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-TKWWQRV8GH',
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: 'GTM-NL966CL8',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'free coding bootcamp, learn python, learn react, aws, mongodb, postgres, software consulting, cloud' }],
      // Replace with your project's social card
      image: 'img/certifysphere_banner_social.png',
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //   'Registration is open for the fall free internship and bootcamp. <a target="_blank"  rel="noopener noreferrer" href="https://forms.gle/Lp6RQ1unCzZB5Pyn9">Click Here to Register.</a>.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // },
      navbar: {
        title: 'CertifySphere',
        logo: {
          alt: 'CertifySphere Solutions Logo',
          src: 'img/logo_new.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'labsSidebar',
            position: 'left',
            label: 'Labs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'bootcampSidebar',
            position: 'right',
            label: 'Free BootCamp',
          },
          { to: '/contact-us', label: 'Contact-Us', position: 'right' },
          {
            href: 'https://github.com/certifysphere/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          //     {
          //       title: 'Docs',
          //       items: [
          //         {
          //           label: 'Tutorial',
          //           to: '/docs/intro',
          //         },
          //       ],
          //     },
          //     {
          //       title: 'Community',
          //       items: [
          //         {
          //           label: 'Stack Overflow',
          //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //         },
          //         {
          //           label: 'Discord',
          //           href: 'https://discordapp.com/invite/docusaurus',
          //         },
          {
            label: 'Twitter',
            href: 'https://twitter.com/certifysphere',
          },
        ],
        //     },
        //     {
        //       title: 'More',
        //       items: [
        //         {
        //           label: 'Blog`',
        //           to: '/blog',
        //         },
        //         {
        //           label: 'GitHub',
        //           href: 'https://github.com/facebook/docusaurus',
        //         },
        //       ],
        //     },
        //      ],
        copyright: `Copyright © ${new Date().getFullYear()} CertifySphere Solutions.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
