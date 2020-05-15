<template>
	<div id="header">
		<b-container>
			<b-navbar toggleable="md" type="light">
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav id="navigation" class="mx-auto" fill align="center">
						<b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
						<b-nav-item to="/personal-storage" exact exact-active-class="active">Personal Storage</b-nav-item>
						<b-nav-item to="/bussiness-storage" exact exact-active-class="active">Business Storage</b-nav-item>
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
					<b-img id="brand-logo" src="@/assets/white-and-black-warehouse.png" width="175px" height="80px"></b-img>
				</b-col>

				<b-col md="6" align-self="center" class="my-auto">
					<b-row style="display: block;">
						<b-form-select v-model="country" :value="country" :options="countries" size="sm" class="w-25 mr-2"></b-form-select>
						<b-form-select v-model="language" :options="languages" size="sm" class="w-25 mr-3"></b-form-select>
						<span class="w-25 social">
							<router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
							<router-link to="/"><i class="fab fa-twitter"></i></router-link>
							<router-link to="/"><i class="fab fa-google-plus-g"></i></router-link>
						</span>
					</b-row>
					
					<b-row>
						<b-col>
							<p class="mb-0">Make Our Space Your Space <i class="fab fa-whatsapp"></i> +852 8202 0811</p>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data () {
		return {
			countries: [
				{
					value: 'usa',
					text: 'United States'
				},
				{
					value: 'uk',
					text: 'United Kingdom'
				},
				{
					value: 'de',
					text: 'Germany'
				},
				{
					value: 'ae',
					text: 'United Arab Emirates'
				},
			],
			languages: [
				{
					value: 'ar',
					text: 'Arabic'
				},
				{
					value: 'de',
					text: ''
				},
				{
					value: 'en',
					text: 'English'
				}
			],
			language: 'en',
			country: 'us',
		}
	}
}
</script>

<style scoped>
#navigation li a {
	color: #3D3D3D;
	font-size: 13px;
}

#brand-logo {
	border: 2px solid #3D3D3D;
}

@media screen and (min-width: 750px) {
	#brand-logo {
		float: left;
		margin-left: 25px;
	}
}

@media screen and (max-width: 749px) {
	#brand-logo {
		float: inherit;
		margin-left: unset;
	}
}

.social {
	font-size: 22px;
	color: #b8860b;
	text-align: right;
}

.social svg {
	margin-left: 10px;
	margin-right: 10px;
}
</style>