<template>
  <div class="ball-loading">
    <div class="g-container">
      <div class="g-first" />
      <div class="g-ball" />
      <div class="g-ball" />
      <div class="g-ball" />
      <div class="g-ball" />
      <div class="g-ball" />
      <div class="g-ball" />
      <div class="g-ball" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$count: 7;
.ball-loading {
  width: 100%;
  height: 200px;
  display: flex;
  filter: blur(2px) contrast(6);
  background: var(-c-bg);
  display: flex;
}

.g-container {
  margin: auto;
  position: relative;
  width: 30px;
  height: 30px;
}

.g-ball,
.g-first {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--theme);
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
  // animation: move 3s infinite linear;
}

@for $i from 0 through $count {
  .g-ball:nth-child(#{$i}) {
    animation: move 3.5s infinite #{$i * 0.2 + 0.1}s linear;
  }
}

.g-first {
  animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  50% {
    opacity: 1;
    transform: translate(1vw, 0);
  }

  75%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}

@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }

  35% {
    opacity: 1;
    transform: scale(1);
  }

  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }

  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
</style>
