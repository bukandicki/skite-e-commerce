<script lang="ts" setup>
import { FAKE_SOLDS, PERIOD_RANGES } from "~/lib/constants";

definePageMeta({
  name: "AdminPage",
  layout: "admin",
});

const selected_sold_range = ref<string | undefined>(undefined);
const selected_selling_range = ref<string | undefined>(undefined);
</script>

<template>
  <main class="AdminPage">
    <section class="AdminPage__sold">
      <LazyCard title="Product Sold">
        <template #option>
          <LazySelect
            @change="selected_sold_range = $event"
            :options="PERIOD_RANGES"
            :value="selected_sold_range"
          />
        </template>

        <LazyChart
          :labels="FAKE_SOLDS.map((d) => d.created_at)"
          :data="FAKE_SOLDS.map((d) => d.total)"
        />
      </LazyCard>
    </section>

    <section class="AdminPage__selling">
      <LazyCard title="Top selling product">
        <template #option>
          <LazySelect
            @change="selected_selling_range = $event"
            :options="PERIOD_RANGES"
            :value="selected_selling_range"
          />
        </template>

        <table class="Selling__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="i in 3" :key="i">
              <td>
                <span>Item A</span>
              </td>
              <td>
                <span>$ 120.00</span>
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
