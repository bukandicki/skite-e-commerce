<script lang="ts" setup>
import {
  LazyIconChart,
  LazyIconFolder,
  LazyIconGear,
  LazyIconHome,
} from "#components";
import { MENUS } from "~/lib/constants";

const ICONS: Record<"home" | "folder" | "chart" | "gear", Component> = {
  home: LazyIconHome,
  folder: LazyIconFolder,
  chart: LazyIconChart,
  gear: LazyIconGear,
};

const route = useRoute();
</script>

<template>
  <aside class="Sidebar">
    <div class="Sidebar__wrapper">
      <div class="Sidebar__brand">
        <LazyIconBrand />
        <span>BeLaundry</span>
      </div>

      <div class="Sidebar__menu">
        <span>Menu</span>

        <ol class="Menu__items">
          <li class="Menu__item" v-for="menu in MENUS">
            <NuxtLink
              :class="[
                'Menu__link',
                { 'Menu__link--active': route.path === menu.href },
              ]"
              :href="menu.href"
            >
              <component :is="ICONS[menu.icon]"></component>

              <span>{{ menu.title }}</span>
            </NuxtLink>
          </li>
        </ol>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
@use "./Sidebar.styles.scss" as *;
</style>
