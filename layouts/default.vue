<template>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="deScription" content="" />
			<meta name="author" content="" />
			<title>Creative - Start Bootstrap Theme</title>
			<!-- Favicon-->
			<Link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
			<!-- Bootstrap Icons-->
			<Link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
			<!-- Google fonts-->
			<Link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
			<Link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
			<!-- SimpleLightbox plugin CSS-->
			<Link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
			<!-- Core theme CSS (includes Bootstrap)-->
			<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			<Link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
			<Link href="css/styles.css" rel="stylesheet" />
		</head>
		<body id="page-top">
			<!-- Navigation-->
		   
			<nav id="mainNav" class="navbar navbar-expand-md navbar-dark fixed-top" >
				<div class="container"  _style="background-color: #d36858;">
				  <a class="navbar-brand" href=""><img  id="logo" src="assets/img/logo2.png" ></a>
				  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span> Menu
				  </button>
				  <div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0" style="padding-left: 10px; ">
						<li class="nav-item"><a class="nav-Link" href="/" >HOME</a></li>
						<li class="nav-item"><a class="nav-Link" href="generic2?id=about" >SOBRE</a></li>
						<li class="nav-item dropdown"><a class="nav-Link dropdown-toggle" _href="atrativos"  href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >ATRATIVOS</a>
							<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
								<li><a class="dropdown-item" href="generic?type=templos">Templos</a></li>
								<li><a class="dropdown-item" href="generic?type=hospedagem">Hospedagens</a></li>
								<li><a class="dropdown-item" href="#">Alimentação</a></li>
								<li><a class="dropdown-item" href="#">Espiritualidade</a></li>
								<li><a class="dropdown-item" href="#">Bem estar </a></li>
								<li><a class="dropdown-item" href="#">Hari shopping</a></li>
							</ul>
						</li>
						<li class="nav-item"><a class="nav-Link" href="generic?type=eventos" >EVENTOS</a></li>
						<li class="nav-item"><a class="nav-Link" href="comochegar" >LOCALIZAÇÃO</a></li>
						<li class="nav-item"><a class="nav-Link" href="faq" >FILOSOFIA</a></li>
						<li class="nav-item"><a class="nav-Link" href="contact" >CONTATO</a></li>
					
					</ul>
					<!-- <form class="d-flex">
					  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					  <button class="btn btn-outline-success" type="submit">Search</button>
					</form> -->
				  </div>
				</div>
			</nav> 
			  <main>
				
				<slot />
			  </main>
			  
			<!-- Footer-->
			 <!-- Footer Area -->
			 <nuxt-layout name="footer"></nuxt-layout>
			
			<!--/ End Footer Area -->







			<!-- Bootstrap core JS-->
			<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
			<!-- SimpleLightbox plugin JS-->
			<Script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></Script>
			<!-- Core theme JS-->
			<Script src="js/scripts.js"></Script>
			<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
			<!-- * *                               SB Forms JS                               * *-->
			<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
			<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
			<Script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></Script>
			<Script>
	
				window.onscroll = function() {scrollFunction()};
				// alert()
				// const startMainNavClassName = document.getElementById("mainNav").style.className
				function scrollFunction() {
					
					if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
						// document.getElementById("mainNav").style.padding = "10px 10px";
						// document.getElementById("logo").style.width = "150px";
						document.getElementById("mainNav").classList.add('navbar-shrink');
					} else {
						// document.getElementById("mainNav").className = startMainNavClassName;
						// document.getElementById("logo").style.width = "350px";
						document.getElementById("mainNav").classList.remove('navbar-shrink');

					}

				}

			
				
			</Script>
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
		a {
		text-decoration: none;
		}
	// body { padding-top: 60px; }

	:root {
			--main-bg-color: hwb(14 42% 4%);
		}
	.btn {
		color:#fff;
		background:var(--main-bg-color);
	}

	h1 {
		font-family: 'Crimson Pro', serif;
		font-size: 40px;
	}
	.h2 {
		font-family: 'Crimson Pro', serif;
		font-size: 10px;
	}

	.tipo1 {
		font-family: Georgia, serif !important;
		font-size: 30px !important;
	}
	.f-Link  {
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
	
	// i {
	//  display: none;
	// }
	@media screen and (min-width: 100px) {
		header  {
			margin-top: 1000px;
		}
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
				// i {
				// 	display: block;
				// 	text-align: right;
				// 	padding: 0 10px 10px 0;
				// 	}
	}

	.navbar {
		/* background-color: rgb(240, 18, 18);  */
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 15px; */
	}
	.social-icon {
		margin: 0 10px;
		color: #495057;
		font-size: 20px;
	}
	.nav .midias {
		display: inline;
		font-size: 20px;
		padding: 20px;
	}
	.social-icons {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.social-icons a {
		margin-left: 10px;
	}

	.nav-item .nav-Link {
		font-family: "Montserrat", Helvetica, Arial, sans-serif;
		line-height: 14px;
		font-weight: 700;
		font-style: normal;
	}


	.page-section2 {
		padding: 50px 0px 50px 0px;
	}

	#mainNav .navbar-nav .nav-item .nav-Link {
		color:white;
		font-size: 13px;
		padding: 0 1rem;
		animation: changeBackgroundColor 7s infinite; /* propriedade de animação */
	}
	.blog .single-news img {
		width: 100%;
		margin: 0;
		padding: 0;
		-webkit-transition: all 0.4s ease;
		-moz-transition: all 0.4s ease;
		transition: all 0.4s ease;
	}

	.footer {
		padding-top: 30px;
		background-color: var(--main-bg-color);
	}

	#footer h2 {
		padding-bottom: 10px;
	}

	#eventos img {
		width: 100%; /* You can set the dimensions to whatever you want */
		height: 500px;
		object-fit: cover;
	}

	h3, h2, p {
		font-family: Montserrat;
	}

	h3 {
		font-size: 40px;
	}

	#logo {
		width: 350px;
	}

	.navbar {
		/* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); */
		/* background-color: rgba(231, 83, 38, 0.5); */
		transition: background-color 0.2s ease;
	}

	#mainNav {
		background-color: rgba(211,151,88, 0.1) !important;
	}

	#mainNav.navbar-shrink {
		/* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
		/* rgb(211,151,88) */
		background-color: rgba(211,151,88, 1) !important;
		
		/* background-color: #fff; */
		/* background-color: #D39758; */
	}

	

	.navbar {
		background-color: #d39758;
	}

	#mainNav.navbar-shrink {
		background-color: rgba(211,151,88, 1) !important;
	}
	#mainNav.navbar-shrink #logo {
		max-width: 200px;
	}
	

	@media only screen
		and (min-width: 375px)
		and (max-width: 667px)
		and (-webkit-min-device-pixel-ratio: 2)
		and (orientation: portrait){
			#mainNav {
				/* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
				/* rgb(211,151,88) */
				background-color: rgba(211,151,88, 1) !important;
			
				/* background: rgb(158,89,21,0.1);
				background: linear-gradient(180deg, rgba(158,89,21,.1) 79%, rgba(250,183,78,0.2) 94%, rgba(255,255,255,0) 100%); */
				/* background-color: #fff; */
				/* background-color: #D39758; */
			}

			header.masthead {
				/* margin-top: 1000px; */
				/* padding-top: 20rem; */
			}

			.nav-item {
				padding-top: 20px;
			}
			#logo {
				padding-left: 10px;
				width: 100%;
			}
		
		}

		:root {
			// --main-bg-color: hwb(14 42% 4%);
			--main-bg-color: rgba(211,151,88, 1);
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
		.f-Link  {
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

		// i {
		// 	display: none;
		// }
		
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
			// i {
			// 	display: block;
			// 	text-align: right;
			// 	padding: 0 10px 10px 0;
			// 	}
		}
</style>