<script lang="ts" setup>
import { FAKE_CATEGORY_RESPONSE } from "~/lib/constants";
import type { ProductType } from "~/lib/types";

definePageMeta({
  name: "AdminCreateProductPage",
  layout: "admin",
});

const productStore = useProductStore();
const categoryStore = useCategoryStore();

const selectedImage = ref<string>("");
const formElement = ref<HTMLFormElement | null>(null);
const fileElement = ref<HTMLInputElement | null>(null);
const selectedCategory = ref<number | null>(null);
const payload = ref<Partial<ProductType>>({});

await useAsyncData("categories", () => categoryStore.FETCH_ALL());
const { status, execute } = await useAsyncData(
  "create_product",
  () => productStore.CREATE(payload.value),
  {
    immediate: false,
  }
);

watch(status, (val) => {
  if (val === "success") {
    formElement.value?.reset();
    selectedCategory.value = null;
    payload.value = {};
    selectedImage.value = "";
  }
});

const handleSelectFile = () => {
  fileElement.value?.click();
};

const handleFileChange = async (e: Event) => {
  const el = e.target as HTMLInputElement;

  const data = await new Promise<string>((resolve, reject) => {
    const fr = new FileReader();

    fr.onloadend = function () {
      resolve(fr.result as string);
    };

    fr.onerror = function () {
      reject();
    };

    fr.readAsDataURL((el.files as FileList)[0]);
  });

  selectedImage.value = data;
};

const handleCreateProduct = (e: Event) => {
  e.preventDefault();

  const el = e.target as HTMLFormElement;

  const fd = new FormData(el);

  payload.value = {
    name: fd.get("name") as string,
    description: fd.get("description") as string,
    sku: fd.get("sku") as string,
    stock: Number(fd.get("stock")),
    category_id: selectedCategory.value as number,
    price: Number(fd.get("price")),
    image: selectedImage.value as string,
  };

  execute();
};
</script>

<template>
  <main class="CreatePage">
    <section class="CreatePage__form">
      <h2>Add New Product</h2>

      <form ref="formElement" class="ProductForm" @submit="handleCreateProduct">
        <LazyInput type="text" label="Product Name" name="name" />
        <LazyTextarea label="Description" name="description" />

        <div class="ProductForm__group">
          <LazyInput type="text" label="SKU" name="sku" />
          <LazyInput type="number" label="Stock" name="stock" />
        </div>

        <div class="ProductForm__categories">
          <label>Category</label>

          <div>
            <button
              type="button"
              v-for="category in categoryStore.categories"
              :key="category.id"
              :data-selected="selectedCategory === category.id"
              @click="selectedCategory = category.id"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <div class="ProductForm__group">
          <LazyInput type="number" label="Price" name="price" />

          <button type="submit" :disabled="status === 'pending'">
            {{ status === "pending" ? "Publishing..." : "Publish" }}
          </button>
        </div>
      </form>
    </section>

    <section class="CreatePage__image">
      <input
        @change="handleFileChange"
        accept="image/*"
        ref="fileElement"
        type="file"
      />

      <button @click="handleSelectFile">
        <img :src="selectedImage ? selectedImage : '/image-placeholder.png'" />

        <span>Upload image here</span>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
@use "./Create.styles.scss" as *;
</style>
