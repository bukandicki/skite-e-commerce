<script lang="ts" setup>
import Note from "~/assets/icons/Note.vue";
import "./Customer.styles.scss";

definePageMeta({
  name: "CustomerPage",
  layout: "customer",
});
</script>

<template>
  <main class="CustomerPage">
    <section class="Information">
      <h1 class="Information__name">Welcome, Jhon</h1>

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

      <div class="PreviousOrder__card">
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
          <Note />
          <span>INVOICE</span>
        </div>
      </div>
    </section>

    <section class="MostOrdered">
      <h2 class="SectionTitle">YOUR MOST ORDERED</h2>

      <div class="MostOrdered__card">
        <strong>Dry Cleaning</strong>
        <p>12x | total of $ 4.000</p>
      </div>
    </section>

    <section class="LatestProduct">
      <h2 class="SectionTitle">OUR LATEST PRODUCT</h2>

      <div class="LatestProduct__slider">
        <div class="LatestProduct__card">
          <span>Dry Cleaning</span>
          <strong>Jeans</strong>
          <p>$ 10.00/pc</p>
        </div>

        <div class="LatestProduct__card">
          <span>Dry Cleaning</span>
          <strong>Jeans</strong>
          <p>$ 10.00/pc</p>
        </div>
      </div>
    </section>
  </main>
</template>
