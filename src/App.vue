<template>
	<div id="app">
		<b-container>
			<b-navbar toggleable="md" type="light">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav id="navigation" class="mx-auto" fill align="center">
						<b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Personal Storage</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Business Storage</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Why Us?</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Self-Storage Blog</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Own ASelf-Storage Facility</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Contact Us</b-nav-item>
						<b-nav-item to="/" exact exact-active-class="active">Reserve Online</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>

			<b-row align-v="center">
				<b-col md="6" align-self="center">
					<b-img id="brand-logo" src="./assets/white-and-black-warehouse.png" width="175px" height="80px" left></b-img>
				</b-col>

				<b-col md="6" align-self="center" align-h="end" class="my-auto">
					<b-row>
						<b-col xs="4">
							<b-form-select v-model="country" :options="countryOptions" class="mr-2"></b-form-select>
						</b-col>
						<b-col xs="4">
							<b-form-select v-model="language" :options="languageOptions"></b-form-select>
						</b-col>
						<b-col xs="4" class="social">
							<router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
							<router-link to="/"><i class="fab fa-twitter"></i></router-link>
							<router-link to="/"><i class="fab fa-google-plus-g"></i></router-link>
						</b-col>
					</b-row>
					
					<b-row>
						<b-col md="12">
							<p class="mb-0">Make Our Space Your Space <i class="fab fa-whatsapp"></i> +852 8202 0811</p>
						</b-col>
					</b-row>
				</b-col>
			</b-row>


			<router-view/>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			country: 'United States',
			language: 'en',
			countryOptions: [
				{ value: 'United States', text: 'United States' },
				{ value: 'Netherlands', text: 'Netherlands' }
			],
			languageOptions: [
				{ value: 'en', text: 'EN' }
			]
		}
	},
	methods: {
		beforeEnter: function () { // make scroll position always on top every page transition
			this.$root.$emit('scrollBeforeEnter')
		}
	}
};

</script>

<style lang="scss">
	// :root {
	// 	--breakpoint-xs: 0;
	// 	--breakpoint-sm: 375px;
	// 	--breakpoint-md: 750px;
	// 	--breakpoint-xl: 1170px;
	// }
	#navigation li a:hover {
		color: $primary;
	}

	@media screen and (max-width: 749px) {
		#navigation {
			background-color: $primary;
		}
	}

	.carousel-center {
		.carousel-caption {
			top: 50%;
			bottom: auto;
		}
	}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #333333;
}

a:hover {
	text-decoration: none;
}

#navigation li a {
	color: #3D3D3D;
	font-size: 13px;
}

#brand-logo {
	border: 2px solid #3D3D3D;
}

.social {
	font-size: 22px;
	color: #b8860b;
}

.social svg {
	margin-left: 10px;
	margin-right: 10px;
}
</style>
