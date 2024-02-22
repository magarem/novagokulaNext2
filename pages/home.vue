<template>
	<div class="row pt-5">
		<div class="col-12">
			<Homeslideshow 
				datafile="content/home/homeslideshow.md" 
				@click="go('content/home/homeslideshow.md')"
			/>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<HomeBemvindo
				:refresh="componentsDataRefresh" 
				file="content/home/bemvindo.md"
				@click="go('content/home/bemvindo.md')"
			/> 
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<HomePrabhupada 
				:refresh="componentsDataRefresh" 
				file="content/home/prabhupada.md"
				@click="go('content/home/prabhupada.md')"
			/> 
		</div>
	</div>
	<div class="row">

		<div class="col-12 col-md-6">
			<section class="p-4" style="height: 500px; overflow: auto; background-image: url(img/toolbar-bg.jpg);">
				<h1 class="mb-4" style="color: #604500; font-size: 28px;">Próximos eventos</h1>
				<!-- <Showcontentindex 
					id="content:home:homeeventos.md" 
				/> -->
				<Showcontentindex 
					id="content:eventos:_index.md" 
				/>
			</section>
		</div> 
		<div class="col-12 col-md-6">
			<section class="p-4" style="height: 500px; overflow: auto;">
				<h1 class="mb-4" style="color: #604500; font-size: 28px;" @click="go('content/reviews/_index.md')">Opiniões de visitantes</h1>
				<Showcontentindex 
					id="content:reviews:_index.md" 
				/>
			</section>
		</div>
	</div>

	<div class="row">
		<div class="col-12">
			<section _class="p-4" >
				<img src="/img/doacao.png" style="width: 100%;"/>
			</section>
		</div>
	</div>
	

	<!-- <HomeOpinioes 
		:refresh="componentsDataRefresh" 
		file="data[0].components.HomeOpinioes.file"
		:class="blocoAtivo=='HomeOpinioes'&&'dashed'" 
		@click="boxEditFileGo({idElement: 'HomeOpinioes', idContent: components.HomeOpinioes.file[0].replaceAll('/', ':')})" 
	/>  -->
	
	<!-- <HomeEventos 
		:refresh="componentsDataRefresh" 
		datafile="content/home/homeeventos.md" 
		@click="go('content/home/homeeventos.md')"
	/>  -->
	<!-- <HomeOpinioes 
		:refresh="componentsDataRefresh" 
		:file="data[0].components.HomeOpinioes.file"
		:class="blocoAtivo=='HomeOpinioes'&&'dashed'" 
		@click="boxEditFileGo({idElement: 'HomeOpinioes', idContent: components.HomeOpinioes.file[0].replaceAll('/', ':')})" 
	/> -->
	
</template>
<style scoped>
  @media screen and (max-width: 450px) {
		.mh {
			/* margin-top: 145px; */
		}
	}
	.dashed {
		border: 2px dashed rgb(36, 28, 38);
		/* border-radius: 15px; */
		margin: 0px;
		padding: 10px;
		/* padding: auto; */
	}


	.card-img {
		/* height: 280px;  */
    max-width: 300px;
		object-fit: cover;
		border-radius: 2%;
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
<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })

	// import data from '@/content/home/_components.json';
	const route = useRoute()
    const id = route.params.id

	let refreshMain2 = ref(0)
	let componentsDataRefresh = ref(0)
	
    // let contentFileData = ref()

    // const { data: data, refresh: refreshMain } = await useFetch('/api/readDir?id=content:home:_index.md')
	// const { data: data, refresh: refreshMain } = await useAsyncData(() => queryContent().where({_id: 'content:home:_index.md'}).findOne());
    async function refreshDo(event: { data: { id: string | string[]; }; }) {
		// console.log(refreshMain.value);
		// mdcVars.value.name++
		// refreshMain()
		componentsDataRefresh.value++
    }

	function go(id: any){
		window.parent.postMessage({type: 'file', url: route.fullPath, id: id}, '/');
	}

    if (process.client) {
        if (window.parent){
            // window.parent.postMessage({type: 'file', url: route.fullPath, id:'content/home/_index.md'}, '/');
        }
        window.addEventListener("message", refreshDo, false);
    }
                
</script>