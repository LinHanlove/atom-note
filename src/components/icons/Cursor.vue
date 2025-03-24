<script setup lang='ts'>
import gsap from 'gsap'

const styles = [
  'color: #FF6B00',
  'font-size: 20px',
  'font-family: sans-serif',
  'padding: 10px 20px',
].join(';')

onMounted(() => {
  console.log('%cMade by https://linhan.atomnotion.com ', styles)
  const _window = window as any
  const bigBall = document.querySelector('.cursor__ball--big') as HTMLElement
  const smallBall = document.querySelector('.cursor__ball--small') as HTMLElement

  // 初始化光标位置
  const initCursor = (element: HTMLElement, x: number, y: number) => {
    element.style.transform = `translate(${x}px, ${y}px)`
  }

  initCursor(bigBall, _window.clientX, _window.clientY)
  initCursor(smallBall, _window.clientX, _window.clientY)

  // 鼠标移动事件处理函数
  const onMouseMove = (e: MouseEvent) => {
    gsap.to(bigBall, { duration: 0.6, x: e.clientX - 30, y: e.clientY - 30, opacity: 1 })
    gsap.to(smallBall, { duration: 0.1, x: e.clientX - 7, y: e.clientY - 7, opacity: 1 })
  }

  // 添加事件监听器
  window.addEventListener('mousemove', onMouseMove)

  // 组件卸载时移除事件监听器
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })
})
</script>

<template>
  <div class="cursor">
    <div class="cursor__ball cursor__ball--big ">
      <svg height="60" width="60">
        <circle cx="30" cy="30" r="20" stroke-width="0" />
      </svg>
    </div>
    <div class="cursor__ball cursor__ball--small">
      <svg height="14" width="14">
        <circle cx="7" cy="7" r="5" stroke-width="0" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media  screen and (max-width: 480px) {
  body {
    -webkit-overflow-scrolling: auto;
    scroll-snap-stop: always;
    cursor: auto;
  }

  .cursor {
    display: none;
  }
}

html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.cursor {
  pointer-events: none;
}

.cursor__ball--big {
  opacity: 0;
}

.cursor__ball--small {
  opacity: 0;
}

.cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 99999;
}

.cursor__ball circle {
  fill: white;
}
</style>
