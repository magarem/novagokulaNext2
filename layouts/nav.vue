<template>
    <nav id="mainNav" class="navbar navbar-shrink  navbar-expand-md _navbar-dark fixed-top" >
        <div class="container"  _style="background-color: #d36858;">
			<a class="navbar-brand" href="/"><img  id="logo" src="/img/logo2.png" ></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span> Menu
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav me-auto mb-2 mb-md-0" style="padding-left: 10px; ">
					<li class="nav-item"><a class="nav-Link" href="/" >HOME</a></li>
					<!-- <li class="nav-item"><a class="nav-Link" href="generic2?id=about" >SOBRE</a></li> -->
					<li class="nav-item dropdown"><a class="nav-Link dropdown-toggle" _href="atrativos"  href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >SOBRE</a>
						<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
							<li><a class="dropdown-item" href="/generic2?id=about">Quem somos</a></li>
							<li><a class="dropdown-item" href="/generic2?id=historia">História</a></li>
							<!-- <li><a class="dropdown-item" href="generic?type=hospedagem">Visitação</a></li> -->
							<li><a class="dropdown-item" href="/generic2?id=acharyadeva" >O fundador</a></li>
							<li><a class="dropdown-item" href="/generic2?id=prabhupada" >Srila Prabhupada</a></li>
							<li><a class="dropdown-item" href="/generic2?id=instituicao" >ISKCON</a></li>

							<li><a class="dropdown-item" href="/generic2?id=mahamantra" >O Mantra</a></li>
							<li><a class="dropdown-item" href="/generic2?id=filosofia" >Filosofia</a></li>
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
					<!-- <li class="nav-item"><a class="nav-Link" href="generic?type=galeria">GALERIA</a></li> -->
					<li class="nav-item"><a class="nav-Link" href="generic2?id=comochegar">COMO CHEGAR</a></li>
					<!-- <li><a class="dropdown-item" href="generic?type=hospedagem">Visitação</a></li> -->
					<li class="nav-item"><a class="nav-Link" href="generic2?id=contact" >CONTATO</a></li>
				
				</ul>
			</div>
        </div>
    </nav> 
</template>

<style lang="scss" scoped>
	
	:root {
		--main-bg-color: hwb(14 42% 4%);
	}

	.navbar {
		/* background-color: rgb(240, 18, 18);  */
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 15px; */
	}

	.nav-item .nav-Link {
		font-family: "Montserrat", Helvetica, Arial, sans-serif;
		line-height: 14px;
		font-weight: 700;
		font-style: normal;
	}

	#mainNav .navbar-nav .nav-item .nav-Link {
		// color:white;
		color:rgb(68, 57, 57);
		font-size: 13px;
		padding: 0 1rem;
		animation: changeBackgroundColor 7s infinite; /* propriedade de animação */
	}

	
	#mainNav.navbar-shrink {
		// background-color: rgba(211,151,88, 1) !important;
		// background-color: red;
		// background-color: #EBAA83;
		background-color: #F5CCA0;
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
			// background-color: rgba(211,151,88, 1) !important;
		}
		.nav-item {
			padding-top: 20px;
		}
		
		#logo {
			padding-left: 10px;
			width: 100%;
		}
	}
	
	
</style>