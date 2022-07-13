import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import buy from '../views/buy.vue';
import restore from "../views/restore.vue"
import maintenance from "../views/maintenance.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: buy
  },
  {
    path: '/Maintenance',
    name: 'Maintenance',
    component: maintenance
  },
  {
    path: '/Restore',
    name: 'Restore',
    component: restore
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
