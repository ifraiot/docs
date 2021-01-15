
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','5f1'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','445'),
  exact: true,
},
{
  path: '/blog/2016/03/11/blog-post',
  component: ComponentCreator('/blog/2016/03/11/blog-post','1ff'),
  exact: true,
},
{
  path: '/blog/2017/04/10/blog-post-two',
  component: ComponentCreator('/blog/2017/04/10/blog-post-two','bd3'),
  exact: true,
},
{
  path: '/blog/2017/09/25/testing-rss',
  component: ComponentCreator('/blog/2017/09/25/testing-rss','e16'),
  exact: true,
},
{
  path: '/blog/2017/09/26/adding-rss',
  component: ComponentCreator('/blog/2017/09/26/adding-rss','0f5'),
  exact: true,
},
{
  path: '/blog/2017/10/24/new-version-1.0.0',
  component: ComponentCreator('/blog/2017/10/24/new-version-1.0.0','965'),
  exact: true,
},
{
  path: '/hello',
  component: ComponentCreator('/hello','5a5'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','d9b'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','8ef'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','a0d'),
  exact: true,
},
{
  path: '/docs/Dashboard/chart_widget',
  component: ComponentCreator('/docs/Dashboard/chart_widget','c54'),
  exact: true,
},
{
  path: '/docs/Dashboard/control_widget',
  component: ComponentCreator('/docs/Dashboard/control_widget','c17'),
  exact: true,
},
{
  path: '/docs/Device_management/devices',
  component: ComponentCreator('/docs/Device_management/devices','2ae'),
  exact: true,
},
{
  path: '/docs/Device_management/measurement',
  component: ComponentCreator('/docs/Device_management/measurement','098'),
  exact: true,
},
{
  path: '/docs/Device_management/thing',
  component: ComponentCreator('/docs/Device_management/thing','ac4'),
  exact: true,
},
{
  path: '/docs/Download/sdk',
  component: ComponentCreator('/docs/Download/sdk','952'),
  exact: true,
},
{
  path: '/docs/getStarted',
  component: ComponentCreator('/docs/getStarted','ed7'),
  exact: true,
},
{
  path: '/docs/Overview/overviewde',
  component: ComponentCreator('/docs/Overview/overviewde','a09'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
