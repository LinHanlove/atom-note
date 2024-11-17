<script setup lang='ts'>
/* 旋转分散 */
window.onload = function () {
  const album = document.getElementById('album')
  const aImg = document.querySelectorAll('img')
  for (let i = 0; i < aImg.length; i++) {
    // 图片旋转分散 36°
    aImg[i].style.transform = `rotateY(${i * 360 / aImg.length}deg) translateZ(300px)`
    aImg[i].style.transition = `transform 1s ${(aImg.length - i) * 0.1}s`
  }
  let lastX = 0 // 前一次的坐标X
  let lastY = 0
  let nowX = 0 // 当前的坐标X
  let nowY = 0
  let desX = 0
  let desY = 0
  let rotX = -30
  let rotY = 0
  let timer // 时间间隔
  document.onmousedown = function (ev) {
    const e = ev || event
    lastX = e.clientX
    lastY = e.clientY
    this.onmousemove = function (ev) {
      const e = ev || event
      nowX = e.clientX
      nowY = e.clientY
      desX = nowX - lastX
      desY = nowY - lastY
      // 更新album的旋转角度，拖拽越快-> des变化大 -> roY变化大 -> 旋转快
      rotX -= desY * 0.1
      rotY += desX * 0.2
      album.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
      lastX = nowX
      lastY = nowY
    }
    document.onmouseup = function () {
      this.onmousemove = this.onmouseup = null
      timer = setInterval(() => {
        desX *= 0.95
        desY *= 0.95
        rotX -= desY * 0.1
        rotY += desX * 0.2
        album.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`

        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(timer)
        }
      }, 13)
    }
    // 阻止默认行为
    return false
  }
}
</script>

<template>
  <div id="album">
    <img src="../../public/images/xulu/01.jpg" alt="坚果">
    <img src="../../public/images/xulu/02.jpg" alt="">
    <img src="../../public/images/xulu/03.jpg" alt="">
    <img src="../../public/images/xulu/04.jpg" alt="">
    <img src="../../public/images/xulu/05.jpg" alt="">
    <img src="../../public/images/xulu/04.jpg" alt="">
    <img src="../../public/images/xulu/04.jpg" alt="">
    <img src="../../public/images/xulu/02.jpg" alt="">
    <img src="../../public/images/xulu/03.jpg" alt="">
    <img src="../../public/images/xulu/01.jpg" alt="">
    <p />
  </div>
</template>

<style>
#album {
  width: 133px;
  height: 200px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}
#album img {
  position: absolute;
  top: 0;
  left: 0;
  width: 133px;
  height: 200px;
  /* 反射倒影 距离下面5px  */
  -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        40%, rgba(0, 0, 0, 0.5));
}
#album p {
  position: absolute;
  left: calc(133px / 2 - 800px / 2);
  top: calc(200px / 2 - 800px / 2);
  width: 800px;
  height: 800px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(100px) rotateX(90deg);
  border-radius: 50%;
}
</style>
