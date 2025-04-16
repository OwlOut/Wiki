
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/fr/',
    component: ComponentCreator('/fr/','3ae'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug',
    component: ComponentCreator('/fr/__docusaurus/debug','5d4'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/config',
    component: ComponentCreator('/fr/__docusaurus/debug/config','a03'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/content',
    component: ComponentCreator('/fr/__docusaurus/debug/content','917'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/globalData',
    component: ComponentCreator('/fr/__docusaurus/debug/globalData','456'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/metadata',
    component: ComponentCreator('/fr/__docusaurus/debug/metadata','aa9'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/registry',
    component: ComponentCreator('/fr/__docusaurus/debug/registry','216'),
    exact: true
  },
  {
    path: '/fr/__docusaurus/debug/routes',
    component: ComponentCreator('/fr/__docusaurus/debug/routes','b6c'),
    exact: true
  },
  {
    path: '/fr/blog',
    component: ComponentCreator('/fr/blog','d2c'),
    exact: true
  },
  {
    path: '/fr/blog/archive',
    component: ComponentCreator('/fr/blog/archive','5ce'),
    exact: true
  },
  {
    path: '/fr/blog/first-blog-post',
    component: ComponentCreator('/fr/blog/first-blog-post','905'),
    exact: true
  },
  {
    path: '/fr/blog/long-blog-post',
    component: ComponentCreator('/fr/blog/long-blog-post','ae7'),
    exact: true
  },
  {
    path: '/fr/blog/mdx-blog-post',
    component: ComponentCreator('/fr/blog/mdx-blog-post','bf8'),
    exact: true
  },
  {
    path: '/fr/blog/tags',
    component: ComponentCreator('/fr/blog/tags','f88'),
    exact: true
  },
  {
    path: '/fr/blog/tags/docusaurus',
    component: ComponentCreator('/fr/blog/tags/docusaurus','45c'),
    exact: true
  },
  {
    path: '/fr/blog/tags/facebook',
    component: ComponentCreator('/fr/blog/tags/facebook','40f'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hello',
    component: ComponentCreator('/fr/blog/tags/hello','18d'),
    exact: true
  },
  {
    path: '/fr/blog/tags/hola',
    component: ComponentCreator('/fr/blog/tags/hola','0b9'),
    exact: true
  },
  {
    path: '/fr/blog/welcome',
    component: ComponentCreator('/fr/blog/welcome','baa'),
    exact: true
  },
  {
    path: '/fr/docs/tags',
    component: ComponentCreator('/fr/docs/tags','40d'),
    exact: true
  },
  {
    path: '/fr/markdown-page',
    component: ComponentCreator('/fr/markdown-page','bce'),
    exact: true
  },
  {
    path: '/fr/docs',
    component: ComponentCreator('/fr/docs','b63'),
    routes: [
      {
        path: '/fr/docs/intro',
        component: ComponentCreator('/fr/docs/intro','404'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/fr/docs/tutorial-basics/congratulations','348'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-blog-post','129'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-document','4b8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/fr/docs/tutorial-basics/create-a-page','a8e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/fr/docs/tutorial-basics/deploy-your-site','df9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/fr/docs/tutorial-basics/markdown-features','4f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/fr/docs/tutorial-extras/manage-docs-versions','ec0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/fr/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/fr/docs/tutorial-extras/translate-your-site','54a'),
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
