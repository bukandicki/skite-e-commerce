import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

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
    href: "/admin/products",
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
