<template>
	<div id="personal-storage" class="mt-4">
		<b-container>
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

		<b-container class="pt-4" style="border-width: 0 1px 1px 1px; border-style: solid; border-color: #B8860B;">
			<b-row>
				<b-col md="4">
					<h6 class="text-left font-weight-bold">Find Your Nearest Your Space</h6>
					<b-form inline>
						<b-form-select
							:value="null"
							:options="locations"
							class="w-75 mr-2"></b-form-select>
						<b-button type="submit" variant="primary">Find ></b-button>
					</b-form>
				</b-col>
				<b-col md="5">
					<h6 class="text-left font-weight-bold">Storing Personal Items</h6>
					<ul>
						<li>I'm moving home</li>
						<li>I'm renovating my home</li>
						<li>I need extra space at home</li>
						<li>I need temporary storage</li>
					</ul>
				</b-col>
				<b-col md="3">
					<b-col md="9" offset-md="3" align-self="end">
						<b-button size="sm" variant="primary" class="my-2" block to="/">Storage Calculator ></b-button>
						<b-button size="sm" variant="primary" class="my-2" block to="/">Get Your Quote ></b-button>
						<b-button size="sm" variant="primary" class="my-2" block to="/">Reserve Your Space ></b-button>
					</b-col>
				</b-col>
			</b-row>

			<b-row class="my-1">
				<b-carousel
					id="home-carousel"
					:interval="4000"
					background="#FFFFFF"
					indicators
					class="carousel-center"
					style="min-width: 98%; margin-left: 1%; margin-right: 1%;">
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

			<b-row class="my-4">
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
	</div>
</template>

<script>
export default {
	data () {
		return {
			location: null,
			locations: [
				{
					value: null,
					text: 'Select'
				},
				{
					value: 'jakarta',
					text: 'Jakarta'
				},
				{
					value: 'bandung',
					text: 'Bandung'
				},
				{
					value: 'surabaya',
					text: 'Surabaya'
				},
			]
		}
	}
}
</script>

<style scoped>
.top-menu {
	padding: 15px;
	width: 100%;
	border-radius: 15px 15px 0 0;
	border-color: #B8860B;
	border-style: solid;
}

.top-menu:nth-child(1) {
	border-width: 1px 1px 0 1px;
}

.top-menu:nth-child(2) {
	border-width: 1px;
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

</style>