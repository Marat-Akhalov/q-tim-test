<script setup lang="ts"></script>

<template>
  <section class="articles">
    <h2 class="articles__header">Articles</h2>
    <ArticlesList />
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
