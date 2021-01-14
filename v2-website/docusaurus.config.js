module.exports={
  "title": "IFRA IIoT",
  "tagline": "แพลตฟอร์ม ที่ช่วยให้นักพัฒนาด้าน Internet of Things สามารถพัฒนาแอปพลิเคชันหรือโซลูชั่นได้อย่างรวดเร็วและมีประสิทธิภาพ",
  "url": "/",
  "baseUrl": "/",
  "organizationName": "facebook",
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
          "homePageId": "overview",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
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
    "navbar": {
      "title": "IFRA IIoT",
      "logo": {
        "src": "img/ifra-logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "เอกสาร",
          "position": "left"
        },
        {
          "href": "https://blog.ifra.io/",
          "label": "บล็อก",
          "position": "left"
        },
        {
          "href": "https://github.com/ifraiot",
          "label": "GitHub",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 IFRA IIoT Platform",
      "logo": {
        "src": "img/icon.png"
      }
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