<script lang="ts" setup>
definePageMeta({
  name: "ProductDetailPage",
  layout: "customer",
});

const productStore = useProductStore();

const route = useRoute();

const { data, status, error, refresh } = await useAsyncData(
  "product_detail",
  () => productStore.FETCH_DETAIL(parseInt(route.params.id as string))
);

console.log(data.value, status, error);
</script>

<template>
  <main class="ProductDetail">
    <LazyTrouble
      class="ProductDetail__error-wrapper"
      v-if="error"
      type="error"
      :retry="refresh"
    />

    <LazyTrouble
      v-else-if="!data"
      class="ProductDetail__error-wrapper"
      type="empty"
    />

    <template v-else>
      <section class="ProductDetail__thumbnail">
        <NuxtImg
          :src="data?.image || '/image-placeholder.png'"
          width="375"
          height="455"
          sizes="720px"
        />
      </section>

      <section class="ProductDetail__information">
        <label class="Product__type">{{ data?.category_id }}</label>

        <h1 class="Product__name">{{ data?.name }}</h1>

        <span class="Product__price">$ {{ data?.price }}/pc</span>

        <p class="Product__description">{{ data?.description }}</p>

        <LazyCounter class="Product__counter" />
      </section>
    </template>
  </main>
</template>

<style lang="scss">
@use "./ProductDetail.styles.scss" as *;
</style>
