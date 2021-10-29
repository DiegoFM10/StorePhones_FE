import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import IniciarSecion from './components/IniciarSecion.vue'
import Inventario from './components/Inventario.vue'
import Home from './components/Home.vue'
import actualizarProducto from './components/actualizarProducto.vue'
import insertarProducto from './components/insertarProducto.vue'
const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  
  {
    path: '/user/inventario',
    name: 'inventario',
    component: Inventario
  },

  {
    path: '/user/actualizar',
    name: 'actualizarProducto',
    component: actualizarProducto,
    props:true

  },
  {
    path: '/user/insertar',
    name: 'insertar',
    component: insertarProducto

  },
  



   
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
