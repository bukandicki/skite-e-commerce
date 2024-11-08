import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

export const SIDEBAR_STATE_KEY = Symbol() as InjectionKey<Ref<boolean>>;

export const MENUS: Array<{
  title: string;
  href: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
  icon: "home" | "folder" | "chart" | "gear";
}> = [
  {
    title: "Home",
    href: "/admin",
    icon: "home",
  },
  {
    title: "Products",
    href: "/admin/products/create",
    icon: "folder",
  },
  {
    title: "Sales",
    href: "/admin/sales",
    icon: "chart",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: "gear",
  },
];

export const PERIOD_RANGES = [
  { label: "This Day", value: "daily" },
  { label: "This Week", value: "weekly" },
  { label: "This Month", value: "monthly" },
  { label: "This Year", value: "yearly" },
];
