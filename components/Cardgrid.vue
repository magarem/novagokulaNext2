<template>


<!-- <div class="card mb-3" style="max-width: 740px;">
  <div class="row g-0">
    <div class="col-md-5">
      <img v-if="item.imgs" class="card-img img-fluid rounded-start" :src="item.imgs[0]" alt="Card image cap"/>
    </div>
    <div class="col-md-7">
      <a :href="'generic' + '?type=' + type + '&id=' + (item._path||item.id)">
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.desc}}</p>
      </div>
    </a>
    </div>
  </div>
</div> -->







  <div class="card border-0 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
    <a :href="'generic' + '?type=' + type + '&id=' + (item._path||item.id)">
      <img v-if="item.imgs" class="card-img card-img-top" :src="item.imgs[0]" alt="Card image cap"/>
    </a>
    <div class="card-body">
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
  .card-img {
		height: 280px; 
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
