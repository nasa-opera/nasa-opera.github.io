// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OPERA Software Docs',
  tagline: 'Observational Products for End-Users from Remote Sensing Analysis (OPERA) Software Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nasa-opera.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  //baseUrl: '/nasa-opera.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nasa-opera', // Update this to your GitHub org/user name.
  projectName: 'website', // Update this to your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nasa-opera/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nasa-opera/website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OPERA',
        logo: {
          alt: 'OPERA Logo',
          src: 'img/nasa-jpl-dark.png',
          href: '/', // Ensure clicking the logo returns to the homepage
        },
        items: [
          {to: '/docs/products', label: 'Product Releases', position: 'left'},
          {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: 'https://www.jpl.nasa.gov/go/opera', label: 'About', position: 'left'},
          // {to: '/blog', label: 'News/Blog', position: 'left'},
          // {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/nasa-opera/website',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
        style: 'dark', // Ensure the navbar uses a darker theme for a more professional look
        hideOnScroll: true, // Add hide on scroll to give a cleaner experience
      },
      footer: {
        style: 'dark', // Keep a consistent dark footer theme
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Product Releases',
                to: '/docs/products',
              },
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'About',
                to: 'https://www.jpl.nasa.gov/go/opera',
              }
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://www.jpl.nasa.gov/go/opera/resources/opera-code-repositories-and-resources',
              }
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:opera.sep@jpl.nasa.gov'
              },
              {
                label: 'Stakeholder Engagement Program',
                href: 'https://www.jpl.nasa.gov/go/opera/stakeholder-engagement-program',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} California Institute of Technology ("Caltech"). U.S. Government sponsorship acknowledged. Contents licensed under Apache License Version 2.0.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false, // Allow users to toggle between light and dark modes
      },
    }),
};

export default config;
