<script lang="ts" setup>
import { PERIOD_RANGES } from "~/lib/constants";

definePageMeta({
  name: "AdminSalesPage",
  layout: "admin",
});

const selected_sold_range = ref<string | undefined>(undefined);

const productStore = useProductStore();

await useAsyncData("reports", () => productStore.FETCH_REPORT());

const data = computed(() => {
  return {
    labels: productStore.reports.map((report) => report.created_at),
    values: productStore.reports.map((report) => report.total),
  };
});
</script>

<template>
  <main class="SalesPage">
    <LazyCard title="Product Sales">
      <template #option>
        <LazySelect
          @change="selected_sold_range = $event"
          :options="PERIOD_RANGES"
          :value="selected_sold_range"
        />
      </template>

      <LazyChart :labels="data.labels" :data="data.values" />
    </LazyCard>

    <LazyCard title="Profit">
      <template #option>
        <LazySelect
          @change="selected_sold_range = $event"
          :options="PERIOD_RANGES"
          :value="selected_sold_range"
        />
      </template>

      <LazyChart :labels="data.labels" :data="data.values" />
    </LazyCard>
  </main>
</template>

<style lang="scss">
@use "./Sales.styles.scss" as *;
</style>
