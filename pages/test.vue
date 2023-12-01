<script setup>
definePageMeta({
        layout: 'default2'
    })
const { data } = await useAsyncData('home', () => queryContent('/templos/meta').findOne())
</script>

<template>
    <h1 style="margin-top: 100px;">dfsdfds</h1>
  <pre>
    {{ data.title }}
    <ContentRenderer :value="data" />
    
  </pre>
</template>