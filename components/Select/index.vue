<script lang="ts" setup generic="T">
const props = defineProps<{
  placeholder?: string;
  value: T | undefined;
  options: Array<{ label: string; value: T }>;
}>();

const emit = defineEmits<{ change: [value: T] }>();

const show = ref<boolean>(false);

const getValueLabel = computed(() => {
  const selected_option = props.options.find((op) => op.value === props.value);

  if (selected_option) return selected_option.label;
  else return props.placeholder;
});
</script>

<template>
  <div :class="['Select', { 'Select--show': show }]">
    <button @click="show = !show" class="Select__trigger">
      <span v-if="value">
        {{ getValueLabel }}
      </span>

      <span v-else>
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
