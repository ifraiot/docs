export default {
  "title": "IFRA IIoT",
  "tagline": "แพลตฟอร์ม ที่ช่วยให้นักพัฒนาด้าน Internet of Things สามารถพัฒนาแอปพลิเคชันหรือโซลูชั่นได้อย่างรวดเร็วและมีประสิทธิภาพ",
  "url": "http://docs.ifra.io",
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
    "hideableSidebar": false,
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "algolia": {
      "apiKey": "25626fae796133dc1e734c6bcaaeac3c",
      "indexName": "docsearch",
      "algoliaOptions": {
        "facetFilters": [
          "language:LANGUAGE",
          "version:VERSION"
        ]
      },
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "announcementBar": {
      "id": "support_us",
      "content": "หากคุณมีคำถามหรือข้อสงสัยใด ๆ เกี่ยวกับเอกสารนี้โปรดอย่าลังเลที่จะแจ้งให้เราทราบ <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.facebook.com/groups/2733756676717051\">แจ้งปัญหา</a>",
      "backgroundColor": "#212121",
      "textColor": "#fff",
      "isCloseable": true
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌙",
        "lightIcon": "☀",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIconStyle": {
          "marginLeft": "1px"
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
          "activeBasePath": "docs",
          "label": "เอกสาร",
          "position": "left"
        },
        {
          "href": "https://ifra.io/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/ifraiot",
          "label": "GitHub",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 IFRA IIoT Platform",
      "style": "light"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": []
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};