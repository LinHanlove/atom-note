---
layout: page
title: 使用drop-shadow配合clip-path生成规则阴影
date: 2025-03-14:19:30
lang: zh
---

<RuleDropShadow/>

使用 drop-shadow 配合 clip-path 生成规则阴影。

### 关键点

使用 clip-path 可以很好的使用 SVG 的一些属性，绘制各种图形。绘制出来的图形如果希望带阴影，`box-shadow` 肯定是不行的，这个时候，`drop-shadow()` 则非常好用。

### HTML

```html
<div class="btn-wrap">
    <div class="btn">领取红包</div>
</div>
```

### SCSS

```scss
.btn-wrap {
    margin: auto;
    filter: drop-shadow(2px 4px 3px rgba(50, 50, 0, 0.5));
}


.btn{
    content: "";
    width: 200px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: linear-gradient(#f5e5bf, #fbe8c8, #f5e5bf);
    color: #be9451;
    font-size: 24px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
    // box-shadow: inset 0px 0px 1px 1px #fff;
}
```