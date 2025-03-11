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
      :id="article.id"
      :preview="article.preview"
      :image="article.image"
    />
  </ul>
</template>

<style scoped lang="scss">
.articles {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 60px 32px;
  }
}
</style>
