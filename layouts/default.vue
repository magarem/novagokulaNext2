<template>
	<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="deScription" content="" />
		<meta name="author" content="" />
		<title>Creative - Start Bootstrap Theme</title>
		<!-- Favicon-->
		<Link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
		<!-- Bootstrap Icons-->
		<!-- <Link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" /> -->
		<!-- Google fonts-->
		<Link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
		<Link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
		<!-- SimpleLightbox plugin CSS-->
		<!-- <Link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" /> -->
		<!-- Core theme CSS (includes Bootstrap)-->
		<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
		<Link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
		<Link href="/css/styles.css" rel="stylesheet" />
	</head>
	<body id="page-top">
		<!-- Navigation-->
		<nuxt-layout name="nav"></nuxt-layout>
		<main class="bg" >
			<slot />
		</main>
		<!-- Footer-->
		 <!-- Footer Area -->
		<nuxt-layout name="footer"></nuxt-layout>
		<!--/ End Footer Area -->
		<!-- Bootstrap core JS-->
		<!-- <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script> -->
		<!-- SimpleLightbox plugin JS-->
		<!-- <Script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></Script> -->
		<!-- Core theme JS-->
		<!-- <Script src="js/scripts.js"></Script> -->
		<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
		<!-- * *                               SB Forms JS                               * *-->
		<!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
		<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
		<!-- <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></Script> -->
		
	</body>
</html>
</template>
<script setup>
import { ModalsContainer } from 'vue-final-modal'

const route = useRoute()
console.log(route.name);
const path=route.name||''
</script>
<style lang="scss" >

	:root {
			// --main-bg-color: hwb(14 42% 4%);
			--main-bg-color: #F5CCA0;
		}

	h1, h2, h3, h4, h5, p, li {
		font-family: Montserrat;
		color: #fff;
	}
	
	p, li {
		font-size: 18px;
		color: #3e3737;
	}

	h2 {
		font-size: 22px;
	}

	h3 {
		font-size: 20px;
	}

	a {
		text-decoration: none;
	}

	.bg {
		background-color: #DBAE58;
		padding-bottom: 50px;
		// background-color: #EBAA83;
	}
		
	.bread {
		margin-top: 70px;
		padding-left: 3vw; 
		padding-top: 12px; 
		padding-bottom: 12px; 
		margin-bottom: 0px; 
		background-color:#DBBE58; 
		font-size: 17px;
	}

	.bread a {
		color: #635c5c;
	}

	.section {
		padding-top: px;
	}

	#footer {
		color: white;
        padding-top: 30px;
		background-color: var(--main-bg-color);
	}

    #footer h2 {
        font-size: 20px;
        color:#181201;
		padding-bottom: 10px;
	}

    #footer p {
        font-size: 17px;
        color:#604500;
		padding-bottom: 10px;
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

</style>