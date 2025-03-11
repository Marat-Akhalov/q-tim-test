<script setup lang="ts">
import type { Article } from '~/types/Article';

const { id } = useRoute().params;

const { data, error } = await useFetch<Article>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
);

console.log(data.value);
</script>

<template>
  <section class="article">
    <h2 class="article__header">{{ data?.title }}</h2>
    <!-- статичное изображение по причине не работающего эндпоинта -->
    <img
      src="@/assets/img/single-article.png"
      alt="Article image"
      class="article__img"
      width="1200"
      height="700"
    />
    <p class="article__descr">
      {{ data?.description }}
    </p>
  </section>
</template>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  padding-bottom: 80px;

  &__header {
    margin-bottom: 73px;
    font-size: 84px;
    font-weight: 400;
    line-height: 1;
    color: var(--clr-text);
  }

  &__img {
    margin-bottom: 80px;
    object-fit: cover;
  }

  &__descr {
    max-width: 695px;
    font-size: 36px;
    font-weight: 400;
    line-height: 124%;
    text-wrap: balance;
    color: var(--clr-text);
  }
}
</style>
