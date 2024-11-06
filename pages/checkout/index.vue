<script lang="ts" setup>
import Chat from "~/assets/icons/Chat.vue";

import "./CheckoutPage.styles.scss";

definePageMeta({
  name: "CheckoutPage",
  layout: "customer",
});
</script>

<template>
  <main class="CheckoutPage">
    <section class="CheckoutPage__summary">
      <div class="Summary__header">ORDER SUMMARY</div>

      <div class="Summary__body">
        <span class="Summary__number">ORDER #21340</span>

        <div class="Summary__detail">
          <strong>John Doe</strong>
          <p>123 Pasir Ris, 13810, Singapore</p>
        </div>

        <ul class="Summary__products">
          <li v-for="i in 3" :key="i">
            <NuxtImg
              class="Summary__product-img"
              width="46"
              height="50"
              src="/sample-1.png"
              sizes="480px"
            />

            <div class="Summary__product-detail">
              <strong>Bag of Laundry</strong>
              <span>Qty: 2</span>
            </div>

            <div class="Summary__product-price">
              <span>Total</span>
              <strong>$ 180.00</strong>
            </div>
          </li>
        </ul>
      </div>

      <div class="Summary__footer">
        <span>TOTAL ORDER</span>
        <strong>$ 204.00</strong>
      </div>
    </section>

    <NuxtLink
      href="https://wa.me/+6282295557796"
      target="_blank"
      rel="nofollow noopener noreferrer"
      class="CheckoutPage__cta"
    >
      <Chat />
      <span> WHATSAPP US </span>
    </NuxtLink>
  </main>
</template>
