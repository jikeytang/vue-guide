module.exports = {
  title: '个人主页',
  description: '姜帅杰的博客',
  head: [
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博文',
        items: [
          { text: 'Android', link: '/android/' },
          { text: 'ios', link: '/ios/' },
          { text: 'Web', link: '/web/' },
          { text: 'Hybrid', link: '/hybrid/' },
          { text: 'unity', link: '/unity/' },
          { text: '人工智能', link: '/artificial/' },
          { text: 'opencv', link: '/opencv/' }
        ]
      },
      { text: '工具', link: '/ide/' }
    ],
    sidebar: {
      "/android/": [
        "",
        {
          title: 'Android其他知识',
          children: [
            ["android1","Android Studio插件开发入门"],
            ["android2","Android系统分享的使用"],
            ["android3","Android崩溃信息的收集"]
          ]
        }
      ],
      "/web/": [
        "",
        "web1",
        "web2",
      ],
      sidebarDepth: 2,
      lastUpdated: 'Last Updated'
    }
  }
}