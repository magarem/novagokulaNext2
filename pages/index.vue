<template>
	<header class="masthead_ mh">
		<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/slideshow/slide1.jpeg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="/images/slideshow/slide8.png" class="d-block w-100" alt="...">
      </div>
      <!-- <div class="carousel-item">
        <img src="/img/slide4.png" class="d-block w-100" alt="...">
      </div>  -->
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
</div>
	</header>

	<section class="page-section bg-primary"  id="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<h2 class="text-white mt-0"></h2>
						<iframe width="100%" height="315" src="https://www.youtube.com/embed/Ir6E7wEcJfE?si=PV-68z2bSndZXJna" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						<p class="text-white-75 mb-4"></p>
					</div>
				</div>
				<div class="col-lg-6 col-sm-12">
					<div class="container">
						<h2 class="text-white mt-0">Nova Gokula</h2>
						<!-- <hr class="divider divider-light" /> -->
						<p class="text-white-75 mb-4">
							A Fazenda Nova Gokula é um santuário natural que oferece aos seus visitantes uma variedade de experiências baseadas no princípio de uma vida simples, natural e saudável e também uma área de preservação ambiental com riquíssima biodiversidade. A comunidade foi criada em 1978 com o intuito de desenvolver a prática de vida simples e pensamento elevado.
						</p>  
						<a class="btn btn-light btn-xl" href="#services">Saiba mais</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Prabhupada-->
	<section class="page-section_ bg-primary_"  id="about" _style="margin-top: -70px;">
		<div class="_container">
			<img src="/img/1.png" class="w-100 img-fluid">
		</div>
	</section>
<!-- eventos-->
<div id="eventos" style="padding-top: 30px; padding-bottom: 50px; background-color: #E9BA86;">
		<h5 class="mb-4 text-center p-3" style="margin-top: 0px; margin-bottom: 0px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Próximos eventos</h5>
		<div class="container-fluid _p-0">
			<div class="container align-items-md-stretch mb-4 _mt-5">
				<div class="h-100 w-100 p-4 rounded-3" _style="background-color:bisque;">
					<!-- <h5>Opções</h5> -->
					<!-- <div class="row"> -->
					<div class="row shadow-sm_ " v-if="itens" >
						<h5 class="_text-center mb-3 pt-4" v-if="id">Outros</h5>
						<div class="col-md-4 mb-4"  v-for="item in itens">
							<Cardgrid target="templos" :item="item" type="eventos"/>
						</div>
					</div>
					<!-- </div> -->
				</div>
	   </div>
		</div>
	</div>
	<!-- Call to action-->
	<section class="page-section bg-dark text-white p-0" s_tyle="margin-top: 50px;">
		<div class="container _px-4 _px-lg-5 text-center">
		<img src="/img/doacao.png"  class="img-fluid">
		</div>
	</section>
	
	<section class="blog section" id="opinioes" style="_margin-top: 20px; padding-top: 30px; padding-bottom: 50px; background-color: rgb(238, 217, 159);">
	<h5 class="mb-5 text-center p-3" style="_margin-top: -25px; margin-bottom: 0px; _background-color:antiquewhite; font-size: 25px; color:#181201;">Opiniões de nossos visitantes</h5>
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
			margin-top: 145px;
		}
	}
</style>
<script setup lang="ts">

    // definePageMeta({
    //     layout: 'default2'
    // })

    const route = useRoute()
    const id = route.query.id
    const type = route.query.type
    
    console.log(11, id)
    let hasLoaded = false

    // const { data: meta } = await useAsyncData('home', () => queryContent('/' + type + '/meta').findOne())
  
    // console.log('meta:', meta.value);
    
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
                 
    // const item = data.value.filter( x => 
    // x._path == id
    // )[0];

    // console.log('id-->', item);
                
</script>