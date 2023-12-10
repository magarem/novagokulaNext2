<template>
    <section> 
        <div>
            <div class="card shadow-sm_ mb-3 border-0" style="100%;">
                <h2 class="card-title">{{item.title}}</h2>
                <div class="row g-0">
                    <div class="col-md-4">
                        <div v-if="item.imgs.length>0" v-for="img in item.imgs" _class="mb-4" >
                            <img :src="img" class="card-img card-img-top" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body pt-3 pt-md-0 parag" >
                            <p v-if="item.body.type!=='root'" class="card-text" v-html="item.body"></p>
                            <ContentRenderer v-else :value="item" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    const props = defineProps(['sessiontitle', 'item'])
</script>
<style scoped>
  /* .card-img {
		height: 200px; 
		object-fit: cover;
		border-radius: 4%;
	} */

  .card {
		background-color: transparent ;
    border: none;
	}
	.card-title {
		font-size: 22px;
		padding-bottom: 8px;
        color: rgb(31, 31, 31);
	}

	.card-body {
		background-color: transparent;
	}
</style>