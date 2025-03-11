<script setup lang="ts">
defineProps<{
  image: string;
  preview: string;
}>();
</script>

<template>
  <li class="articles__item">
    <img
      :src="image"
      alt="Article image"
      class="articles__img"
    />
    <p class="articles__descr">{{ preview }}</p>
    <NuxtLink class="articles__link">Read More</NuxtLink>
  </li>
</template>

<style scoped lang="scss"></style>
