<script lang="ts" setup>
import { FAKE_CATEGORY_RESPONSE } from "~/lib/constants";

definePageMeta({
  name: "AdminCreateProductPage",
  layout: "admin",
});

const selectedImage = ref<string | null>(null);
const selectedCategory = ref<number | null>(null);

const handleSelectFile = () => {
  const input_el = document.getElementById(
    "image-file-input"
  ) as HTMLInputElement;

  input_el.click();
};

const handleFileChange = (e: Event) => {
  const el = e.target as HTMLInputElement;

  const fr = new FileReader();

  fr.onload = function () {
    selectedImage.value = fr.result as string;
  };

  fr.readAsDataURL((el.files as FileList)[0]);
};

const handleCreateProduct = (e: Event) => {
  e.preventDefault();

  const el = e.target as HTMLFormElement;

  const fd = new FormData(el);
};
</script>

<template>
  <main class="CreatePage">
    <section class="CreatePage__form">
      <h2>Add New Product</h2>

      <form class="ProductForm" @submit="handleCreateProduct">
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
              v-for="category in FAKE_CATEGORY_RESPONSE.response"
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

          <button type="submit">Publish</button>
        </div>
      </form>
    </section>

    <section class="CreatePage__image">
      <input
        @change="handleFileChange"
        accept="image/*"
        id="image-file-input"
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
