<script lang="ts" setup>
defineProps<{ title?: string }>();
</script>

<template>
  <div class="Card">
    <div class="Card__header">
      <h2 class="Card__title">{{ title }}</h2>

      <slot name="option" />
    </div>

    <slot />
  </div>
</template>

<style lang="scss">
@use "./Card.styles.scss" as *;
</style>
