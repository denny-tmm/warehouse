import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: 'BBA Warehouse',
				metaTags: [
					{
						name: 'description',
						content: 'The Right Place Where You Can Rent Storage Space Easly'
					},
					{
						property: 'og:desccription',
						content: 'The Right Place Where You Can Rent Storage Space Easly'
					}
				]
			}
		},
		{
			path: '/personal-storage',
			name: 'Personal Storage from BBA Warehouse',
			component: () => import('../views/PersonalStorage.vue'),
			meta: {
				title: 'Rent a personal storage with BBA Warehouse',
				metaTags: [
					{
						name: 'description',
						content: 'Find out more about storing personal items and how to reserve a storage room online.'
					},
					{
						propery: 'og:description',
						content: 'Find out more about storing personal items and how to reserve a storage room online.'
					}
				]
			}
		},
		{
			path: '/bussiness-storage',
			name: 'Bussiness Storage from BBA Warehouse',
			component: () => import('../views/BussinessStorage.vue'),
			meta: {
				title: 'Rent a bussiness storage with BBA Warehouse',
				metaTags: [
					{
						name: 'description',
						content: 'Create more space in your place of bussiness, simply request a quote now'
					},
					{
						propery: 'og:description',
						content: 'Create more space in your place of bussiness, simply request a quote now'
					}
				]
			}
		},
	], 
	scrollBehavior (to, from, savedPosition) {
		return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 300)
        })
	}
})

export default router
