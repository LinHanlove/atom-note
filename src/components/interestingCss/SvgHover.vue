<template>
  <div class="svg-hover-demo">
    <a class="container">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container2">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container3">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container4">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container4-5">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container5">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>

    <a class="container6">
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="outline" height="100%" width="100%" />
        <div class="text">hover</div>
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
$default: #ffcc00;
$pink: deeppink;

.svg-hover-demo {
  text-align: center;
  height: 340px;
  overflow-y: scroll;
  * {
    transition: all 1s;
    box-sizing: border-box;
  }
}

[class^="container"] {
  display: block;
  position: relative;
  color: $default;
  text-decoration: none;
  width: 250px;
  height: 40px;
  margin: 50px auto;
  overflow: hidden;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  .outline {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    stroke: $default;
    stroke-width: 2px;
    fill: transparent;
  }

  .text {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-family: LH;
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &:hover {
    .outline {
      stroke: $pink;
    }
    .text {
      color: $pink;
    }
  }
}

.container {
  .outline {
    stroke-dasharray: 25 25;
    stroke-dashoffset: -588;
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 50;
      stroke-dashoffset: -275;
    }
  }
}

.container2 {
  .outline {
    stroke-dasharray: 50 250;
    stroke-dashoffset: -575;
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 100;
      stroke-dashoffset: -75;
    }
  }
}

.container3 {
  .outline {
    stroke-dasharray: 70 230;
    stroke-dashoffset: 60;
  }
  &:hover {
    .outline {
      stroke-dashoffset: -350;
    }
  }
}

.container4 {
  .outline {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
    transition: all 0.5s;
  }
  &:hover {
    .outline {
      stroke-dashoffset: -250;
    }
  }
}

@keyframes woop {
  0% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
  }
  40%, 50% {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -250;
  }
  100% {
    stroke-dasharray: 600 0;
    stroke-dashoffset: 25;
  }
}

.container4-5 {
  .outline {
    stroke-dasharray: 50 600;
    stroke-dashoffset: -550;
    transition: all 1s;
  }
  &:hover {
    .outline {
      stroke-dasharray: 600 0;
      stroke-dashoffset: 25;
      animation: woop 1s linear;
    }
  }
}

.container5 {
  .outline {
    stroke-dasharray: 100 500;
    stroke-dashoffset: 225;
    transition: all 0.5s;
  }
  &:hover {
    .outline {
      stroke-dasharray: 600 0;
      stroke-dashoffset: 475;
    }
  }
}

.container6 {
  .outline {
    stroke-dasharray: 50 550;
    stroke-dashoffset: 200;
    transition: all 0.5s;
  }
  &:hover {
    .outline {
      stroke-dasharray: 50 250;
      stroke-dashoffset: 500;
    }
  }
}

@keyframes bounceRight {
  0% {
    transform: translateX(-100%);
  }
  30% {
    transform: translateX(-100%);
  }
  40%, 60%, 80%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30%);
  }
  70% {
    transform: translateX(-15%);
  }
  90% {
    transform: translateX(-7.5%);
  }
}
</style>
