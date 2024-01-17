<template>
    <p>{{ $route.params.slug }}</p>
</template>
<script setup>
    definePageMeta({
    layout: ''
    })
    console.log(route.params.slug);
</script>