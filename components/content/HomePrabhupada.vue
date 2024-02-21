<template>
    <!-- Prabhupada-->
	<section id="prabhupada">
		<div class="_container">
			<!-- <NuxtLink :to="data.params_data.link"> -->
			<!-- </NuxtLink> -->
		</div>


		<div class="box">
			<div class="jumbotron mb-5"><br/><br/>
        <span style="font-size: 25px;">{{ data.params_data.description }}</span>
				<!-- <ContentRenderer style="font-size: 100px;" class="text-white" :value="data" /> -->
				<!-- <br/><br/><button :to="data.params_data.link" class="btn btn-success">Saiba mais</button> -->
			</div>
			<img :src="data.params_data.image" class="w-100 img-fluid">

		</div>



	</section>
</template>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.jumbotron {
  padding-top: 50px;
  padding-left: 150px;
  
  width: 50%;
  height: 100%;
  color: rgb(85, 82, 33);
  position: absolute;
}

.text-white {
  font-size: 18px;
}

</style>
<script setup>

const props = defineProps(['refresh', 'file', 'link'])
    const { data: data, refresh: refresh } = await useAsyncData(
		// 'bemvindo', () => queryContent('/home/bemvindo').findOne()
		'data', () => queryContent().where({_id: props.file.replaceAll('/',':')}).findOne()
	)
    
	
	watch(
        () => props.refresh,
        () => {
            refresh()
        }
    )
</script>