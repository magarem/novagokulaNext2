<script setup>
 definePageMeta({
        layout: ''
    })
const files = ref();

async function handleImageUpload() {
  try {
    const fd = new FormData();
    Array.from(files.value).map((file, index) => {
      fd.append("photo", file);
    });
    const { data } = await $fetch('/api/upload', {
      method: 'POST',
      body: fd,
    });
    console.log('data from backend is ', data);
  } catch (error) {
    console.log(error);
  }
}

function handleFile(e) {
  files.value = e.target.files;
}
</script>

<template>
  <form @submit.prevent="handleImageUpload">
    <input multiple type="file" @change="handleFile($event)" />
    <input type="submit" />
  </form>
</template>
