<script lang="ts" setup>
import type { InputTypeHTMLAttribute } from "vue";

const props = defineProps<{
  label?: string;
  value?: any;
  error?: boolean;
  type?: InputTypeHTMLAttribute;
  name: string;
}>();

const emit = defineEmits<{ onChange: [value?: any] }>();

const handleChange = (e: Event) => {
  const el = e.target as HTMLInputElement;

  emit("onChange", el.value);
};

const handleInput = (e: Event) => {
  if (props.type === "number") {
    const el = e.target as HTMLInputElement;

    el.value = el.value.replace(/[^0-9]/g, "");
  }
};
</script>

<template>
  <div :class="['Input', { 'Input--error': error }]">
    <label class="Input__label" :for="name">{{ label }}</label>

    <input
      @change="handleChange"
      @input="handleInput"
      class="Input__field"
      :value="value"
      :type="type"
      :id="name"
      :name="name"
    />
  </div>
</template>

<style lang="scss">
@use "./Input.styles.scss" as *;
</style>
