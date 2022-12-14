import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsfeedView from '../views/NewsfeedView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newsfeed',
    name: 'NewsfeedView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsfeedView.vue')
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    name: 'SinglePostView',
    path: '/post/:slug',
    component: () => import('@/views/SinglePostView.vue')
  },
  {
    path: '/explore',
    name: 'ExploreView',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreView.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
