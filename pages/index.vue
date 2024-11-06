<script lang="ts" setup>
import "./Customer.styles.scss";

definePageMeta({
  name: "CustomerPage",
  layout: "customer",
});
</script>

<template>
  <main>
    <section class="Information">
      <h1 class="Information__name">Welcome, Jhon</h1>

      <div class="Information__card">
        <div class="InformationCard">
          <div class="InformationCard__detail">
            <p></p>
            <h2></h2>
          </div>
        </div>
      </div>
    </section>

    <section class="PreviousOrder">
      <h2>PREVIOUS ORDER</h2>

      <div class="PreviousOrder__card">
        <NuxtImg
          class="PreviousOrderCard__img"
          src="/sample-1.png"
          width="67"
          height="73"
          sizes="200px"
        />
        <div class="PreviousOrderCard__detail">
          <strong></strong>
          <span></span>
          <strong></strong>
        </div>

        <div>
          <i>icon later</i>
          <span>INVOICE</span>
        </div>
      </div>
    </section>

    <section class="MostOrdered">
      <h2>YOUR MOST ORDERED</h2>

      <div class="MostOrdered__card">
        <strong>Dry Cleaning</strong>
        <p>12x | total of $ 4.000</p>
      </div>
    </section>

    <section class="LatestProduct">
      <h2>OUR LATEST PRODUCT</h2>

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
