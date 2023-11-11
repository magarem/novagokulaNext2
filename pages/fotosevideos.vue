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
									<img src="img/templo1.png" alt="#">
									<img src="img/templo2.jpeg" alt="#">
								</div> -->
							</div>
							<!-- <div class="date">
								<ul>
									<li><span>Category :</span> Heart Surgery</li>
									<li><span>Date :</span> April 20, 2019</li>
									<li><span>Client :</span> Suke Agency</li>
									<li><span>Ags :</span> Typo</li>
								</ul>
							</div>-->
							<div class="body-text">
								<h3>Fotos & vídeos</h3>
								<p>Localizada no Bairro Ribeirão Grande, aos pés da Serra da Mantiqueira, a fazenda abriga o maior templo Hare Krishna da América Latina e com visitação aberta ao público em geral.
								<p>A comunidade foi criada em 1978 por um grupo de devotos de Krishna, reunidos em torno de um ideal espiritual. Atualmente a comunidade abriga sacerdotes, monges, estudantes e famílias inteiras em diferentes casas ou em alojamentos divididos em três vilas. A fazenda hoje faz parte do cenário turístico da região tanto pela beleza de seu templo e de sua cultura quanto pela natureza que lhe cerca. Integra a Área de Proteção Ambiental da serra da Mantiqueira, o local também é uma área de soltura e devolução de animais silvestres.</p>	</p>
								<p>O local oferece opções de passeios monitorados pelos próprios devotos tanto no templo e outras instalações, como nas trilhas. Também possui local para camping, pousada e chalés, além de iguarias vegetarianas da culinária védica, nas lanchonetes e no restaurante da fazenda. Eu recomendo no Quiosque Govinadji provar a coxinha de jaca e o salgadinho de banana ou mandioca, são muito bons.</p>
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