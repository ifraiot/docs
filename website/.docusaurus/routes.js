
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','c79'),
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
  path: '/search',
  component: ComponentCreator('/search','588'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','e22'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','a0d'),
  exact: true,
},
{
  path: '/docs/connection/http',
  component: ComponentCreator('/docs/connection/http','80b'),
  exact: true,
},
{
  path: '/docs/connection/mqtt',
  component: ComponentCreator('/docs/connection/mqtt','ccb'),
  exact: true,
},
{
  path: '/docs/connection/opc-ua',
  component: ComponentCreator('/docs/connection/opc-ua','114'),
  exact: true,
},
{
  path: '/docs/dashboard/bar',
  component: ComponentCreator('/docs/dashboard/bar','bc8'),
  exact: true,
},
{
  path: '/docs/dashboard/clock',
  component: ComponentCreator('/docs/dashboard/clock','a43'),
  exact: true,
},
{
  path: '/docs/dashboard/couter',
  component: ComponentCreator('/docs/dashboard/couter','5e2'),
  exact: true,
},
{
  path: '/docs/dashboard/gauge',
  component: ComponentCreator('/docs/dashboard/gauge','801'),
  exact: true,
},
{
  path: '/docs/dashboard/line',
  component: ComponentCreator('/docs/dashboard/line','53e'),
  exact: true,
},
{
  path: '/docs/dashboard/magic',
  component: ComponentCreator('/docs/dashboard/magic','159'),
  exact: true,
},
{
  path: '/docs/dashboard/pie',
  component: ComponentCreator('/docs/dashboard/pie','2b8'),
  exact: true,
},
{
  path: '/docs/dashboard/text',
  component: ComponentCreator('/docs/dashboard/text','3ba'),
  exact: true,
},
{
  path: '/docs/download/sdk',
  component: ComponentCreator('/docs/download/sdk','990'),
  exact: true,
},
{
  path: '/docs/example/index',
  component: ComponentCreator('/docs/example/index','d65'),
  exact: true,
},
{
  path: '/docs/getstarted',
  component: ComponentCreator('/docs/getstarted','873'),
  exact: true,
},
{
  path: '/docs/integrations/systems',
  component: ComponentCreator('/docs/integrations/systems','259'),
  exact: true,
},
{
  path: '/docs/management/devices',
  component: ComponentCreator('/docs/management/devices','5c8'),
  exact: true,
},
{
  path: '/docs/management/measurement',
  component: ComponentCreator('/docs/management/measurement','9b5'),
  exact: true,
},
{
  path: '/docs/management/thing',
  component: ComponentCreator('/docs/management/thing','a65'),
  exact: true,
},
{
  path: '/docs/overview/architecture',
  component: ComponentCreator('/docs/overview/architecture','b4b'),
  exact: true,
},
{
  path: '/docs/overview/how-ifra-work',
  component: ComponentCreator('/docs/overview/how-ifra-work','9c1'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
