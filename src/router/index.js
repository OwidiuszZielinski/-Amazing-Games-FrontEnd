import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLogin from '../views/login/UserLogin.vue'
import UserRegister from '../views/register/UserRegister.vue'
import AvailableGames from '../views/AvailableGames.vue'
import UsersView from '../views/UsersView.vue'
import OrdersView from '../views/OrdersView.vue'

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
  {
    path: '/users',
    name: 'users',
    component: UsersView
  }, {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
]

const router = new VueRouter({
  routes
})

export default router
