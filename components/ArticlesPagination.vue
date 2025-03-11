<script setup lang="ts">
const props = defineProps<{
  total: number;
  itemsPerPage: number;
}>();

const page = defineModel();

const btnsCount = computed(() => {
  const count = props.total / props.itemsPerPage;
  return Math.ceil(count);
});

const changePage = (idx: number) => {
  page.value = idx;
};
</script>

<template>
  <div class="pagination">
    <ul class="pagination__list list-reset">
      <li
        v-for="(_, idx) in btnsCount"
        class="pagination__item"
      >
        <button
          class="pagination__btn btn-reset"
          :class="{ 'pagination__btn--active': page === idx + 1 }"
          @click="changePage(idx + 1)"
        >
          {{ idx + 1 }}
        </button>
      </li>
    </ul>
    <button class="pagination__next btn-reset">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.5 7.5L14.5 12.5L9.5 17.5"
          stroke="#494949"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;

  &__list {
    display: flex;
    gap: 8px;
  }

  &__btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    border-radius: 12px;
    background-color: #f3f3f3;
    cursor: pointer;

    &--active {
      color: #fff;
      background-color: var(--clr-text);
    }
  }

  &__next {
    display: inline-flex;
    padding: 11px;
    border-radius: 12px;
    border: 1px solid #e8e8e8;
    cursor: pointer;
  }
}
</style>
