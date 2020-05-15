<template>
	<div id="home">
		<Header />

		<b-container class="mt-5">
			<b-row align-v="stretch">
				<b-col md="6" class="top-menu">
					<router-link to="/personal-storage">
						<h5 class="text-left font-weight-bold">Personal Storage</h5>
						<p class="small text-left">Find out more about storing personal items and how to reserve a storage room online.</p>
					</router-link>
				</b-col>
				<b-col md="6" class="top-menu">
					<router-link to="/bussiness-storage">
						<h5 class="text-left font-weight-bold">Bussiness Storage</h5>
						<p class="small text-left">Create more space in your place of bussiness, simply request a quote now</p>
					</router-link>
				</b-col>
			</b-row>
		</b-container>

		<b-container style="border: 1px solid #B8860B;">
			<b-row>
				<b-carousel
					id="home-carousel"
					:interval="4000"
					background="#FFFFFF"
					indicators
					class="carousel-center"
					style="min-width: 100%;">
					<b-carousel-slide 
						img-src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
						fluid-grow
						style="max-height: 480px;">
						<div class="d-flex h-100 w-100 align-items-center justify-content-center">
							<div class="w-100">
								<h1 class="text-uppercase">delicious</h1>
								<h3 class="font-italic">cake is our signature product</h3>
							</div>
						</div>
					</b-carousel-slide>
					
					<b-carousel-slide 
						img-src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
						fluid-grow
						style="max-height: 480px;">
						<div class="d-flex h-100 w-100 align-items-center justify-content-center">
							<div class="w-100">
								<h1 class="text-uppercase">delicious</h1>
								<h3 class="font-italic">cake is our signature product</h3>
							</div>
						</div>
					</b-carousel-slide>
					
					<b-carousel-slide 
						img-src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
						fluid-grow
						style="max-height: 480px;">
						<div class="d-flex h-100 w-100 align-items-center justify-content-center">
							<div class="w-100">
								<h1 class="text-uppercase">delicious</h1>
								<h3 class="font-italic">cake is our signature product</h3>
							</div>
						</div>
					</b-carousel-slide>
				</b-carousel>
			</b-row>

			<b-row class="my-3">
				<b-col sm="6" offset-sm="6" class="text-right">
					<b-button variant="primary" to="/" size="sm">Storage Calculator ></b-button>
				</b-col>
				<b-col sm="6" offset-sm="6" class="text-right">
					<b-button variant="primary" class="mt-2" to="/" size="sm">Reserve Your Space ></b-button>
				</b-col>
			</b-row>

			<b-row>
				<b-card-group>
					<b-card
						title="Your Promotions"
						img-src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"
						img-alt="Your Promotions"
						img-top
						style="margin: 0 5px; border: 1px solid #B8860B;"
						>
						<b-card-text>Find out how much you can save on your lease.</b-card-text>
					</b-card>

					<b-card
						title="Your Packaging"
						img-src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"
						img-alt="Your Packaging"
						img-top
						style="margin: 0 5px; border: 1px solid #B8860B;"
						>
						<b-card-text>Buy your boxes and packaging materials here.</b-card-text>
					</b-card>

					<b-card
						title="Your Bill Payment"
						img-src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"
						img-alt="Your Bill Payment"
						img-top
						style="margin: 0 5px; border: 1px solid #B8860B;"
						>
						<b-card-text>Pay the bill for you current storage rental online.</b-card-text>
					</b-card>

					<b-card
						title="Your Nearest Store"
						img-src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"
						img-alt="Your Nearest Store"
						img-top
						style="margin: 0 5px; border: 1px solid #B8860B;"
						>
						<b-card-text>Find where our stores are located in your country.</b-card-text>
					</b-card>
				</b-card-group>
			</b-row>
		</b-container>

		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Home',
	components: {
		Header,
		Footer
	},
	data () {
		return {

		}
	}
}
</script>

<style scoped>
.top-menu {
	border: 1px solid #B8860B;
	padding: 15px;
	width: 100%;
	border-radius: 15px 15px 0 0;
}

.top-menu a {
	color: #3D3D3D;
}

@media screen and (max-width: 375px) {
	.top-menu {
		margin-top: 15px;
		border-radius: unset;
	}
}

#home-carousel h1 {
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	transform: scaleX(1.1);
	transform-origin: center;
	letter-spacing: 2.5px;
}

#home-carousel h3 {
	background-color: #FFFFFF;
	opacity: 0.5;
	color: #3D3D3D;
	padding: 5px 0;
}

.card-title {
	font-size: 18px;
	font-weight: 600;
	text-align: left;
}

.card-text {
	font-size: 12px;
	text-align: left;
}
</style>
