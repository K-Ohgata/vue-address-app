import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Addresses from '../views/Addresses.vue';
import AddressForm from '../views/AddressForm.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 呼び出されたタイミングで関数でimportされている
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addresses',
    name: 'Addresses',
    component: Addresses,
  },
  {
    path: '/addresses/:address_id?/edit',
    name: 'Address_edit',
    component: AddressForm,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
