<script lang="ts" setup>
defineProps<{
  label?: string;
  value?: any;
  name: string;
}>();

const emit = defineEmits<{ onChange: [value?: any] }>();

const handleChange = (e: Event) => {
  const el = e.target as HTMLInputElement;

  emit("onChange", el.value);
};
</script>

<template>
  <div class="Textarea">
    <label class="Textarea__label" :for="name">{{ label }}</label>

    <textarea
      @change="handleChange"
      class="Textarea__field"
      :value="value"
      :id="name"
      :name="name"
    />
  </div>
</template>

<style lang="scss">
@use "./Textarea.styles.scss" as *;
</style>
