<script setup lang="ts">
const { count = 8 } = defineProps<{
  count?: number;
}>();
</script>

<template>
  <div class="skeleton">
    <ul class="skeleton__list list-reset">
      <li
        v-for="(_, idx) in count"
        :key="idx"
        class="skeleton__item"
      >
        <div class="skeleton__img"></div>
        <div class="skeleton__descr"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.skeleton {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 60px 32px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    min-height: 440px;
    border: 1px solid #ececec;
  }

  &__img {
    background-color: #e4dede;
    min-height: 290px;

    animation: fade 2s infinite;
  }

  &__descr {
    border-radius: 20px;
    margin: 20px;
    background-color: #e9e2e2;
    flex: 1;
    animation: fade 2s infinite;
  }
}

@keyframes fade {
  0% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
  }
}
</style>
