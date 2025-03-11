<script setup lang="ts">
import type { Article } from '~/types/Article';

const articles = ref<Article[]>([]);

const { data, status } = useFetch<Article[]>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`
);

if (data.value) {
  articles.value = data.value;
}

const page = ref(1);
const visibleItems = computed(() => (data.value ? data.value.slice(0, 8) : []));
</script>

<template>
  <section class="articles">
    <h2 class="articles__header">Articles</h2>
    <ArticlesSkeleton v-if="status === 'pending'" />
    <ArticlesList
      v-else
      :articles="visibleItems"
    />
    <ArticlesPagination
      :total="data?.length || 0"
      :items-per-page="8"
      v-model="page"
    />
  </section>
</template>

<style scoped lang="scss">
.articles {
  padding-top: 114px;

  &__header {
    margin-bottom: 40px;
    font-size: 77px;
    font-weight: 400;
    color: var(--clr-text);
  }
}
</style>
