<template>
	<header class="masthead_ mh mt-5" >
		<Slide2/>
	</header>

	<section id="bemvindo" class="page-section _bg-primary" style=" background-color: #919748;" >
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
						<ContentRenderer @click="boxEditFileGo('content/home/bemvindo.md')" class="text-white" :value="bemvindo_data" />
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
							<Cardgrid target="eventos" :item="item" type="eventos"/>
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
							<ContentRenderer @click="boxEditFileGo('content/home/reviewbox1.md')"  class="text-white" :value="reviewBox1_data" />
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
							<img src="https://lh3.googleusercontent.com/a-/ALV-UjXO9v9WEu2ckBelZS90yCpmF-9JiSNJQ02eBtZWOUODpodq=w66-h66-p-rp-mo-ba6-br100"
							class="rounded-circle shadow-1-strong"   />
						</div>
						<h5 class="mb-3">Alex Prosa</h5>
						<h6 class="text-primary mb-3">Visitante</h6>
						<p class="px-xl-3">
							<!-- <i class="fas fa-quote-left pe-2"></i> -->
							Lugar maravilhoso de contemplação, reflexão, bem-estar, paz. Hare krishna, Hare Hare. Templos para meditação, trilhas, cachoeira, hospedagem, camping, lojinhas de conveniência, lanchonete, espaço para almoço, massagens ayurvédica, natureza exuberante, muitos pássaros de todas as espécies, cânticos, devoção e, acima de tudo, pessoas especiais que dão todo suporte aos visitantes. Entrada, R$ 10,00 por pessoa adultos. Crianças não sei se pagam.
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
							<img src="https://lh3.googleusercontent.com/a-/ALV-UjUFaj0g7PMSqac5m3rLKwvKRSJKPDcVeAFu2TnXP1G4H52Z=w66-h66-p-rp-mo-ba2-br100"
							class="rounded-circle shadow-1-strong" />
						</div>
						<h5 class="mb-3">Susana Uribarri</h5>
						<h6 class="text-primary mb-3">Visitante</h6>
						<p class="px-xl-3">
							<!-- <i class="fas fa-quote-left pe-2"></i> -->
							Lugar encantador. Fizemos um retiro de Yoga e mantras. Experiência maravilhosa, pessoas gentis, atenção primorosa. Recomendo o kiosque da Eka, e o restaurante Confraria vegana do Jaya Devi.
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
	.dashed {border: dashed red;}
</style>
<script setup lang="ts">
    definePageMeta({
        layout: 'default'
    })

    const route = useRoute()
    const id = route.query.id
	const opinioes = ref<HTMLElement | null>(null)

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
    const ref_session = ref("")

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

	// Promise.all([bemvindo_data, eventos_data, doacao_data, reviewBox1_data]).then((valores) => {
	// 	console.log(valores); // [3, 1337, "foo"]
	// });
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

	function boxEditFileGo(file){
		window.parent.postMessage({type: 'file', id: file, fileList}, '/');

	}

    if (process.client) {
        if (window.parent){
            window.parent.postMessage({type: 'file', fileList}, '/');
        }
        window.addEventListener("message", refreshDo, false);
    }
                
</script>