<template>
    <nav id="mainNav" class="navbar navbar-shrink navbar-expand-md navbar-dark fixed-top" >
        <div class="container"  _style="background-color: #d36858;">
        <a class="navbar-brand" href=""><img  id="logo" src="/img/logo2.png" ></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0" style="padding-left: 10px; ">
                    <li class="nav-item"><a class="nav-Link" href="/" >HOME</a></li>
                    <!-- <li class="nav-item"><a class="nav-Link" href="generic2?id=about" >SOBRE</a></li> -->
                    <li class="nav-item dropdown"><a class="nav-Link dropdown-toggle" _href="atrativos"  href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >SOBRE</a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item" href="generic2?id=about">História</a></li>
                            <!-- <li><a class="dropdown-item" href="generic?type=hospedagem">Visitação</a></li> -->
                            <li><a class="dropdown-item" href="comochegar" >Localização</a></li>
                            <li><a class="dropdown-item" href="generic2?id=filosofia" >Filosofia</a></li>
                            <li><a class="dropdown-item" href="generic2?id=ofundador" >O fundador</a></li>
                            <li><a class="dropdown-item" href="generic2?id=acharyadeva" >Acharyadeva</a></li>
                            <li><a class="dropdown-item" href="generic2?id=mahamantra" >Mahamantra</a></li>

                            

                        </ul>
                    </li>
                    <li class="nav-item dropdown"><a class="nav-Link dropdown-toggle" _href="atrativos"  href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >ATRATIVOS</a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a class="dropdown-item" href="generic?type=templos">Templos</a></li>
                            <li><a class="dropdown-item" href="generic?type=hospedagem">Hospedagens</a></li>
                            <li><a class="dropdown-item" href="generic?type=alimentacao">Alimentação</a></li>
                            <!-- <li><a class="dropdown-item" href="#">Espiritualidade</a></li> -->
                            <!-- <li><a class="dropdown-item" href="#">Bem estar </a></li> -->
                            <li><a class="dropdown-item" href="#">Hari shopping</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-Link" href="generic?type=eventos" >EVENTOS</a></li>
                    <li class="nav-item"><a class="nav-Link" href="galeria">GALERIA</a></li>
                
                    <li class="nav-item"><a class="nav-Link" href="contact" >CONTATO</a></li>
                
                </ul>
                <!-- <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form> -->
            </div>
        </div>
    </nav> 
</template>

<style lang="scss" scoped>
	h3 {
    color: aqua;
}
	.bg {
		background-color: #EFD0A1;
	}
		
	a {
	text-decoration: none;
	}
// body { padding-top: 100px; }

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
	background-color: rgba(211,151,88, 1);
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
	background-color: rgba(211,151,88, 1)
	// background-color: var(--main-bg-color);
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
		// background-color: rgba(211,151,88, 1);
		color: white;
		background-color: rgba(211,151,88, 1)
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