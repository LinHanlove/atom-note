---
title: Projects - LinHan
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Atomic:
    - name: 'Atom Tools'
      link: 'https://github.com/LinHanlove/atom-tools'
      desc: 'A fast, powerful, and out of the box TypeScript tool library'
      icon: 'i-simple-icons-eslint'
    - name: 'Atom Draw'
      link: 'https://github.com/LinHanlove/atom-draw'
      desc: 'Virtual whiteboard for sketching hand-drawn like diagrams'
      icon: 'i-streamline:pen-draw saturate-0'
    - name: 'Atom Calendar'
      link: 'https://github.com/LinHanlove/atom-calendar'
      desc: 'Calendar component for vue3+uniapp'
      icon: 'i-openmoji:calendar saturate-0'
    - name: 'Atom notes'
      link: 'https://github.com/LinHanlove/atom-note'
      desc: 'Thank you to antfu. This project is based on this'
      icon: 'i-noto-v1:notebook saturate-0'
    - name: 'Atom Honeycomb'
      link: 'https://github.com/LinHanlove/atomHoneycomb'
      desc: 'Develop more efficient and aesthetically pleasing browser plugins'
      icon: 'i-ri:hexagon-line saturate-0'
    - name: 'TransType'
      link: 'https://github.com/LinHanlove/transtype'
      desc: 'VSCode plugin, Export typescript type from JSON data or formatted markdown table data'
      icon: 'i-fluent:code-ts-16-filled saturate-0'

  Harmony Os:
    - name: 'Harmony Os Notion'
      link: 'https://gitee.com/linhanlove/hormany-os-notion'
      desc: 'Harmony version of "Concept Notes" project'
      icon: 'i-arcticons:harmony saturate-0'
    - name: 'Harmony Os Utils'
      link: 'https://ohpm.openharmony.cn/#/cn/detail/@atomic%2Fharmonyos-utils'
      desc: '基于harmony_Os最新的api(API13)工具库，旨在提供项目开发中不可或缺的实用工具函数'
      icon: 'i-arcticons:harmony saturate-0'

  Wechat:
    - name: 'Wechat Bot'
      link: 'https://github.com/LinHanlove/wechat-bot'
      desc: 'A WeChat robot based on WeChat combined with OpenAi ChatGPT/Kimi/iFlytek and other AI services.'
      icon: 'i-ic:baseline-wechat'

---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
