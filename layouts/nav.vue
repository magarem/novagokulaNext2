<template>
    <nav id="mainNav" v-if="navbar" class="navbar navbar-shrink  navbar-expand-md _navbar-dark fixed-top" >
        <div class="container"  _style="background-color: #d36858;">
			
			<a class="navbar-brand" :href="navbar.logo.link"><img  id="logo" :src="navbar.logo.img" ></a>
			
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span> Menu
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav me-auto mb-2 mb-md-0" style="padding-left: 10px; text-transform: uppercase;">
					<template v-for="item in navbar.menu">
						<li class="nav-item" v-if="!item.sub">
							<a class="nav-Link" :href="item.link">{{ item.name }}</a>
						</li>
						<li v-else class="nav-item dropdown">
							<a class="nav-Link dropdown-toggle" _href="atrativos"  href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ item.name }}</a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<li v-for="subItem in item.sub" style="font-size: 13px;">
									<a class="dropdown-item" :href="subItem.link">{{ subItem.name }}</a>
								</li>
							</ul>
						</li>
					</template>
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

<script setup>
	import data from "~/public/config.json"
	const navbar = data.topbar
</script>