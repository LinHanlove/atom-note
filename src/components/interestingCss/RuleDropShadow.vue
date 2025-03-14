<template>
  <div class="container h-[100px] bg-[var(--theme)]">
    <div class="btn-wrap w-full h-full m-auto flex items-center justify-center">
      <div class="btn">
        领取红包
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-wrap {
  filter: drop-shadow(2px 4px 3px var(--c-bg));
}

.btn{
  content: "";
  width: 200px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  background: linear-gradient(var(--theme), var(--theme), var(--theme));
  color: var(--c-bg);
  font-size: 24px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0 50%);
  // box-shadow: inset 0px 0px 1px 1px #fff;
}
</style>
