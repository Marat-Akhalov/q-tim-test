<script setup lang="ts">
defineProps<{
  id: string;
  image: string;
  preview: string;
}>();
</script>

<template>
  <li class="articles__item">
    <!-- в img временно подгружается моковое статичное изображения тк эндпоинт не работает -->
    <img
      src="@/assets/img/article-img.png"
      alt="Article image"
      class="articles__img"
      width="280"
      height="280"
    />
    <div class="article__content">
      <p class="articles__descr">{{ preview }}</p>
      <NuxtLink
        class="articles__link"
        :to="{ name: 'articles-id', params: { id: id } }"
        aria-label="Open article"
      >
        Read More
      </NuxtLink>
    </div>
  </li>
</template>

<style scoped lang="scss">
.articles {
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateY(-20px);

      .articles__link {
        opacity: 1;
      }
    }
  }

  &__descr {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2; /* 24px */
    color: var(--clr-text);
  }

  &__link {
    margin-top: auto;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--clr-prime);
    opacity: 0;
    text-decoration: none;
  }
}
</style>
