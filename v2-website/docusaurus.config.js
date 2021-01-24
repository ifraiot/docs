module.exports={
  "title": "IFRA IIoT",
  "tagline": "แพลตฟอร์ม ที่ช่วยให้นักพัฒนาด้าน Internet of Things สามารถพัฒนาแอปพลิเคชันหรือโซลูชั่นได้อย่างรวดเร็วและมีประสิทธิภาพ",
  "url": "/",
  "baseUrl": "/",
  "projectName": "ifra-doc-site",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  "stylesheets": [
    "/css/code-block-buttons.css"
  ],
  "favicon": "img/icon.png",
  "customFields": {
    "disableHeaderTitle": true,
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ],
    "fonts": {
      "myFont": [
        "Times New Roman",
        "Serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    }
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
         
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "./sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    hideableSidebar: false,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      
      // theme: require('prism-react-renderer/themes/github'),
      // darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      contextualSearch: true,
    },
     announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'หากคุณมีคำถามหรือข้อสงสัยใด ๆ เกี่ยวกับเอกสารนี้โปรดอย่าลังเลที่จะแจ้งให้เราทราบ <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/2733756676717051">แจ้งปัญหา</a>',
      backgroundColor: '#212121', // Defaults to `#fff`.
      textColor: '#fff', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    "colorMode": {
      "defaultMode": 'light',
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": '🌙',
        "lightIcon": '\u2600',
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        "darkIconStyle": {
          "marginLeft": '2px',
        },
        "lightIconStyle": {
          "marginLeft": '1px',
        }
      }
    },
    "navbar": {
      "title": "IFRA IIoT",
      "logo": {
        "src": "img/logo-ifra.svg"
      },
      "items": [
      
        {
          "to": "docs",
          "activeBasePath": 'docs',
          "label": "เอกสาร",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/ifraiot",
          "label": "GitHub",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 IFRA IIoT Platform",

    },
    "algolia": {
      "apiKey": "25626fae796133dc1e734c6bcaaeac3c",
      "indexName": "docsearch",
      "algoliaOptions": {
        "facetFilters": [
          "language:LANGUAGE",
          "version:VERSION"
        ]
      }
    }
  }
}