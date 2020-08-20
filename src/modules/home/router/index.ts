import { RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'

export const homeRoutes: RouteRecordRaw = 
  {
    path: '/',
    name: 'home',
    component: Home
  }