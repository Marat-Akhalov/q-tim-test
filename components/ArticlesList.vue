<script setup lang="ts">
import type { Article } from '~/types/Article';

defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <ul class="articles__list list-reset">
    <ArticlesItem />
  </ul>
</template>

<style scoped lang="scss"></style>
