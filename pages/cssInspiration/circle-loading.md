---
layout: page
title: Box-shadow实现圆环进度条动画
date: 2025-03-14:16:30
lang: zh
---

<CircleShadowLoading/>

Box-shadow实现圆环进度条动画。这个真的算是奇技淫巧。

## 关键点

- 圆环进度条的移动本质上是阴影顺序延时移动的结果。

### HTML

```html
<div class="container">
  <div class="shadow">Hover Me</div>
</div>
```

### SCSS

```scss
$color: #e91e63;

body {
    background: #000;
}

.container {
    position: relative;
    overflow: hidden;
    width: 124px;
    height: 124px;
    overflow: hidden;
    margin: 100px auto;
    border-radius: 50%;
}

.shadow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 60px -60px 0 2px $color, -60px -60px 0 2px $color,
        -60px 60px 0 2px $color, 60px 60px 0 2px $color;
    text-align: center;
    
    &:hover {
        animation: border .5s ease forwards;
    }
}

@keyframes border{
  0% {
    box-shadow: 60px -60px 0 2px $color, -60px -60px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px transparent;
  }
  25% {
    box-shadow: 0 -125px 0 2px $color, -60px -60px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  50% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, -60px 60px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  75% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, 0px 125px 0 2px $color, 60px 60px 0 2px $color, 0 0 0 2px #fff;
  }
  100% {
    box-shadow: 0 -125px 0 2px $color, -125px 0px 0 2px $color, 0px 125px 0 2px $color, 120px 40px 0 2px $color, 0 0 0 2px #fff;
  } 
}
```
