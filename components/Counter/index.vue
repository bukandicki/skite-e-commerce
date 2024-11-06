<script lang="ts" setup>
const counter = ref<number>(0);

const handleOnchange = (e: Event) => {
  const input_el = e.target as HTMLInputElement;

  counter.value = input_el.value ? parseInt(input_el.value) : 0;
};

const handleOnInput = (e: Event) => {
  const input_el = e.target as HTMLInputElement;

  input_el.value = input_el.value.replace(/[^0-9]/g, "");
};
</script>

<template>
  <div class="Counter">
    <button
      :disabled="counter < 1"
      @click="counter--"
      class="Counter__btn Counter__btn--decrease"
    >
      <LazyIconMinusCircle />
    </button>

    <input
      class="Counter__input"
      type="number"
      pattern="[0-9]*"
      :value="counter"
      @change="handleOnchange"
      @input="handleOnInput"
      placeholder="0"
    />

    <button @click="counter++" class="Counter__btn Counter__btn--increase">
      <LazyIconPlusCircle />
    </button>
  </div>
</template>

<style lang="scss">
@use "./Counter.styles.scss" as *;
</style>
