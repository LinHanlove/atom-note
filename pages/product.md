---
title: Product - LinHan
display: Product
description: List of Product that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Vs Code Extends:
    - name: 'TransType'
      link: 'https://marketplace.visualstudio.com/items?itemName=LinHanPro.transtype'
      desc: '一款强大的VSCode插件，能够将json数据或经过格式化后的markdown表格数据高效转换为TypeScript类型定义。'
      icon: 'i-fluent:code-ts-16-filled saturate-0'
  Browser Extends:
    - name: 'Atom Honeycomb'
      link: 'https://chromewebstore.google.com/search/Atom%20Honeycomb?hl=zh-CN&utm_source=ext_sidebar'
      desc: '快捷/划词搜索、json数据美化、图片压缩、图片格式转换...,所有这些都在一个方便的扩展中。'
      icon: 'i-ri:hexagon-line saturate-0'
  Mac App:
    - name: 'Alpinist'
      link: 'https://github.com/LinHanlove/transtype'
      desc: '一个优雅的快捷启动器，帮助你快速搜索并启动应用程序、管理代码片段。登山者永垂不朽！'
      icon: 'i-logos:atomic-icon saturate-0'

---

<!-- @layout-full-width -->

<ListProduct :projects="frontmatter.projects" />
