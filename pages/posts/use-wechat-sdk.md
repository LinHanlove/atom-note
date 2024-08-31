---
title: 关于使用微信SDK
date: 2024-08-31T16:50:00Z
lang: zh
duration: 20min
type: note
---

最近，在开发微信H5的过程中，需要使用微信的SDK来实现一些功能，比如获取定位、拍照等。本文将介绍如何使用微信SDK，以及一些常见的坑和解决方案。

## 微信SDK简介

微信SDK是微信官方提供的一套开发工具包，可以帮助开发者快速接入微信的功能，比如分享、支付、登录等。微信SDK提供了丰富的API，可以满足大部分开发需求。

## 如何使用微信SDK

[JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

### 1. 注册微信开放平台账号

首先，需要在微信开放平台注册一个账号，并创建一个应用。在创建应用时，需要填写一些基本信息，比如应用名称、应用类型等。

### 2. 下载微信SDK

在微信开放平台创建应用后，可以下载微信SDK。微信SDK提供了多种语言版本，包括Java、PHP、Python等。根据你的项目需求，选择合适的语言版本下载。

```sh
pnpm add weixin-js-sdk -S
```

### 3. 集成微信SDK

下载微信SDK后，需要将其集成到你的项目中。具体的集成方式，可以参考微信官方文档。

### 4. 配置微信SDK

在集成微信SDK后，需要配置一些参数，比如AppID、AppSecret等。这些参数可以在微信开放平台的应用管理页面查看。

### 5. 调用微信SDK

配置好微信SDK后，就可以调用微信SDK提供的API来实现功能了。比如，调用分享API可以实现分享功能，调用支付API可以实现支付功能。

## vue3集成封装

```ts
import wx from 'weixin-js-sdk'
// import { DefaultApiFetch } from '@/api'
import fetch from '@/utils/newHttp'

interface IWindow extends Window {
  entryUrl?: string
}

// 定义微信 JS-SDK 的类型接口
type WechatJSSDK = {
  // 配置接口
  config: (options: any) => void
  // 准备就绪的回调接口
  ready: (callback: () => void) => void
  // 错误的回调接口
  error: (callback: (error: any) => void) => void
} & any

// 定义window对象
const _window: IWindow = window

/**
 * @class FsWechat
 * @description h5调用微信接口并包装
 */
class Wechat {
  /**
   * 获取当前页面 URL，若未定义则初始化为当前文档位置
   * @returns 当前页面 URL
   */
  signLink(): string {
    if (typeof _window.entryUrl === 'undefined' || _window.entryUrl === '') {
      _window.entryUrl = document.location.href
    }

    console.log('当前页面URL：', /(Android)/i.test(navigator.userAgent) ? document.location.href : _window.entryUrl)

    // 针对 Android 平台返回当前文档位置，否则返回 entryUrl
    return /(Android)/i.test(navigator.userAgent) ? document.location.href : _window.entryUrl
  }

  /**
   * @function 初始化wechat
   * @returns 微信配置 Promise 对象
   */
  wechat() {
    return new Promise<WechatJSSDK>((resolve, reject) => {
      /**
       * 这里需要后端配合验签
       * 返回以下参数：
       * appId: res.data.appId, // 必填，公众号的唯一标识
       * timestamp: res.data.timestamp, // 必填，生成签名的时间戳
       * nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
       * signature: res.data.signature, // 必填，签名
       */

      fetch.post('Users/shareSign', {
        url: this.signLink()
      }).then((res) => {
        const { data } = res

        /**
         * 微信JS-SDK配置参数
         */
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          ...data,
          jsApiList: [
            'getLocation', // 获取地理位置
            'openLocation', // 使用微信内置地图查看位置接口
            'chooseImage', // 拍照或从手机相册中选图接口
            'closeWindow', // 关闭当前网页窗口接口
          ]
        })

        /**
         * 微信JS-SDK准备就绪后执行的回调。
         */
        wx.ready(() => {
          // 微信SDK准备就绪后执行的回调。
          resolve(wx)
        })

        /**
         * 微信JS-SDK初始化报错后执行的回调。
         */
        wx.error((err) => {
          console.log('微信初始化报错--->', err)
          reject(err)
        })
      })
    })
  }

  // 微信分享
  wxShare(shareObj) {
    this.wechat().then((wx) => {
      wx.ready(() => {
        wx.updateAppMessageShareData({
          title: shareObj.title, // 分享标题
          link: shareObj.link, // 分享链接
          desc: shareObj.desc, // 分享描述
          imgUrl: shareObj.imgUrl,
          success() {},
          cancel() {}
        })
        wx.updateTimelineShareData({
          title: shareObj.title, // 分享标题
          link: shareObj.link, // 分享链接
          desc: shareObj.desc, // 分享描述
          imgUrl: shareObj.imgUrl,
          success() {},
          cancel() {}
        })
      })
    })
  }

  // 获取地理位置接口
  getLocation() {
    return new Promise((resolve, reject) => {
      this.wechat().then((wx) => {
        toPromise(wx.getLocation, {
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        }).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }

  // 使用微信内置地图查看位置接口
  openLocation(data) {
    return new Promise((resolve, reject) => {
      this.wechat().then((wx) => {
        toPromise(wx.openLocation, {
          latitude: data.latitude, // 纬度，浮点数，范围为90 ~ -90
          longitude: data.longitude, // 经度，浮点数，范围为180 ~ -180。
          name: '', // 位置名
          address: '', // 地址详情说明
          scale: 1, // 地图缩放级别,整型值,范围从1~28。默认为最大
          infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
        }).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }

  // 拍照或从手机相册中选图接口
  chooseImage(data) {
    return new Promise((resolve, reject) => {
      this.wechat().then((wx) => {
        toPromise(wx.chooseImage, data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }

  // 压缩图片
  compressImage(data) {
    return new Promise((resolve, reject) => {
      this.wechat().then((wx) => {
        toPromise(wx.compressImage, data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }

  // 上传接口
  uploadFile(data) {
    return new Promise((resolve, reject) => {
      this.wechat().then((wx) => {
        toPromise(wx.uploadFile, data).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    })
  }

  // 关闭当前网页窗口接口
  closeWindow() {
    this.wechat().then((wx) => {
      wx.ready(() => {
        wx.closeWindow()
      })
    })
  }

  /**
   * @function 图片预览
   * @param list 图片列表
   * @param currentUrl 当前图
   */
  previewImage(list, currentUrl) {
    this.wechat().then((wx) => {
      wx.previewImage({
        current: currentUrl,
        urls: [...list]
      })
    })
  }
}
/**
 * 将微信的异步调用封装成 Promise
 * @param fn 微信的异步函数
 * @param config 函数配置对象
 * @returns Promise 对象
 */
function toPromise(fn, config = {}) {
  return new Promise((resolve, reject) => {
    fn({
      ...config,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
      complete(err) {
        reject(err)
      },
      cancel(err) {
        reject(err)
      }
    })
  })
}

export default new Wechat()
```

## 总结

本文介绍了如何使用微信SDK，以及一些常见的坑和解决方案。在使用微信SDK时，需要注意以下几点：

- 注册微信开放平台账号，并创建应用。
- 下载微信SDK，并将其集成到项目中。
- 配置微信SDK，并调用微信SDK提供的API来实现功能。
- 注意签名、支付、登录等参数的正确性，避免出现错误。

希望本文对你有所帮助！
