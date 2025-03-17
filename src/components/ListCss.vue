<script setup lang="ts">
defineProps<{ list: { title: string, link: string }[] }>()
</script>

<template>
  <div class="max-w-300 mx-auto css-list-container ">
    <div v-for="item, cidx in list" :key="item.title" class="relative mt-4 css-list-item flex items-center text-xl">
      <span class="i-game-icons:inspiration text-md" />
      <a
        slide-enter
        :style="{ '--enter-stage': cidx + 1 }"
        :href="`/cssInspiration/${item.link}`"
        :title="item.title"
        class="pl-1"
      >
        {{ item.title }}
      </a>
    </div>
    <div class="prose pb5 mx-auto mt10 text-center">
      <div block mt-5 style="font-family: LH">
        So amazing
      </div>
      <hr>
      <SponsorButtons />
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="item of list" :key="item.title">
          <a :href="`/cssInspiration/${item.link}`">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.css-list-container>.css-list-item {
  font-family: SJ;
}
</style>
