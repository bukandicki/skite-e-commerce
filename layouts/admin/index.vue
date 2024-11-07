<script lang="ts" setup></script>

<template>
  <div class="AdminLayout">
    <LazySidebar />
    <div class="AdminLayout__wrapper">
      <header class="AdminLayout__header"></header>

      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "./Admin.styles.scss" as *;
</style>
