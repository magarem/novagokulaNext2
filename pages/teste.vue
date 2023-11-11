<script setup lang="ts">
const { data } = await useAsyncData('page-data', () => queryContent('/casadosgurus').findOne())
</script>
<template>
  <main>
    <!-- <ContentRenderer :value="data"> -->
      <!-- <h1>{{ data.title }}</h1> -->
      <ContentRenderer :value="data" />
    <!-- </ContentRenderer> -->
  </main>
</template>