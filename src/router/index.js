import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLogin from '../views/login/UserLogin.vue'
import UserRegister from '../views/register/UserRegister.vue'
import AvailableGames from '../views/AvailableGames.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/available',
    name: 'available',
    component: AvailableGames
  },
  {
    path: '/login',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister
  },
]

const router = new VueRouter({
  routes
})

export default router
