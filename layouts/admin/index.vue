<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="AdminLayout">
    <LazySidebar />
    <div class="AdminLayout__wrapper">
      <header class="AdminLayout__header">
        <div class="Header__wrapper">
          <button class="Header__brand">
            <LazyIconBrand />
          </button>

          <h1 class="Header__title" v-if="route.name === 'AdminPage'">Home</h1>

          <div class="Header__user">
            <LazyIconUser />

            <NuxtLink href="/admin/setting"> Jhon Doe </NuxtLink>
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
