<template>
	<div id="bussiness-storage">
		<Header />

		<b-container class="mt-4">
			<b-row align-v="stretch">
				<b-col md="12" class="top-menu">
					<b-row>
						<b-col md="6">
							<h5 class="text-left font-weight-bold">Bussiness Storage</h5>
							<p class="small text-left">Create more spac in your place of bussiness, find our more or simply request a quote.</p>
						</b-col>
						<b-col md="6" align-self="center" style="text-align: end;">
							<b-button variant="primary" class="mr-1" size="sm" to="/">Storage Calculator ></b-button>
							<b-button variant="primary" size="sm" to="/">Reserve Your Space ></b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>

		<b-container style="border: 1px solid #B8860B;">
			<b-row>
				<b-col md="4" class="pl-0">
					<b-list-group class="text-left">
						<b-list-group-item>Bussiness Friendly Self-Storage</b-list-group-item>
						<b-list-group-item>Storage with Flexible Rent Period</b-list-group-item>
						<b-list-group-item>Storage for Archiving</b-list-group-item>
						<b-list-group-item>Storage for E-commerce Bussiness</b-list-group-item>
						<b-list-group-item>Storage of Stock/Sales Materials</b-list-group-item>
						<b-list-group-item>Use Self-Storage as Your Integrated Distribution Hub</b-list-group-item>
						<b-list-group-item>Online Bill Payment</b-list-group-item>
						<b-list-group-item>Security</b-list-group-item>
						<b-list-group-item>Access Hours</b-list-group-item>
						<b-list-group-item>Office Opening Hours</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col md="8" class="pt-4">
					<b-row>
						<b-col md="6">
							<h5 class="text-left font-weight-bold">Bussiness friendly self-storage</h5>
							<p class="small text-left">Cras hendrerit elit vitae sollicitudin scelerisque. Mauris sollicitudin rhoncus luctus. Mauris scelerisque, risus vitae condimentum rhoncus, odio nulla rhoncus augue, elementum porttitor metus lectus sed nulla. Aliquam erat volutpat. Suspendisse sagittis, turpis eu varius blandit, neque mauris molestie dolor, non cursus elit nunc in sapien. Praesent pretium augue neque, vel elementum purus egestas sed. Mauris vel sapien erat. Ut tempus risus posuere lacus bibendum varius.</p>
							<p class="small text-left">Suspendisse finibus commodo feugiat. Quisque nec tellus quis elit pretium bibendum. Aenean at nulla sed elit laoreet finibus. Vivamus non lorem mollis urna efficitur viverra eget a purus. Suspendisse mollis erat tellus, eget ullamcorper eros pretium sit amet. Donec vulputate congue blandit. Donec porttitor tortor eu sapien porta, vitae viverra lorem ultrices.</p>
						</b-col>
						<b-col md="6">
							<b-col>
								<b-img src="https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" fluid></b-img>
							</b-col>
							<b-col class="mt-2">
								<b-card
									no-body
									border-variant="primary"
									header="Primary"
									header-bg-variant="primary"
									header-text-variant="white"
									align="center">
									<template v-slot:header>
										<h6 class="text-left font-weight-bold mb-0">Locate the nearest Your Space</h6>
									</template>
									<b-card-body>
										<b-form inline>
											<b-form-select :options="locations" v-model="location" size="sm" class="mr-1 w-75"></b-form-select>
											<b-button type="submit" size="sm" variant="primary">Find ></b-button>
										</b-form>
									</b-card-body>
								</b-card>
							</b-col>
						</b-col>
					</b-row>

					<b-row>
						<b-col md="6">
							<b-card
								no-body
								border-variant="primary"
								header="Primary"
								header-bg-variant="primary"
								header-text-variant="white"
								align="center">
								<template v-slot:header>
									<h6 class="text-left font-weight-bold mb-0">50% Discount Offer</h6>
								</template>
								<b-card-body>
									<h6 class="font-weight-bold">For up to 4 weeks with a 6 moths contract</h6>
								</b-card-body>
							</b-card>
						</b-col>
						<b-col md="6">
							<b-card
								no-body
								border-variant="primary"
								header="Primary"
								header-bg-variant="primary"
								header-text-variant="white"
								align="center">
								<template v-slot:header>
									<h6 class="text-left font-weight-bold mb-0">Ordering Packaging Materials</h6>
								</template>
								<b-card-body>
									<h6 class="font-weight-bold">Spend over $1,000 and we deliver for free</h6>
								</b-card-body>
							</b-card>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>

		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Header,
		Footer
	},
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
	border: 1px solid #B8860B;
	padding: 15px;
	width: 100%;
	border-radius: 15px 15px 0 0;
}

@media screen and (max-width: 375px) {
	.top-menu {
		margin-top: 15px;
		border-radius: unset;
	}
}

.list-group-item {
	border: 1px solid #B8860B;
}
</style>