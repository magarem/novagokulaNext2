<template>
    <html class="no-js" lang="zxx">
      <Head>
        <!-- Meta Tags -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="keywords" content="Site keywords here">
		<meta name="description" content="">
		<meta name='copyright' content=''>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!-- Title -->
        <title>Fazenda Nova Gokula</title>
		
		<!-- Favicon -->
        <Link rel="icon" href="img/favicon.png"/>
		
		<!-- Google Fonts -->
		<Link href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"/>

		<!-- Bootstrap CSS -->
		<Link rel="stylesheet" href="/css/bootstrap.min.css"/>
		<!-- Nice Select CSS -->
		<Link rel="stylesheet" href="/css/nice-select.css"/>
		<!-- Font Awesome CSS -->
        <Link rel="stylesheet" href="/css/font-awesome.min.css"/>
		<!-- icofont CSS -->
        <Link rel="stylesheet" href="/css/icofont.css"/>
		<!-- Slicknav -->
		<Link rel="stylesheet" href="/css/slicknav.min.css"/>
		<!-- Owl Carousel CSS -->
        <Link rel="stylesheet" href="/css/owl-carousel.css"/>
		<!-- Datepicker CSS -->
		<Link rel="stylesheet" href="/css/datepicker.css"/>
		<!-- Animate CSS -->
        <Link rel="stylesheet" href="/css/animate.min.css"/>
		<!-- Magnific Popup CSS -->
        <Link rel="stylesheet" href="/css/magnific-popup.css"/>
		<!-- Medipro CSS -->
        <Link rel="stylesheet" href="/css/normalize.css"/>
        <Link rel="stylesheet" href="/style.css"/>
        <Link rel="stylesheet" href="/css/responsive.css"/>
		<Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
	</Head>
     
      <body>
    	<!-- Preloader -->
        <!-- <div class="preloader">
            <div class="loader">
                <div class="loader-outter"></div>
                <div class="loader-inner"></div>

                <div class="indicator"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div> -->
        <!-- End Preloader -->
     
      <header class="header" >
			<!-- Topbar -->
			<div class="topbar">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-5 col-12">
							<!-- Contact -->
							<ul class="top-Link">
								<!-- <li><a href="#">Sobre</a></li> -->
								<li><a href="comochegar">Como chegar</a></li>
								<li><a href="visitacao">Visitação</a></li>
								<li><a href="fotosevideos">Galeria</a></li>
								<li><a href="faq">Filosofia</a></li>
								<li><i class="fa fa-envelope"></i></li>
								<!-- <li><a href="faq">FAQ</a></li> -->
							</ul>
							<!-- End Contact -->
						</div>
						<div class="col-lg-6 col-md-7 col-12">
							<ul class="top-contact">
								<li><i class="fa fa-envelope"></i><a href="mailto:faleconosco@novagokula.com.br">faleconosco@novagokula.com.br</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- End Topbar -->
			<!-- Header Inner -->
			<div class="header-inner">
				<div class="container">
					<div class="inner">
						<div class="row">
							<div class="col-md-3 col-12 ">
								<!-- Start Logo -->
								<div class="logo mt-1" >
									<div class="row">
										<div class="col-10 col-lg-12">
											<a href="/"><img src="/img/logo2.png" style="_margin-top: -12px; max-width:100%;" alt="#"></a>
										</div>
										<div class="col-2 col-lg-12">
											<div class="_mobile-nav mt-3" @click="showMenu()"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></div>
										</div>
									</div>
								
								</div>
								<!-- End Logo -->
								<!-- Mobile Nav -->
								<!-- <div class="_mobile-nav" @click="showMenu()"><i class="fa fa-bars fa-2x" aria-hidden="true"></i></div> -->
								<!-- End Mobile Nav -->
							</div>
							<div class="col-md-5 col-12">
								<!-- Main Menu -->
								
								<div class="main-menu" :class="showMobileMenu ? 'close-main-menu' : 'main-menu'">
									<nav class="navigation">
										<ul class="menu" :style="showMobileMenu ? 'padding-top:-100px;' : ''" :class="showMobileMenu ? 'slicknav_nav' : 'nav'">
											<li><a href="/">Início</a></li>
											<li><a href="about">Sobre</a></li>
											<li><a href="#">Atrativos <i class="icofont-rounded-down"></i></a>
												<ul class="dropdown">
													<li><a href="templos">Templos</a></li>
													<li><a href="hospedagem">Hospedagem</a></li>
													<li><a href="alimentacao">Alimentação</a></li>
													<li><a href="lazer">Espiritualidade</a></li>
													<li><a href="lazer">Ecologia</a></li>
													<li><a href="lazer">Bem-estar</a></li>
													<li><a href="lojas">Hari Shopping</a></li>
												</ul> 
											</li>
											<!-- <li><a href="#">Notícias <i _class="icofont-rounded-down"></i></a> -->
												<!-- <ul class="dropdown">
													<li><a href="blog-single.html">Blog Details</a></li>
												</ul> -->
											<!-- </li> -->
											<li><a href="eventos">Eventos </a></li>
											<li><a href="contact">Contato </a></li>
										</ul>
									</nav>
								</div>
								<!--/ End Main Menu -->
							</div>
							<div class="col-md-4 col-12">
								<div class="row">
									<div class="col-2 p-0 pt-2" >
										<img class="mr-0" src="/img/prabhupada.jpg" style="_max-width: 90%; ">
									</div>
									<div class="col-10">
										<p class="text-left mt-3 pl-0" style="font-size: 9px; line-height: normal;">Sua Divina Graça A.C. Bhaktivedanta Swami Prabhupada
											Mestre Fundador da Sociedade  Internacional para a Consciência de Krishna</p>
									</div>
												
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Header Inner -->
	  </header>
      
      
      
      <!-- <main style="margin-top: 120px;"> -->
        <slot />
      <!-- </main> -->
   
   
   
   
   
     <!-- Footer Area -->
		<footer id="footer" class="footer ">
			<!-- Footer Top -->
			<div class="footer-top">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Sobre</h2>
								<p>A fazenda abriga o maior templo Hare Krishna da América Latina e com visitação aberta ao público em geral.</p>
								<!-- Social -->
								<ul class="social">
									<li><a href="https://www.facebook.com/FazendaNovaGokula"><i class="icofont-facebook"></i></a></li>
									<li><a href="https://www.instagram.com/novagokula/"><i class="icofont-instagram"></i></a></li>
									<li><a href="https://www.tiktok.com/@novagokula"><i class="icofont-tiktok"></i></a></li>
									<li><a href="https://www.flickr.com/photos/novagokula"><i class="icofont-flickr"></i></a></li>
									<li><a href="https://www.youtube.com/@FazendaNovaGokulaNG"><i class="icofont-flickr"></i></a></li>
								
								
								</ul>
								<!-- End Social -->
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div id="dd" class="single-footer f-Link">
								<h2>Links</h2>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-12">
										<ul >
											<li><a  href="about"><i class="fa fa-caret-right" aria-hidden="true"></i>Sobre nós</a></li>
											<li><a href="comochegar"><i class="fa fa-caret-right" aria-hidden="true"></i>Como chegar</a></li>
											<li><a href="fotosevideos"><i class="fa fa-caret-right" aria-hidden="true"></i>Fotos & vídeos</a></li>
											<li><a href="filosofia"><i class="fa fa-caret-right" aria-hidden="true"></i>Filosofia</a></li>
											<li><a href="faq"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>	
										</ul>
									</div>
									<!-- <div class="col-lg-6 col-md-6 col-12">
										<ul>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Consuling</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Finance</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
											<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>	
										</ul>
									</div> -->
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Endereço</h2>
								<p> Estrada Jesus Antonio de Miranda Bairro: Riberão Grande Pindamonhangaba - São Paulo - Brasil</p>
								<!-- <ul class="time-sidual">
									<li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
									<li class="day">Saturday <span>9.00-18.30</span></li>
									<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
								</ul> -->
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-12">
							<div class="single-footer">
								<h2>Fique por Dentro das Novidades</h2>
								<p>Inscreva-se em nossa newsletter e seja o primeiro a saber sobre eventos, notícias, artigos, e inspirações da nossa comunidade Hare Krishna em Pindamonhangaba. Receba atualizações exclusivas diretamente na sua caixa de entrada."</p>
								<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
									<input name="email" placeholder="Email" class="common-input" onfocus="this.placeholder = ''"
										onblur="this.placeholder = 'Your email address'" required="" type="email">
									<button class="button"><i class="icofont icofont-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Footer Top -->
			<!-- Copyright -->
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-12">
							<div class="copyright-content">
								<p>© Copyright 2023  |  Todos os direitos reservados <a href="https://www.wpthemesgrid.com" target="_blank">novagokula.com.br</a> </p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/ End Copyright -->
		</footer>
		<!--/ End Footer Area -->
      <!-- JAVAScript FILES -->
      <Script src="/js/jquery.min.js" is:inline></Script>
      <Script src="/js/bootstrap.bundle.min.js" is:inline></Script>
      <Script src="/js/Headroom.js" is:inline></Script>
      <Script src="/js/jQuery.headroom.js" is:inline></Script>
      <Script src="/js/slick.min.js" is:inline></Script>
      <Script src="/js/custom.js" is:inline></Script>
   
   
   

      <!-- jquery Min JS -->
      <Script src="/js/jquery.min.js"></Script>
		<!-- jquery Migrate JS -->
		<Script src="/js/jquery-migrate-3.0.0.js"></Script>
		<!-- jquery Ui JS -->
		<Script src="/js/jquery-ui.min.js"></Script>
		<!-- Easing JS -->
        <Script src="/js/easing.js"></Script>
		<!-- Color JS -->
		<Script src="/js/colors.js"></Script>
		<!-- Popper JS -->
		<Script src="/js/popper.min.js"></Script>
		<!-- Bootstrap Datepicker JS -->
		<Script src="/js/bootstrap-datepicker.js"></Script>
		<!-- Jquery Nav JS -->
        <Script src="/js/jquery.nav.js"></Script>
		<!-- Slicknav JS -->
		<Script src="/js/slicknav.min.js"></Script>
		<!-- ScrollUp JS -->
        <Script src="/js/jquery.scrollUp.min.js"></Script>
		<!-- Niceselect JS -->
		<Script src="/js/niceselect.js"></Script>
		<!-- Tilt Jquery JS -->
		<Script src="/js/tilt.jquery.min.js"></Script>
		<!-- Owl Carousel JS -->
        <Script src="/js/owl-carousel.js"></Script>
		<!-- counterup JS -->
		<Script src="/js/jquery.counterup.min.js"></Script>
		<!-- Steller JS -->
		<Script src="/js/steller.js"></Script>
		<!-- Wow JS -->
		<Script src="/js/wow.min.js"></Script>
		<!-- Magnific Popup JS -->
		<Script src="/js/jquery.magnific-popup.min.js"></Script>
		<!-- Counter Up CDN JS -->
		<!-- <Script src="http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></Script> -->
		<!-- Bootstrap JS -->
		<Script src="/js/bootstrap.min.js"></Script>
		<!-- Main JS -->
		<Script src="js/main.js"></Script>
		<!-- <Script src="https://kit.fontawesome.com/2002a53245.js" crossorigin="anonymous"></Script> -->
	</body>
    </html>
  </template>
  <script setup>
      const route = useRoute()
      console.log(route.name);
      const path=route.name||''

	  let showMobileMenu = ref(false)
	  const showMenu = () => {
		// alert(showMobileMenu.value)
		showMobileMenu.value = !showMobileMenu.value
	  }
  </script>
  <style lang="scss" scoped>
  :root {
				--main-bg-color: hwb(14 42% 4%);
			}
			.btn {
				color:#fff;
				background:var(--main-bg-color);
			}

      h1 {
          font-family: 'Crimson Pro', serif;
          font-size: 48px;
      }
      .h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 10px;
      }
  
      .tipo1 {
          font-family: Georgia, serif !important;
          font-size: 30px !important;
      }
        .f-link  {
            font-size: 100px;
            color: red;
        }

        .top-Link li {
                display: inline-block;
                margin-right:15px;
				font-size: 12px;
				color: rgb(34, 34, 34);
        }
        
            .footer {
                color: white;
            }
            
			.nav-menu {
				background-color: white;
				}
			.nav-content {
			display: flex;
			justify-content: space-between;
			padding: 10px 30px;
			align-items: center;
			}
			.nav-items {
				display: flex;
				justify-content: center;
				align-items: center;
				list-style: none;
				margin: 0;
				padding: 0;
				li {
					padding: 0 10px;
				}
			}
			i {
			display: none;
			}
			
				@media screen and (max-width: 768px) {
				.nav-menu {
					padding-top: 10px;
					position: absolute;
					width: 100%;
				}
				.open-menu {
					opacity: 1;
					height: 150px;
				}
				.closed-menu {
					opacity: 0;
					height: 0;
					padding: 0;
				}
				.nav-content {
					flex-direction: column;
					z-index: 100;
					position: relative;
					transition: all 0.2s ease-out;
				}
				.nav-items {
					flex-direction: column;
				}
				i {
					display: block;
					text-align: right;
					padding: 0 10px 10px 0;
					}
			}
  </style>