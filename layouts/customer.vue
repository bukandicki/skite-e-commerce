<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const handleBack = () => {
  router.options.history.state.back ? router.back() : navigateTo("/");
};
</script>

<template>
  <div class="CustomerLayout">
    <button
      v-if="route.name !== 'CustomerPage'"
      class="CustomerLayout__back"
      @click="handleBack"
    >
      <LazyIconChevronLeft />
    </button>

    <slot />
  </div>
</template>
