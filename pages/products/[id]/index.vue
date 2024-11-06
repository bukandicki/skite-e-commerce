<script lang="ts" setup>
definePageMeta({
  name: "ProductDetailPage",
  layout: "customer",
});
</script>

<template>
  <main class="ProductDetail">
    <section class="ProductDetail__thumbnail">
      <NuxtImg src="/sample-2.png" width="375" height="455" sizes="720px" />
    </section>

    <section class="ProductDetail__information">
      <label class="Product__type">Dry Clean</label>

      <h1 class="Product__name">T-Shirt</h1>

      <span class="Product__price">$ 6.00/pc</span>

      <p class="Product__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quia
        accusantium voluptatum neque assumenda voluptas veniam hic eveniet
        laborum molestias necessitatibus, ratione unde corporis minima sunt ab
        beatae. Perferendis, beatae.
      </p>

      <LazyCounter class="Product__counter" />
    </section>
  </main>
</template>

<style lang="scss">
@use "./ProductDetail.styles.scss" as *;
</style>
