<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="AdminLayout">
    <LazySidebar />
    <div class="AdminLayout__wrapper">
      <header class="AdminLayout__header">
        <h1 v-if="route.name === 'AdminPage'">Home</h1>
      </header>

      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "./AdminLayout.styles.scss" as *;
</style>
