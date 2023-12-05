<template>
  <div class="card border-0 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
    <!-- <a :href="target + '?id=' + (item._path||item.id)"> -->
    <a :href="'generic' + '?type=' + type + '&id=' + (item._path||item.id)">
    <!-- <NuxtLink :to="'generic' + '?type=' + type + '&id=' + (item._path||item.id)"> -->
      <img v-if="item.imgs"  style="border-radius: 4%;" class="card-img-top" :src="item.imgs[0]" alt="Card image cap"/>
    <!-- </NuxtLink>  -->
    </a>
    <div class="card-body bg">
      <h5 class="card-title text-center">{{item.title}}</h5>
      <p class="card-text">{{item.desc}}</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps(['target', 'item', 'type'])
</script>
<style scoped>
.card {
    /* background-color: transparent; */
    /* background-color: #F1D2A3; */
    background-color: transparent;
 }
.card-title {
  font-size: 18px;
}
.card-body {
    /* color:rgb(64, 64, 64); */
 }
.bg {
    /* background-color: transparent; */
    /* background-color: #F1D2A3; */
    background-color: transparent;
 }
img {
    height: 400px; 
    object-fit: cover;
}
</style>