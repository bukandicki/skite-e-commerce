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

// TODO: REMOVE THIS LATER
export const FAKE_SOLDS = [
  {
    created_at: "20 Jul 2023",
    total: 25,
    income: "80",
  },
  {
    created_at: "21 Jul 2023",
    total: 30,
    income: "120",
  },
  {
    created_at: "22 Jul 2023",
    total: 49,
    income: "20",
  },
  {
    created_at: "23 Jul 2023",
    total: 48,
    income: "420",
  },
  {
    created_at: "24 Jul 2023",
    total: 30,
    income: "30",
  },
  {
    created_at: "25 Jul 2023",
    total: 31,
    income: "40",
  },
  {
    created_at: "26 Jul 2023",
    total: 15,
    income: "230",
  },
  {
    created_at: "27 Jul 2023",
    total: 15,
    income: "230",
  },
];

// TODO: REMOVE THIS LATER

export const FAKE_CATEGORY_RESPONSE = {
  status: true,
  message: "Success get categories",
  response: [
    {
      id: 1,
      name: "Wash and Fold",
    },
    {
      id: 2,
      name: "Dry Clean",
    },
    {
      id: 3,
      name: "Home",
    },
    {
      id: 4,
      name: "Others",
    },
  ],
};
