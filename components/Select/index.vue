<script lang="ts" setup generic="T">
const props = defineProps<{
  placeholder?: string;
  value: T;
  options: Array<{ label: string; value: T }>;
}>();
</script>

<template>
  <div class="Select">
    <button class="Select__trigger">
      {{ placeholder ? placeholder : "Select option" }}
    </button>

    <ul class="Select__options">
      <li
        v-for="option in options"
        class="Select__item"
        :key="(option.value as string)"
      >
        <button>{{ option.label }}</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./Select.styles.scss" as *;
</style>
