<script lang="ts" setup>
const userStore = useUserStore();

const {
  public: { email, password },
} = useRuntimeConfig();

await useAsyncData("signin", () => userStore.SIGN_IN({ email, password }));
await useAsyncData("user_info", () => userStore.FETCH_INFO());
</script>

<template>
  <NuxtRouteAnnouncer />

  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
