<script lang="ts" setup>
const props = defineProps<{
  labels: Array<string>;
  data: Array<number>;
}>();

const chart_lists = computed(() => {
  const temp: Array<{
    label: string;
    height: number | undefined;
    value: number | undefined;
  }> = [];

  const max_value = Math.max(...props.data);

  props.labels.forEach((label, i) => {
    const current_value = props.data[i] || undefined;

    temp.push({
      label,
      height: current_value ? (current_value / max_value) * 100 : undefined,
      value: current_value || undefined,
    });
  });

  return temp;
});

const formatDate = (date: string) => {
  return new Date(date).toLocaleString("id-ID", {
    day: "2-digit",
    month: "2-digit",
  });
};
</script>

<template>
  <div class="Chart">
    <div class="Chart__wrapper" v-for="chart in chart_lists" :key="chart.label">
      <div
        class="Chart__bar"
        v-if="chart.value !== undefined"
        :style="{ height: `${chart.height}%` }"
      >
        <p class="Chart__label" v-if="chart.value !== undefined">
          {{ chart.value }} Items
        </p>
      </div>

      <p class="Chart__date">{{ formatDate(chart.label) }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use "./Chart.styles.scss" as *;
</style>
