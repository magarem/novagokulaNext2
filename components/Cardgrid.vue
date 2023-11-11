<template>
  <div class="card" style="width: 100%;">
    <a :href="target + '?id=' + (item._path||item.id)">
      <img class="card-img-top" :src="item.imgs[0]" alt="Card image cap"/>
    </a>
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.desc}}</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps(['target', 'item'])
</script>
<style scoped>
img {
    height: 200px;
    object-fit: cover;
}
</style>