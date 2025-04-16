
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki/fr/',
    component: ComponentCreator('/wiki/fr/','5f4'),
    exact: true
  },
  {
    path: '/wiki/fr/blog',
    component: ComponentCreator('/wiki/fr/blog','125'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/archive',
    component: ComponentCreator('/wiki/fr/blog/archive','397'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/first-blog-post',
    component: ComponentCreator('/wiki/fr/blog/first-blog-post','c3b'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/long-blog-post',
    component: ComponentCreator('/wiki/fr/blog/long-blog-post','27a'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/mdx-blog-post',
    component: ComponentCreator('/wiki/fr/blog/mdx-blog-post','a0c'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/tags',
    component: ComponentCreator('/wiki/fr/blog/tags','6d5'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/tags/docusaurus',
    component: ComponentCreator('/wiki/fr/blog/tags/docusaurus','c80'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/tags/facebook',
    component: ComponentCreator('/wiki/fr/blog/tags/facebook','58d'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/tags/hello',
    component: ComponentCreator('/wiki/fr/blog/tags/hello','655'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/tags/hola',
    component: ComponentCreator('/wiki/fr/blog/tags/hola','3d2'),
    exact: true
  },
  {
    path: '/wiki/fr/blog/welcome',
    component: ComponentCreator('/wiki/fr/blog/welcome','771'),
    exact: true
  },
  {
    path: '/wiki/fr/docs/tags',
    component: ComponentCreator('/wiki/fr/docs/tags','368'),
    exact: true
  },
  {
    path: '/wiki/fr/markdown-page',
    component: ComponentCreator('/wiki/fr/markdown-page','096'),
    exact: true
  },
  {
    path: '/wiki/fr/docs',
    component: ComponentCreator('/wiki/fr/docs','06f'),
    routes: [
      {
        path: '/wiki/fr/docs/intro',
        component: ComponentCreator('/wiki/fr/docs/intro','c9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/congratulations','3db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/create-a-blog-post','154'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/create-a-document','5d0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/create-a-page','a86'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/deploy-your-site','9f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/wiki/fr/docs/tutorial-basics/markdown-features','3b0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/wiki/fr/docs/tutorial-extras/manage-docs-versions','94c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/wiki/fr/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/wiki/fr/docs/tutorial-extras/translate-your-site','7df'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
