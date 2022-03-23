
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/build/blog',
    component: ComponentCreator('/build/blog','37e'),
    exact: true
  },
  {
    path: '/build/blog/archive',
    component: ComponentCreator('/build/blog/archive','b3c'),
    exact: true
  },
  {
    path: '/build/blog/first-blog-post',
    component: ComponentCreator('/build/blog/first-blog-post','408'),
    exact: true
  },
  {
    path: '/build/blog/long-blog-post',
    component: ComponentCreator('/build/blog/long-blog-post','b55'),
    exact: true
  },
  {
    path: '/build/blog/mdx-blog-post',
    component: ComponentCreator('/build/blog/mdx-blog-post','de6'),
    exact: true
  },
  {
    path: '/build/blog/tags',
    component: ComponentCreator('/build/blog/tags','3e3'),
    exact: true
  },
  {
    path: '/build/blog/tags/docusaurus',
    component: ComponentCreator('/build/blog/tags/docusaurus','ab5'),
    exact: true
  },
  {
    path: '/build/blog/tags/facebook',
    component: ComponentCreator('/build/blog/tags/facebook','b2d'),
    exact: true
  },
  {
    path: '/build/blog/tags/hello',
    component: ComponentCreator('/build/blog/tags/hello','912'),
    exact: true
  },
  {
    path: '/build/blog/tags/hola',
    component: ComponentCreator('/build/blog/tags/hola','a4c'),
    exact: true
  },
  {
    path: '/build/blog/welcome',
    component: ComponentCreator('/build/blog/welcome','674'),
    exact: true
  },
  {
    path: '/build/helloMarkdown',
    component: ComponentCreator('/build/helloMarkdown','64e'),
    exact: true
  },
  {
    path: '/build/helloReact',
    component: ComponentCreator('/build/helloReact','058'),
    exact: true
  },
  {
    path: '/build/markdown-page',
    component: ComponentCreator('/build/markdown-page','d23'),
    exact: true
  },
  {
    path: '/build/docs',
    component: ComponentCreator('/build/docs','65e'),
    routes: [
      {
        path: '/build/docs/doc9',
        component: ComponentCreator('/build/docs/doc9','f6e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/FG150/fg_example',
        component: ComponentCreator('/build/docs/FG150/fg_example','603'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/intro',
        component: ComponentCreator('/build/docs/intro','cd9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/NL668/AT Commands HTTP',
        component: ComponentCreator('/build/docs/NL668/AT Commands HTTP','302'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/NL668/NL668-LA Series Hardware Guide',
        component: ComponentCreator('/build/docs/NL668/NL668-LA Series Hardware Guide','c8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/build/docs/tutorial-basics/congratulations','deb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/build/docs/tutorial-basics/create-a-blog-post','3dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/build/docs/tutorial-basics/create-a-document','cd9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/build/docs/tutorial-basics/create-a-page','907'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/build/docs/tutorial-basics/deploy-your-site','77d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/build/docs/tutorial-basics/markdown-features','a9c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/build/docs/tutorial-extras/manage-docs-versions','4a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/build/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/build/docs/tutorial-extras/translate-your-site','63d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/build/',
    component: ComponentCreator('/build/','aa2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
