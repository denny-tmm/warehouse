<template>
	<div id="bussiness-storage" class="mt-4">
		<b-container>
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
				<b-col md="3">
					<b-list-group>
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
				<b-col md="9">
					<b-row>
						<b-col md="6"></b-col>
						<b-col md="6"></b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {

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
</style>