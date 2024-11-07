<script lang="ts" setup generic="T">
const props = defineProps<{
  placeholder?: string;
  value: T;
  options: Array<{ label: string; value: T }>;
}>();

const emit = defineEmits<{ change: [value: T] }>();

const show = ref<boolean>(false);
</script>

<template>
  <div :class="['Select', { 'Select--show': show }]">
    <button @click="show = !show" class="Select__trigger">
      <span>
        {{ placeholder ? placeholder : "Select option" }}
      </span>

      <LazyIconChevronDown />
    </button>

    <ul class="Select__options">
      <li
        v-for="option in options"
        class="Select__item"
        :key="(option.value as string)"
      >
        <button
          @click="() => emit('change', option.value)"
          :data-selected="value === option.value"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use "./Select.styles.scss" as *;
</style>
