---
title: Vue主题-reco的使用
date: 2021-09-21
sidebar: 'auto'
categories:
 - vuepress
tags:
 - vue 
publish: true
---
 

::: tip
这是vuepress博客的reco主题的使用方法
:::


## 一、安装和配置
```bash
yarn add vuepress-theme-reco
vi docs/.vuepress/config.js
module.export = {
  theme: 'reco'
}
```

### 1、加密配置
```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    // 密钥
    keyPage: {
      keys: ['32位的 md5 加密密文'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }
  }
}
```

### 2、增加评论功能
- [Vssue](https://vssue.js.org/zh/options/)
```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }  
}
```

### 3、增加时间轴
```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }
}
```

### 4、`config.js`优化
- 移动端优化
```javascript
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
} 
```

- 使用主题内置图标
```text
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

- 全局设置作者姓名
```javascript
module.exports = {
  themeConfig: {
    // author
    author: 'reco_luan'
  }
}
```

- 华为文案
```javascript
module.exports = {
  themeConfig: {
    huawei: true
  }
}
```

- Logo
```javascript
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```

- 头像
```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }  
}  
```

### 5、首页配置



### 6、文章设置
- 添加摘要
```markdown
:::tip
这是一个摘要
:::
```


### 7、插件使用

#### 7.1、`vuepress-plugin-container`

```markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
- 样式如下

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。

::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


#### 7.2、`vuepress-plugin-flowchart`
> 流程图
> yarn add vuepress-plugin-flowchart
- 输入
```markdown
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

- 输出

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend


#### 7.3、`@vuepress/plugin-medium-zoom`
> 图片放大
> yarn add @vuepress/plugin-medium-zoom


#### 7.4、`markdown-it-plantuml`
> UML
> yarn add markdown-it-plantuml



### 8、定制样式

#### 8.1、修改主题色

- `.vuepress/styles/palette.styl`

```stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

#### 8.2、添加或修改主题样式

- `.vuepress/styles/index.styl`

```stylus
.content {
  font-size 30px
}
```

#### 8.3、在 Head 中引用脚本与样式
```javascript
module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    ["script", { src: "scripts/demo.js" }]
  ]
}
```
- 解析后
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```

#### 8.4、在单独的页面使用

> 有时，你可以只想在当前页面应用一些 JavaScript 或者 CSS，在这种情况下，你可以直接在 Markdown 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。


```vue

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
        .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>
```
