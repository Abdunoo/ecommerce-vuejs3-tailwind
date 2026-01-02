import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import DetailProduct from './views/DtlProduct.vue';
import Cart from './views/Cart.vue';
import Admin from './views/Admin.vue';
import Login from './views/Login.vue';

const routes = [
  { path: '/', redirect: '/dashboard' },
//   { path: '/dashboard', component: Dashboard, children: 
//   	[
// 		{path:':cat', component:Category},
// 	] 
//   },
  { path: '/dashboard', component: Dashboard },
  { path: '/product/:id', component: DetailProduct },
  {path:'/cart', component: Cart},
  {path:'/admin', component: Admin, meta: { requiresAuth: true }},
  {path:'/login', component: Login},
  {
	path: '/ticketing',
	beforeEnter() {
	  window.location.href = 'https://sandbox2.panemu.com/ticketing/index.html';
	}
  }
  
]

const router = createRouter({
	history: createWebHistory(''),
	routes, // Your defined routes go here
	scrollBehavior(to, from, savedPosition) {
	  // Scroll to the saved position if it exists, otherwise scroll to the top
	  if (savedPosition) {
		return savedPosition;
	  } else {
		return { top: 0 };
	  }
	},
  });  

// router.beforeEach((to, from, next) => {
// 	if (to.meta.requiresAuth) {
// 		let role = localStorage.getItem('role');
// 		if (role != 'admin') {
// 			next('/login');
// 		} 
// 	}
//  });

 export default router;
