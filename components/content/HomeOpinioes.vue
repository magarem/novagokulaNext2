<script setup>
	let blocoAtivo = ref()
    const props = defineProps(['refresh', 'file'])
	
	const { data: reviewBox_data, refresh: reviewBox_refresh } = await useAsyncData(
		'reviewbox', () => queryContent().where({_id: { $in: props.file.map(x=>x.replaceAll('/', ':')) }}).find()
	)
    
    watch(
        () => props.refresh,
        () => {
            reviewBox_refresh()
        }
    )
	const boxEditFileGo = (obj) => {
		blocoAtivo.value = obj.idElement
		// obj.idContent

	}
</script>
<template>
    <section id="opinioes" ref="opinioes" class="blog section" style="_margin-top: 20px; padding-top: 30px; padding-bottom: 50px; _background-color: rgb(238, 217, 159);">
		<h5 class="mb-5 text-center p-3" style="_margin-top: -25px; margin-bottom: 0px; padding-bottom: 100px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Opiniões de nossos visitantes</h5>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="row text-center">
						<div class="col-md-4 mb-5 mb-md-0" v-for="(item, i) in reviewBox_data">
							<div class="d-flex justify-content-center mb-4">
								<img :src="item.img"
								class="rounded-circle shadow-1-strong" />
							</div>
							<h5 class="mb-3">{{item.title}}</h5>
							<h6 class="text-primary mb-3">Visitante</h6>
							<p class="px-xl-3">
								<!-- <i class="fas fa-quote-left pe-2"></i> -->
								<ContentRenderer class="text-white" :value="item" />
							</p>
							<ul class="list-unstyled d-flex justify-content-center mb-0">
								<li>
								<i class="fas fa-star fa-sm text-warning"></i>
								</li>
								<li>
								<i class="fas fa-star fa-sm text-warning"></i>
								</li>
								<li>
								<i class="fas fa-star fa-sm text-warning"></i>
								</li>
								<li>
								<i class="fas fa-star fa-sm text-warning"></i>
								</li>
								<li>
								<i class="fas fa-star fa-sm text-warning"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>