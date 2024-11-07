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
    <section>
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

    <section>
      <LazyCard title="Top selling product">
        <template #option>
          <LazySelect
            @change="selected_selling_range = $event"
            :options="PERIOD_RANGES"
            :value="selected_selling_range"
          />
        </template>
      </LazyCard>
    </section>
  </main>
</template>

<style lang="scss">
@use "./Admin.styles.scss" as *;
</style>
