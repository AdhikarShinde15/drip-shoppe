import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyAccount from '../views/MyAccount.vue'
import ShopPlp from '../views/ShopPlp.vue'
import Blogs from '../views/Blogs.vue'
import OurStory from '../views/OurStory.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopPlp
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/ourstory',
    name: 'OurStory',
    component: OurStory
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
