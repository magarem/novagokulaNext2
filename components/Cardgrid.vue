<template>
  <div v-if="item" class="card_ border-3 shadow-none rounded-3" _style="width: 100%; border-radius: 20%; _background-color: aquamarine;">
    <NuxtLink :to="'/masterpage/' + item.id" >
      <!-- <img v-if="item.topimage" style="width: 200px;" class="card-img card-img-top text-center" :src="(item.topimage.charAt(0)=='/')?item.topimage:'/'+item.topimage" alt="Card image cap"/> -->
      <img v-if="item.topimage"  class="card-img_ card-img-top_ text-center" :src="item.topimage" />
      <img v-if="item.sideimage" class="card-img card-img-top "  style="width: 200px;" :src="(item.sideimage.charAt(0)=='/')?item.sideimage:'/'+item.sideimage" alt="Card image cap"/>
    </NuxtLink>
    <div class="card-body">
      <h5 class="card-title text-center">
        <NuxtLink :to="'/masterpage/' + item.id" _style="color: rgb(45, 15, 15);" >
          <div class="m-auto mt-3" style="width: 200px; color: rgb(100, 15, 15);">{{item.title}}</div>
        </NuxtLink>
      </h5>
      <p class="card-text m-auto" style="width: 250px;">{{item.description}}</p>
      <p class="card-text"><small class="text-muted"></small></p>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps(['item'])
</script>
<style scoped>
  .card-img {
		/* height: 280px;  */
    max-width: 220px;
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
