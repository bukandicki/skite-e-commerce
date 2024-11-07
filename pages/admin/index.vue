<script lang="ts" setup>
import { FAKE_SOLDS } from "~/lib/constants";

definePageMeta({
  name: "AdminPage",
  layout: "admin",
});

const selected_sold_range = ref<number | undefined>(undefined);
</script>

<template>
  <main class="AdminPage">
    <section>
      <LazyCard title="Product Sold">
        <template #option>
          <LazySelect
            @change="selected_sold_range = $event"
            :options="[
              { label: 'This Day', value: 1 },
              { label: 'This Week', value: 2 },
              { label: 'This Month', value: 3 },
              { label: 'This Year', value: 4 },
            ]"
            :value="selected_sold_range"
          />
        </template>

        <LazyChart
          :labels="FAKE_SOLDS.map((d) => d.created_at)"
          :data="FAKE_SOLDS.map((d) => d.total)"
        />
      </LazyCard>
    </section>

    <section></section>
  </main>
</template>

<style lang="scss">
@use "./Admin.styles.scss" as *;
</style>
