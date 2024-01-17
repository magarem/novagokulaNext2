<template>
  <div v-if="item" class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
    <NuxtLink :to="'/' + item.id" >
      <img v-if="item.img" style="width: 200px;" class="card-img card-img-top text-center" :src="item.img" alt="Card image cap"/>
      <img v-if="item.textImg" class="card-img card-img-top " :src="item.textImg[0]" alt="Card image cap"/>
    </NuxtLink>
    <div class="card-body">
      <h5 class="card-title text-center">{{item.title}}</h5>
      <p class="card-text">{{item.desc}}</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps(['item'])
  console.log('item:', props.item);
</script>
<style scoped>
  .card-img {
		/* height: 280px;  */
    /* max-width: 220px; */
		object-fit: cover;
		border-radius: 4%;
	}

  .card {
		background-color: transparent ;
    border: none;
	}
	.card-title {
		font-size: 17px;
		padding-bottom: 8px;
    color: black;
	}

	.card-body {
		background-color: transparent;
	}
</style>
