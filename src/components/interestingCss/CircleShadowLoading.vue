<template>
  <div class="container">
    <div class="shadow">
      Hover Me
    </div>
  </div>
</template>

<style scoped>
:root {
  --color: #e91e63;
}

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
  box-shadow: 60px -60px 0 2px #e91e63, -60px -60px 0 2px #e91e63,
    -60px 60px 0 2px #e91e63, 60px 60px 0 2px #e91e63;
  text-align: center;

  &:hover {
    animation: border .5s ease forwards;
  }
}

@keyframes border {
  0% {
    box-shadow: 60px -60px 0 2px #e91e63, -60px -60px 0 2px #e91e63, -60px 60px 0 2px #e91e63, 60px 60px 0 2px #e91e63, 0 0 0 2px transparent;
  }

  25% {
    box-shadow: 0 -125px 0 2px #e91e63, -60px -60px 0 2px #e91e63, -60px 60px 0 2px #e91e63, 60px 60px 0 2px #e91e63, 0 0 0 2px #fff;
  }

  50% {
    box-shadow: 0 -125px 0 2px #e91e63, -125px 0px 0 2px #e91e63, -60px 60px 0 2px #e91e63, 60px 60px 0 2px #e91e63, 0 0 0 2px #fff;
  }

  75% {
    box-shadow: 0 -125px 0 2px #e91e63, -125px 0px 0 2px #e91e63, 0px 125px 0 2px #e91e63, 60px 60px 0 2px #e91e63, 0 0 0 2px #fff;
  }

  100% {
    box-shadow: 0 -125px 0 2px #e91e63, -125px 0px 0 2px #e91e63, 0px 125px 0 2px #e91e63, 120px 40px 0 2px #e91e63, 0 0 0 2px #fff;
  }
}
</style>
