import Vue from 'vue'
import Router from 'vue-router'
import menu from './views/menu.vue'
import plantilla  from './components/menuAdmin/plantilla.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/agregarUsuario',
      name: 'add',
      component :() => import('./components/agregarUsuario.vue')
    },
    {
      path: '/datosFamiliares',
      name: 'datosFamiliares',
      component :() => import('./components/datosFamiliares.vue')
    },
    {
      path: '/',
      name: 'Home',
      component :() => import('./views/Home.vue')
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('./components/nav.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/menu.vue')
    },
    {
      path: '/academy',
      name: 'academy',
      component: () => import('./components/academy.vue')
    },
    {
      path: '/plantilla',
      name: 'plantilla',
      component: () => import('./components/menuAdmin/plantilla.vue')
    }
  ]
})
