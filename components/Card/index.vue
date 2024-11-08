<script lang="ts" setup>
defineProps<{ title?: string; loading?: boolean }>();
</script>

<template>
  <div :class="['Card', { 'Card--loading': loading }]">
    <div class="Card__header">
      <h2 class="Card__title">{{ title }}</h2>

      <slot name="option" />
    </div>

    <h2 class="Card__loading" v-if="loading">Loading..</h2>
    <slot v-else />
  </div>
</template>

<style lang="scss">
@use "./Card.styles.scss" as *;
</style>
