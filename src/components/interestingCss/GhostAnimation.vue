<template>
  <div />
</template>

<style lang="scss" scoped>
  html,
  body {
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--c-bg);
    filter: blur(3px) contrast(10);
  }

  div {
    position: relative;
    width: 80px;
    height: 120px;
    background: radial-gradient(circle at 60px 40px,
        var(--c-bg),
        var(--c-bg) 7px,
        transparent 7px),
      radial-gradient(circle at 40px 40px, var(--c-bg), var(--c-bg) 7px, transparent 7px),
      radial-gradient(circle at 50px 50px, var(--theme), var(--theme));
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 40px 40px 60px 20px;
    transform: skewX(-10deg);
    animation: moveMain 1.2s infinite ease-out;
  }

  div::before,
  div::after {
    content: "";
    position: absolute;
    background: var(--theme);
    border-radius: 50%;
  }

  div::before {
    width: 20px;
    height: 20px;
    top: 50px;
    left: -10px;
    box-shadow: 0 0 0 1px var(--theme);
    animation: move 1.2s infinite ease-in;
  }

  div::after {
    width: 30px;
    height: 25px;
    top: 95px;
    left: -10px;
    box-shadow: 0 0 0 1px var(--theme);
    animation: move2 1.2s infinite ease-in;
  }

  @keyframes move {

    80%,
    100% {
      box-shadow: -60px 0 0 0.5px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes move2 {

    80%,
    100% {
      box-shadow: -100px 0 0 0.5px rgba(255, 255, 255, 0.2);
    }
  }

  @keyframes moveMain {
    42% {
      transform: skewX(-10deg) translate(40px, 0);
    }
  }
</style>
