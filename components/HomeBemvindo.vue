<script setup>
	
    const props = defineProps(['refresh', 'file'])
    const { data: bemvindo_data, refresh: bemvindo_refresh } = await useAsyncData(
		// 'bemvindo', () => queryContent('/home/bemvindo').findOne()
		'bemvindo', () => queryContent().where({_id: props.file.replaceAll('/',':')}).findOne()
	)
    
	
	watch(
        () => props.refresh,
        () => {
            bemvindo_refresh()
        }
    )

	
</script>
<template>
    <section class="page-section _bg-primary" style=" background-color: #919748;" >
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<h2 class="text-white mt-0"></h2>
						<iframe width="100%" height="315" :src="bemvindo_data.params_data.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<p class="text-white-75 mb-4"></p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<ContentRenderer class="text-white" :value="bemvindo_data" />
						<a class="btn btn-light btn-xl" :href="bemvindo_data.params_data.buttonsaibamaislink">Saiba mais</a> 
					</div>
				</div>
			</div>
		</div>
	</section>
</template>