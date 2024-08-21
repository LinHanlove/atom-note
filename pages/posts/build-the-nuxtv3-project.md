---
title: 关于使用nuxt3+tailwindcss搭建工程
date: 2024-08-20T16:00:00Z
lang: zh
duration: 20min
type: note
---

时隔一个月，终于完成了公司官网的重构，这次重构使用的是nuxt3+tailwindcss，结合tailwindcss的响应式断点完成项目的自适应布局，其中也遇到了很多问题，这个后面慢慢说，今天主要记录一下如何搭建一个nuxt3+tailwindcss的项目

## 创建 Nuxt3 应用

npx

```sh
npx nuxi@latest init <project-name>
```

yarn

```sh
yarn dlx nuxi@latest init <project-name>
```

### 踩坑1:

在墙内的同学，应该都会由于网络原因而失败

## 最简洁的项目目录结构

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6316e991cd114d72a7f001c844b29f03~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgTGluSGFu:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjY3MDA2MDU4MDkwMzI4OCJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1724234384&x-orig-sign=CqC5wtl7HSlGyn2wJr2D54sSniE%3D)

## 项目集成

### tailwindcss （css原子化）[官网链接](https://tailwind.nodejs.cn/)

- 对于繁杂的css语句做到极致的缩减化
- 不需要为起类名而产生心智负担
- Tailwind 在为生产环境构建时会自动删除所有未使用的 CSS，这意味着你的最终 CSS 包可能是最小的。 事实上，大多数 Tailwind 项目向客户交付的 CSS 不到 10kB
- 只需复制并粘贴类名称列表，即可使用 Tailwind 的 `@apply` 指令将重复的工具模式提取到自定义 CSS 类中。
- 更便携的响应式断点

<!---->

- 安装命令

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

- 在`nuxt.config.ts`下添加

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

- 在`tailwindcss.config.js`下添加

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- 在项目静态目录下（没有就创建`static/css/main.css`）

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 在`nuxt.config.ts`下添加

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/static/css/main.css'], // 这一句
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
})
```

#### 拓展：

- [unocss](https://unocss.dev/) 更深层次的css框架 由 antfu开发
- [windicss](https://windicss.org/) 下一代实用优先的 CSS 框架。
- [flex.css](https://juejin.cn/post/7111957522231066637) 一款移动端快速布局的神器

#### 响应式断点： [官网解释](https://tailwind.nodejs.cn/docs/responsive-design)

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ddb9f95f86bd488a955b92e02993a1f9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgTGluSGFu:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjY3MDA2MDU4MDkwMzI4OCJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1724234384&x-orig-sign=UIzAgYVCW9a8g5k0KCfbnDMp3dg%3D)

### eslint

```sh
npm i -g eslint
eslint --init
```

![](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/858316c0305d4bf4842dbf58fdad31a4~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgTGluSGFu:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjY3MDA2MDU4MDkwMzI4OCJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1724234385&x-orig-sign=E9FbrQrIJBogII2%2BweZU7GojQJI%3D)

### @nuxt/image

适用于 Nuxt 应用的即插即用图像优化。使用内置优化器或您最喜欢的图像 CDN 调整图像大小并进行转换

文档：<https://image.nuxt.com/get-started/installation>

### 网络请求封装-fetch

[nuxt3数据获取](https://nuxt.com.cn/docs/getting-started/data-fetching)

推荐项目根目录新建 composables->useFetch.ts

```ts
interface FetchResponse<T = any> {
  data: Ref<T | null>
  error: FetchError<T>
  status: Ref<string>
  pending: Ref<boolean>
  refresh: () => Promise<void>
}

interface FetchError<T = any> {
  error?: Ref<boolean>
  message?: Ref<string>
  statusCode?: Ref<number | null>
  data?: Ref<T | null>
}

// 请求的配置
const config = reactive({
  timeOut: 5000, // 超时时间
  retryCount: 0 // 重试次数
})

export async function fsFetch<T>(url: string, params: Record<string, any> = {}): Promise<FetchResponse<any>> {
  let controller: AbortController

  const fetchWithRetry = async (): Promise<FetchResponse<T>> => {
    controller = new AbortController() // 创建一个新的控制器
    const signal = controller.signal

    // 发起请求
    try {
      // 超时终止
      setTimeout(() => {
        controller.abort()
      }, config.timeOut)

      // 发起请求
      const res = await useFetch<T>(url, {
        params,
        signal
      })

      // 如果请求成功且存在错误，则重试
      if (res.status.value !== 'success' && config.retryCount < 5) {
        config.retryCount++
        return fetchWithRetry()
      }

      return res as FetchResponse<T>
    }
    catch (error) {
      console.log(`请求失败，错误信息：${error}`)
      if (config.retryCount < 5) {
        config.retryCount++
        return fetchWithRetry()
      }
      else {
        throw error // 重试次数达到上限或非超时错误，抛出错误
      }
    }
    finally {
      if (controller.signal.aborted) {
        console.log('请求已取消，重试次数：', config.retryCount)
      }
    }
  }

  return fetchWithRetry()
}
```

#### 使用

```ts
/**
 * @function 获取新闻列表
 */
async function getList() {
  const res = await fsFetch('/front/get-news', {
    page: params.page,
    size: 500
  })

  const {
    data: {
      value: { data }
    },
    status
  } = res

  if (status.value === 'success' && data && data.list) {
    console.log('数据更新了-->', data.list)

    resStatus.value = status.value

    newsList.value = data.list as INewsList[]
  }
}

onMounted(() => {
  console.log('新闻列表页面')
  getList()
})
```

### pinia

#### 安装pinia并添加至nuxt.config.ts->modules[]

```sh
yarn add pinia @pinia/nuxt -D
```

#### 根目录新建stores文件夹，并新建所需模块文件

```ts
import { defineStore } from 'pinia'
import type { ILanguageState } from '~/types/global'

export const useLangStore = defineStore('languageStore', {
  state: () => ({
    language: ''
  }),
  actions: {
    setLanguage(language: string) {
      console.log('要存储的值', language)
      this.language = language

      // 只在客户端调用否则服务端是没有localStorage的
      if (process.client) {
        localStorage.setItem('language', language)
      }
    }
  },
  getters: {
    getLanguage: (state) => {
      if (process.client) {
        return state.language as ILanguageState || localStorage.getItem('language') as ILanguageState
      }
    }
  }
})
```

#### 新增模块中转站

```ts
export * from './language'
```

#### 使用

```ts
import { useLangStore } from '~/stores'

/**
 * 判断当前环境是否为中文环境
 */
export function isChineseEnvironment() {
  const store = useLangStore()

  // 本地存储中存在语言设置，则直接返回
  if (localStorage.getItem('language'))
    return

  /**
   * @description 如果是分享的链接是英文版，则首次打开是英文链接，这里直接将语言设置为英文
   * @waring 这里不能直接使用i18n
   */
  if (window.location.href.includes('en')) {
    return store.setLanguage('en')
  }

  const language = navigator.language

  // 是否为中文
  const isZH = language.startsWith('zh')

  // 中文 排除中文之外全部使用英文
  if (isZH) {
    store.setLanguage('zh')
    console.log('浏览器环境为中文')
  }
  else {
    store.setLanguage('en')
    console.log('浏览器环境为英文')
  }
}
```
