<template>
	<header class="masthead_ mh mt-5" >
		<Slide2/>
	</header>

	<section class="page-section _bg-primary" style=" background-color: #919748;" >
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<h2 class="text-white mt-0"></h2>
						<iframe width="100%" height="315" :src="bemvindo_data.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<p class="text-white-75 mb-4"></p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<ContentRenderer id="bemvindo" @click="boxEditFileGo('content/home/bemvindo.md')" class="text-white" :value="bemvindo_data" />
						<!-- <h2 class="text-white mt-0">Bem vindo!</h2>
						<p class="text-white-75 mb-4">
							Localizada aos pés da Serra da Mantiqueira, em Pindamonhangaba, a Fazenda Nova Gokula cultiva, há 45 anos, valores de vida simples e uma cultura espiritual baseada nos antigos ensinamentos dos Vedas. A maior comunidade Hare Krishna da América Latina pertence à Sociedade Internacional para a Consciência de Krishna (ISKCON), conhecida como a maior escola de filosofia védica criada no ocidente. Foi fundada em 1966 em Nova Iorque por Swami Prabhupada, que trouxe esta ciência conhecida antes apenas por yogis e santos do oriente. </p>  -->
						<a class="btn btn-light btn-xl" href="getItem?id=about">Saiba mais</a> 
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Prabhupada-->
	<section id="prabhupada" class="page-section_ bg-primary_"  _style="margin-top: -70px;">
		<div class="_container">
			<a href="generic2?id=ofundador">
				<img src="/img/banner_fundador_5.png" class="w-100 img-fluid">
			</a>
		</div>
	</section>

	<!-- eventos-->
	<div id="eventos" class="text-center" style="padding-top: 30px; padding-bottom: 50px; background-color: #E9BA86;">
		<h5 class="mb-4 text-center p-3" style="margin-top: 0px; margin-bottom: 0px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Próximos eventos</h5>
		<div class="container-fluid px-5" >
			<div class="container_ text-center align-items-md-stretch pl-4 pr-4">
				<div class="h-100 text-center p-4 rounded-3" _style="padding-left: 100px; padding-right: 100px">
					<!-- <h5>Opções</h5> -->
					<!-- <div class="row"> -->
					<div class="row text-center" v-if="eventos_data" >
						<h5 class="text-center mb-3 pt-4" v-if="id">Outros</h5>
						<div class="col mb-3" v-for="item in eventos_data">
							<div v-if="item" class="card border-3 shadow-none rounded-3" style="width: 100%; border-radius: 20%;">
								<NuxtLink :to="{ path: ('content'+item._path).replaceAll('/',':')+'.md' } " >
								<img v-if="item.imgs" class="card-img card-img-top text-center" :src="item.imgs[0]" alt="Card image cap"/>
								<img v-if="item.textImg" class="card-img card-img-top " :src="item.textImg[0]" alt="Card image cap"/>
								</NuxtLink>
								<div class="card-body">
									<h5 class="card-title text-center">{{item.title}}</h5>
									<p class="card-text">{{item.desc}}</p>
									<p class="card-text"><small class="text-muted"></small></p>
								</div>
							</div>
						</div>
					</div>
					<!-- </div> -->
				</div>
	   </div>
		</div>
	</div>
	<!-- Call to action-->
	<!-- <section class="page-section bg-dark text-white p-0" s_tyle="margin-top: 50px;">
		<div class="container_ _px-4 _px-lg-5 text-center">
		<a href="getItem?id=querodoar"><img src="/img/doacao.png"  class="img-fluid"></a>
		</div>
	</section> -->
	<!-- <section id="doacao" class="page-section _bg-primary" style="background-color: #919748;" >
		<div class="container">
			<div class="row">
				<ContentRenderer @click="boxEditFileGo('content/home/doacao.md')"  class="text-white" :value="doacao_data" />
			</div>
		</div>
	</section> -->
	<section id="opinioes" ref="opinioes" class="blog section" style="_margin-top: 20px; padding-top: 30px; padding-bottom: 50px; _background-color: rgb(238, 217, 159);">
		<h5 class="mb-5 text-center p-3" style="_margin-top: -25px; margin-bottom: 0px; padding-bottom: 100px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Opiniões de nossos visitantes</h5>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="row text-center">
						<div class="col-md-4 mb-5 mb-md-0">
							<div class="d-flex justify-content-center mb-4">
								<img :src="reviewBox1_data.img"
								class="rounded-circle shadow-1-strong" />
							</div>
							<h5 class="mb-3">{{reviewBox1_data.title}}</h5>
							<h6 class="text-primary mb-3">Visitante</h6>
							<p class="px-xl-3">
								<!-- <i class="fas fa-quote-left pe-2"></i> -->
								<ContentRenderer id="reviewbox1" @click="boxEditFileGo('content/home/reviewbox1.md')"  class="text-white" :value="reviewBox1_data" />
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
						<div class="col-md-4 mb-5 mb-md-0">
							<div class="d-flex justify-content-center mb-4">
								<img :src="reviewBox2_data.img"
								class="rounded-circle shadow-1-strong" />
							</div>
							<h5 class="mb-3">{{reviewBox2_data.title}}</h5>
							<h6 class="text-primary mb-3">Visitante</h6>
							<p class="px-xl-3">
								<!-- <i class="fas fa-quote-left pe-2"></i> -->
								<ContentRenderer id="reviewbox2" @click="boxEditFileGo('content/home/reviewbox2.md')"  class="text-white" :value="reviewBox2_data" />
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
						<div class="col-md-4 mb-0">
							<div class="d-flex justify-content-center mb-4">
								<img :src="reviewBox3_data.img"
								class="rounded-circle shadow-1-strong" />
							</div>
							<h5 class="mb-3">{{reviewBox3_data.title}}</h5>
							<h6 class="text-primary mb-3">Visitante</h6>
							<p class="px-xl-3">
								<!-- <i class="fas fa-quote-left pe-2"></i> -->
								<ContentRenderer id="reviewbox3" @click="boxEditFileGo('content/home/reviewbox3.md')"  class="text-white" :value="reviewBox3_data" />
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
<style scoped>
  @media screen and (max-width: 450px) {
		.mh {
			/* margin-top: 145px; */
		}
	}
	.dashed {
		border: dashed rgb(170, 113, 189);
		border-radius: 15px;
		padding: 5px;
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

    const route = useRoute()
    const id = route.query.id
	const opinioes = ref<HTMLElement | null>(null)
	const ref_session = ref("")

	// Using scrollIntoView() function to achieve the scrolling
	function scrollTo(view: Ref<HTMLElement | null>) { 
		view.value?.scrollIntoView({ behavior: 'smooth' }) 
	}

	const fileList = [
		'content/home/bemvindo.md',
		'content/home/doacao.md',
		'content/home/reviewbox1.md',
		'content/home/reviewbox2.md',
		'content/home/reviewbox3.md'
	]
    
	const { data: bemvindo_data, refresh: bemvindo_refresh } = await useAsyncData(
		'bemvindo', () => queryContent('/home/bemvindo').findOne()
	)

	const { data: eventos_data, refresh: eventos_refresh } = await useAsyncData(
		'eventos', () => queryContent('/eventos')
		.where({ $not: {"_path": "/eventos/_index" }}).find()
    )

	const { data: doacao_data, refresh: doacao_refresh } = await useAsyncData(
		'doacao', () => queryContent('/home/doacao').findOne()
	)

	const { data: reviewBox1_data, refresh: reviewBox1_refresh } = await useAsyncData(
		'reviewbox1', () => queryContent('/home/reviewbox1').findOne()
	)
	const { data: reviewBox2_data, refresh: reviewBox2_refresh } = await useAsyncData(
		'reviewbox2', () => queryContent('/home/reviewbox2').findOne()
	)
	const { data: reviewBox3_data, refresh: reviewBox3_refresh } = await useAsyncData(
		'reviewbox3', () => queryContent('/home/reviewbox3').findOne()
	)

	function scrollMeTo(refName) {
		['ref_'+refName].value.$el.scrollIntoView({behavior: "smooth"});
		
	}

	const goTo = () => {
	}

	const scrollToElement = (name) =>  {
		if (name) {
			ref_session.value = name
			const el = document.getElementById(ref_session.value);
			if (el) {
				el.scrollIntoView();
			}
		}
		
	}

    async function refreshDo(event) {
		
		// ref_opinioes.value.$el.scrollIntoView({behavior: "smooth"});
		
		eventos_refresh()
		bemvindo_refresh()
		doacao_refresh()
		reviewBox1_refresh()

		console.log(1212, event.data.txt_parans.session);
		// scrollTo(opinioes)
        // scrollToElement(event.data.txt_parans.session)
    }

	function tiraClass(){
		var lista = document.getElementsByClassName("dashed");
		for(var i = lista.length - 1; i >= 0; i--)
		{
			lista[i].classList.remove('dashed')
		}
			
	}

	function boxEditFileGo(file){
	
		tiraClass()
		window.parent.postMessage({type: 'file', id: file, fileList}, '/');
		var element = document.getElementById(file.split('/').slice(-1)[0].replace('.md', ''));
		element.classList.add("dashed");

	}

    if (process.client) {
        if (window.parent){
            window.parent.postMessage({type: 'file', fileList}, '/');
        }
        window.addEventListener("message", refreshDo, false);
    }
                
</script>