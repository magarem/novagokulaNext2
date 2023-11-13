<template>
   	<!-- Start Portfolio Details Area -->
		<section class="pf-details section" style="margin-top: -60px;">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="inner-content">
							
							<div class="image-slider">
								<Slideshow :items="slideshow_about" />
								<!-- <div class="pf-details-slider">
									<img src="/img/templo1.png" alt="#">
									<img src="/img/templo2.jpeg" alt="#">
								</div> -->
							</div>
							<div class="date" >
								<ul>
									<li style="font-size: 13px;"><span style="font-size: 13px;">Fotografia :</span> <a href="https://www.instagram.com/riozenharehostel/">Marcelo Magalhães</a></li>
									<!-- <li><span>Date :</span> April 20, 2019</li>
									<li><span>Client :</span> Suke Agency</li>
									<li><span>Ags :</span> Typo</li> -->
								</ul>
							</div>
							<div class="body-text">
								<h3>Quem somos</h3>
								<p>FAZENDA NOVA GOKULA - ISKCON BR</p>

<p>Sociedade Internacional para Consciência de Krishna</p>

	<p>A Fazenda Nova Gokula é um santuário natural que oferece aos seus visitantes uma variedade de experiências baseadas no princípio de uma vida simples, natural e saudável e também uma área de preservação ambiental com riquíssima biodiversidade. A comunidade foi criada em 1978 com o intuito de desenvolver a prática de vida simples e pensamento elevado.</p>

		<p>Oferece retiro espiritual em clima monástico com programas no templo, aulas de yoga, culinária vegetariana e vegana, hospedagem em ambiente natural, cursos, terapias ayurvédicas e massagens.</p>
								<!-- <div class="share">
									<h4>Share Now -</h4>
									<ul>
										<li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
									</ul>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Portfolio Details Area --> 
</template>
<script setup>
  import slideshow_about from '../data/slideshow_about.json'
</script>