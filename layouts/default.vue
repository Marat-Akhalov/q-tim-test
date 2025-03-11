<script setup lang="ts"></script>

<template>
  <div class="page-wrap">
    <div class="container">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-wrap {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>
