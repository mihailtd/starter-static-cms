<script setup lang="ts">
const { data, error } = useAsyncData("homepage", () => GqlHomepage());
</script>

<template>
  <h1 class="text-6xl text-blue-800">Hello From Nuxt + Strapi + TailwindCSS</h1>
  <h2 class="text-4xl mt-20 text-blue-600" v-if="data">
    {{ data.homepage?.data?.attributes?.title }}
  </h2>
  <p v-else-if="error">{{ error }}</p>
</template>
