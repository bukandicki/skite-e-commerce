<script lang="ts" setup>
import { PERIOD_RANGES } from "~/lib/constants";

definePageMeta({
  name: "AdminPage",
  layout: "admin",
});

const selected_sold_range = ref<string | undefined>(undefined);
const selected_selling_range = ref<string | undefined>(undefined);

const productStore = useProductStore();

const {
  status: products_status,
  error: product_error,
  refresh: product_refresh,
} = await useAsyncData("products", () => productStore.FETCH_ALL());
const {
  status: report_status,
  error: report_error,
  refresh: report_refresh,
} = await useAsyncData("reports", () => productStore.FETCH_REPORT());

const data = computed(() => {
  return {
    labels: productStore.reports.map((report) => report.created_at),
    values: productStore.reports.map((report) => report.total),
  };
});
</script>

<template>
  <main class="AdminPage">
    <section class="AdminPage__sold">
      <LazyCard title="Product Sold" :loading="report_status === 'pending'">
        <template #option>
          <LazySelect
            @change="selected_sold_range = $event"
            :options="PERIOD_RANGES"
            :value="selected_sold_range"
          />
        </template>

        <LazyTrouble v-if="report_error" type="error" :retry="report_refresh" />

        <LazyTrouble v-if="!productStore.reports.length" type="empty" />

        <LazyChart v-else :labels="data.labels" :data="data.values" />
      </LazyCard>
    </section>

    <section class="AdminPage__selling">
      <LazyCard
        title="Top selling product"
        :loading="products_status === 'pending'"
      >
        <template #option>
          <LazySelect
            @change="selected_selling_range = $event"
            :options="PERIOD_RANGES"
            :value="selected_selling_range"
          />
        </template>

        <LazyTrouble
          v-if="product_error"
          type="error"
          :retry="product_refresh"
        />

        <LazyTrouble v-else-if="!productStore.products.length" type="empty" />

        <table v-else class="Selling__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in productStore.products" :key="product.id">
              <td>
                <span>{{ product.name }}</span>
              </td>
              <td>
                <span>$ {{ product.price }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </LazyCard>
    </section>
  </main>
</template>

<style lang="scss">
@use "./Admin.styles.scss" as *;
</style>
