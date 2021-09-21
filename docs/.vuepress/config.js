module.exports = {
    theme: 'reco',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                /*{ icon: 'reco-github', link: 'https://github.com/recoluan' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }*/
            ]
        },
        nav: [
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
        vssueConfig: {
            platform: 'github',
            owner: 'OWNER_OF_REPO',
            repo: 'NAME_OF_REPO',
            clientId: 'YOUR_CLIENT_ID',
            clientSecret: 'YOUR_CLIENT_SECRET',
        },
        // 密钥
        keyPage: {
            keys: ['87e725ba8594428635ab3a47acde82e8'], // 1.3.0 版本后需要设置为密文
            color: '#42b983', // 登录页动画球的颜色
            lineColor: '#42b983' // 登录页动画线的颜色
        },
        author: 'Infinite',
        huawei: true,
        authorAvatar: '/avatar.png',
        // type: 'blog',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ],
        // 腾讯寻人公益
        noFoundPageByTencent: true,
        modePicker: true,
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: '美文', // 默认 文章
                        tag: '标识', // 默认 标签
                        category: '类别', // 默认 分类
                        friendLink: '友链' // 默认 友情链接
                    },
                    pagation: {
                        prev: '上一页',
                        next: '下一页',
                        go: '前往',
                        jump: '跳转至'
                    }
                }
            }
        },
        /**
         * support for
         * 'default'
         * 'funky'
         * 'okaidia'
         * 'solarizedlight'
         * 'tomorrow'
         */
        // default 'tomorrow'
        codeTheme: 'tomorrow',
        subSidebar: 'auto'
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    base: '/gzhola/',
    plugins: [
        'vuepress-plugin-flowchart'
    ]
}