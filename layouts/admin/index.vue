<script lang="ts" setup>
import { SIDEBAR_STATE_KEY } from "~/lib/constants";

const route = useRoute();
const userStore = useUserStore();

const state = useState<boolean>("toggle_state", () => false);

provide(SIDEBAR_STATE_KEY, state);

const handleToggleSidebar = () => {
  state.value = !state.value;
};

const handleResetState = () => {
  if (state.value) state.value = false;
};

onMounted(() => {
  window.addEventListener("resize", handleResetState);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResetState);
});
</script>

<template>
  <div class="AdminLayout">
    <LazySidebar />
    <div class="AdminLayout__wrapper">
      <header class="AdminLayout__header">
        <div class="Header__wrapper">
          <button @click="handleToggleSidebar" class="Header__brand">
            <LazyIconBrand />
          </button>

          <h1 class="Header__title" v-if="route.name === 'AdminPage'">Home</h1>

          <div class="Header__user">
            <LazyIconUser />

            <NuxtLink href="/admin/settings">
              {{ userStore.user?.name }}
            </NuxtLink>
          </div>
        </div>
      </header>

      <slot />
    </div>
  </div>
</template>

<style lang="scss">
@use "./AdminLayout.styles.scss" as *;
</style>
