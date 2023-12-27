<template>
	<header class="masthead_ mh mt-5" >
		<Slide2/>
	</header>
	<section class="page-section _bg-primary" style="background-color: #919748;" id="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<h2 class="text-white mt-0"></h2>
						<iframe width="100%" height="315" :src="dataHome.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<p class="text-white-75 mb-4"></p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<ContentRenderer  class="text-white" :value="dataHome" />
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
	<section class="page-section_ bg-primary_"  id="about" _style="margin-top: -70px;">
		<div class="_container">
			<a href="generic2?id=ofundador">
				<img src="/img/banner_fundador_5.png" class="w-100 img-fluid">
			</a>
		</div>
	</section>
<!-- eventos-->
<div id="eventos" style="padding-top: 30px; padding-bottom: 50px; background-color: #E9BA86;">
		<h5 class="mb-4 text-center p-3" style="margin-top: 0px; margin-bottom: 0px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Próximos eventos</h5>
		<div class="container-fluid _p-0">
			<div class="container_ align-items-md-stretch pl-4 pr-4">
				<div class="h-100 w-100 p-4 rounded-3" _style="background-color:bisque;">
					<!-- <h5>Opções</h5> -->
					<!-- <div class="row"> -->
					<div class="row shadow-sm_ " v-if="itens" >
						<h5 class="_text-center mb-3 pt-4" v-if="id">Outros</h5>
						<div class="col-md-3 mb-3"  v-for="item in itens">
							<Cardgrid target="eventos" :item="item" type="eventos"/>
						</div>
					</div>
					<!-- </div> -->
				</div>
	   </div>
		</div>
	</div>
	<!-- Call to action-->
	<section class="page-section bg-dark text-white p-0" s_tyle="margin-top: 50px;">
		<div class="container_ _px-4 _px-lg-5 text-center">
		<a href="getItem?id=querodoar"><img src="/img/doacao.png"  class="img-fluid"></a>
		</div>
	</section>
	<section class="blog section" id="opinioes" style="_margin-top: 20px; padding-top: 30px; padding-bottom: 50px; _background-color: rgb(238, 217, 159);">
	<h5 class="mb-5 text-center p-3" style="_margin-top: -25px; margin-bottom: 0px; padding-bottom: 100px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Opiniões de nossos visitantes</h5>
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="row text-center">
						<div class="col-md-4 mb-5 mb-md-0">
						<div class="d-flex justify-content-center mb-4">
							<img src="https://lh3.googleusercontent.com/a-/ALV-UjXDh-03wSS5541vK62G0js5NuZ0Iv_NF6huB-MjhcEgUFcw=w66-h66-p-rp-mo-ba5-br100"
							class="rounded-circle shadow-1-strong" />
						</div>
						<h5 class="mb-3">Tania santos</h5>
						<h6 class="text-primary mb-3">Visitante</h6>
						<p class="px-xl-3">
							<i class="fas fa-quote-left pe-2"></i>Que lugar maravilhoso, uma tranquilidade longe do que vivo, fomos de bike, pude apreciar Is alimentos vegano, sorvete, coxinha de jaca, pudemos nos refrescar nas águas límpidas que dava pra vê o fundo ....e os templos nunca había visto un desperto, pessoas das lojinhas bem atenciosas
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
							<i class="fas fa-quote-left pe-2"></i>Lugar maravilhoso de contemplação, reflexão, bem-estar, paz. Hare krishna, Hare Hare. Templos para meditação, trilhas, cachoeira, hospedagem, camping, lojinhas de conveniência, lanchonete, espaço para almoço, massagens ayurvédica, natureza exuberante, muitos pássaros de todas as espécies, cânticos, devoção e, acima de tudo, pessoas especiais que dão todo suporte aos visitantes. Entrada, R$ 10,00 por pessoa adultos. Crianças não sei se pagam.
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
							<i class="fas fa-quote-left pe-2"></i>Lugar encantador. Fizemos um retiro de Yoga e mantras. Experiência maravilhosa, pessoas gentis, atenção primorosa. Recomendo o kiosque da Eka, e o restaurante Confraria vegana do Jaya Devi.
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
</style>
<script setup lang="ts">
	// import * as Bootstrap from 'bootstrap'
    definePageMeta({
        layout: 'default'
    })

	


    const route = useRoute()
    const id = route.query.id
    const type = route.query.type
    
	

	// var myCarousel = querySelector('#carouselExampleControls')
	// new Bootstrap.Carousel(myCarousel)
 
    console.log(11, id)
    let hasLoaded = false

    // const { data: meta } = await useAsyncData('home', () => queryContent('/' + type + '/meta').findOne())
  
    // console.log('meta:', meta.value);
    
	// const { data: dataHome } = await useAsyncData('home', () => {
    //         return queryContent('home.md').find()
    //     }
    // )

	// console.log(dataHome);
	

    const { data: data } = await useAsyncData('page-data', () => {
            return queryContent('/eventos').find()
        }
    )
	data.value = data.value.filter(function( obj ) {
        return obj._path !== '/eventos/meta';
    });

    // data.value = data.value.filter(function( obj ) {
    //     return obj._path !== '/' + type + '/meta';
    // });

    console.log('data:', data.value);
    

    const itens = data.value
    hasLoaded = true
                 
	const { data: dataHome, refresh } = await useAsyncData('home', () => queryContent('/home').findOne())
	 console.log(66, dataHome.value);

    async function refreshDo() {
        console.log("recebido na iframe");
        
        refresh()

        // forceRerender()
        // componentFlag.value = true
        // componentFlag.value = true
        // rr.value=2
        // refreshComponent()
    }

    if (process.client) {

        if (window.parent){
            // alert('client run script!')
            window.parent.postMessage({"pageid": "home"}, '/');
        }
        window.addEventListener("message", refreshDo, false);

    }
                
</script>