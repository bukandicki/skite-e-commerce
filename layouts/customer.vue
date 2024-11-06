<script lang="ts" setup>
import ChevronLeft from "~/assets/icons/ChevronLeft.vue";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="CustomerLayout">
    <button
      v-if="route.name !== 'CustomerPage'"
      class="CustomerLayout__back"
      @click="() => router.back()"
    >
      <ChevronLeft />
    </button>

    <slot />
  </div>
</template>
