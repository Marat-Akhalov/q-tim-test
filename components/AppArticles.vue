<script setup lang="ts">
import type { Article } from '~/types/Article';

const articles = ref<Article[]>([]);

const { data, status, error } = useFetch<Article[]>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/`
);

if (error.value) {
  showError({
    cause: error.value.cause,
    message: error.value.message,
  });
}

if (data.value) {
  articles.value = data.value;
}

const page = ref<number>(1);
const isLoading = ref<boolean>(false);
const itemsPerPage = 8;
const visibleItems = computed(() => {
  if (!data.value) return [];

  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return data.value.slice(start, end);
});

watch(page, () => {
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 200);
});
</script>

<template>
  <section class="articles">
    <h2 class="articles__header">Articles</h2>
    <ArticlesSkeleton v-if="status === 'pending' || isLoading" />
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
  padding-bottom: 140px;

  &__header {
    margin-bottom: 40px;
    font-size: 77px;
    font-weight: 400;
    color: var(--clr-text);
  }
}
</style>
