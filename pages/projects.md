---
title: Projects - LinHan
display: Projects
description: List of projects that I am proud of
wrapperClass: 'text-center'
art: dots
projects:
  Atom:
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

  Wechat:
    - name: 'Wechat Bot'
      link: 'https://github.com/LinHanlove/wechat-bot'
      desc: 'A WeChat robot based on WeChat combined with OpenAi ChatGPT/Kimi/iFlytek and other AI services.'
      icon: 'i-ic:baseline-wechat'
  Harmony Os:
    - name: 'Harmony Os Notion'
      link: 'https://gitee.com/linhanlove/hormany-os-notion'
      desc: 'Harmony version of "Concept Notes" project'
      icon: 'i-arcticons:harmony saturate-0'

---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
