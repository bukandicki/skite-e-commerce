<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

definePageMeta({
  name: "CustomerPage",
  layout: "customer",
});

const userStore = useUserStore();
const productStore = useProductStore();

const { result: slider_space } = useCalc("slider_space", 19);
const { result: slider_offset } = useCalc("slider_offset", 36);

await useAsyncData("products", () => productStore.FETCH_ALL());
</script>

<template>
  <main class="CustomerPage">
    <section class="Information">
      <h1 class="Information__name">Welcome, {{ userStore.user?.name }}</h1>

      <div class="Information__card">
        <div class="InformationCard">
          <div class="InformationCard__detail">
            <p>Your Balance</p>
            <h2>$ 200.00</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="PreviousOrder">
      <h2 class="SectionTitle">PREVIOUS ORDER</h2>

      <NuxtLink href="/checkout" class="PreviousOrder__card">
        <div class="Previous__detail">
          <NuxtImg
            class="Previous__img"
            src="/sample-1.png"
            width="67"
            height="73"
            sizes="200px"
          />

          <div class="Previous__information">
            <label>Bag of Laundry</label>
            <span>Total Order</span>
            <strong>$ 180.00</strong>
          </div>
        </div>

        <div class="Previous__icon">
          <LazyIconNote />
          <span>INVOICE</span>
        </div>
      </NuxtLink>
    </section>

    <section class="MostOrdered">
      <h2 class="SectionTitle">YOUR MOST ORDERED</h2>

      <ProjectCard
        img="/sample-2.png"
        title="Dry Cleaning"
        subtitle="12x | total of $ 4.000"
      />
    </section>

    <section class="LatestProduct">
      <h2 class="SectionTitle">OUR LATEST PRODUCT</h2>

      <Swiper
        :space-between="slider_space"
        slides-per-view="auto"
        :slides-offset-before="slider_offset"
        :slides-offset-after="slider_offset"
      >
        <SwiperSlide v-for="product in productStore.products" :key="product.id">
          <NuxtLink :href="`/products/${product.id}`">
            <LazyProjectCard
              :img="product.image || '/image-placeholder.png'"
              :label="product.category_id as string"
              :title="product.name"
              :subtitle="`$ ${product.price}/pc`"
            />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </section>
  </main>
</template>

<style lang="scss">
@use "./Customer.styles.scss" as *;
</style>
