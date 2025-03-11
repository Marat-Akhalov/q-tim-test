<script setup lang="ts">
import type { Article } from '~/types/Article';

defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <ul class="articles__list list-reset">
    <ArticlesItem
      v-for="article in articles"
      :key="article.id"
      :preview="article.preview"
      :image="article.image"
    />
  </ul>
</template>

<style scoped lang="scss"></style>
