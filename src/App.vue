<template>
	<div id="app">
		<transition name="fade" mode="out-in" @before-enter="beforeEnter" appear>
			<router-view/>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			
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
	:root {
		--breakpoint-xs: 0;
		--breakpoint-sm: 425px;
		--breakpoint-lg: 1024px;
	}
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

	/* transition effect styling */
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
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
</style>
