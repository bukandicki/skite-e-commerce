<script lang="ts" setup>
import "./ProjectCard.styles.scss";

const props = defineProps<{
  label?: string;
  title: string;
  img: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="ProjectCard">
    <NuxtImg :src="img" class="ProjectCard__img" />

    <div class="ProjectCard__detail" :data-labeled="!!label">
      <span v-if="label">{{ label }}</span>
      <strong>{{ title }}</strong>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>
