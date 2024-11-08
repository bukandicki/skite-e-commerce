<script lang="ts" setup>
defineProps<{ type: "error" | "empty"; retry?: () => void }>();
</script>

<template>
  <div class="Trouble">
    <h1>
      {{ type === "error" ? "Oops something went wrong!" : "No data!" }}
    </h1>

    <button v-if="type === 'error'" @click="retry">Retry</button>
  </div>
</template>

<style lang="scss">
@use "./Trouble.styles.scss" as *;
</style>
